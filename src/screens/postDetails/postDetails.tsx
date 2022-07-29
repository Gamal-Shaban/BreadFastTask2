import React, {useEffect} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import {
  fetchComments,
  fetchPostDetails,
  resetPostDetails,
} from '../../redux/slices/postDetailsSlice';
import {AppDispatch} from '../../redux/store';
import {CommentType, initialStatesType} from '../../types';
import {CommentItem} from '../../components/commentItem';
import {IMAGES} from '../../theme';
import {useRoute} from '@react-navigation/native';
import {Loading} from '../../components/loading';

export const PostDetailsScreen = () => {
  const {postDetails, isLoading, commentsList} = useSelector(
    (state: initialStatesType) => ({
      postDetails: state.postDetails?.postDetailsData,
      isLoading: state.postDetails?.isLoading,
      commentsList: state.postDetails.commentsData,
    }),
  );
  const {postId} = useRoute().params;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPostDetails(postId));
    dispatch(fetchComments(postId));

    return () => {
      dispatch(resetPostDetails());
    };
  }, [dispatch, postId]);

  const ListHeaderComponent = () => {
    if (postDetails?.id) {
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
    }
  };
  const renderItem = ({item}: {item: CommentType}) => {
    return <CommentItem item={item} />;
  };

  if (isLoading) {
    return <Loading />;
  } else {
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
  }
};
