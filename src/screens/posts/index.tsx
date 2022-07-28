import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {initialStatesType, PostDetailsType} from '../../types';
import {PostItem} from '../../components/postItem';
import {fetchPosts, setSelectedPost} from '../../redux/slices/postsSlice';
import {Loading} from '../../components/loading';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export const PostsScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {postsData, loading} = useSelector((state: initialStatesType) => ({
    postsData: state?.posts?.postsData,
    loading: state?.posts?.isLoading,
  }));
  const {navigate} = useNavigation();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderItem = ({item}: {item: PostDetailsType}) => {
    return <PostItem item={item} onPressItem={onPressItem} />;
  };
  const onPressItem = (item: PostDetailsType) => {
    dispatch(setSelectedPost(item));
    navigate(
      'postsDetails' as never,
      {
        postId: item.id,
      } as never,
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={postsData}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainerStyle}
        />
      )}
    </View>
  );
};
