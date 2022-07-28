import React, {useEffect} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import {fetchComments} from '../../redux/slices/commetsSlice';
import {AppDispatch} from '../../redux/store';
import {CommentType, initialStatesType} from '../../types';
import {CommentItem} from '../../components/commentItem';
import {IMAGES} from '../../theme/theme';
import {useRoute} from '@react-navigation/native';

export const PostDetailsScreen = () => {
  const {postDetails, commentsList} = useSelector(
    (state: initialStatesType) => ({
      postDetails: state.posts.selectedPost,
      commentsList: state.comments.commentsData?.comments,
    }),
  );
  const {postId} = useRoute().params;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [dispatch]);

  const ListHeaderComponent = () => {
    return (
      <View style={styles.ListHeaderComponentContainer}>
        <View style={styles.titleView}>
          <Image source={IMAGES.avatar} style={styles.avatar} />
          <Text style={styles.postTitle}>{postDetails?.title}</Text>
        </View>
        <Text style={styles.postBody}>{postDetails?.body}</Text>
        {commentsList?.length > 0 && (
          <Text style={styles.commentsTitle}>Comments</Text>
        )}
      </View>
    );
  };
  const renderItem = ({item}: {item: CommentType}) => {
    return <CommentItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderItem}
        data={commentsList}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};
