import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {normalizeFontSize, verticalScale} from '../../utils/functions';
import {COLORS} from '../../utils/theme';
import {AppDispatch} from '../../redux/store';
import {initialStatesType, PostDetailsType} from '../../constants';
import {PostItem} from '../../components/postItem';
import {fetchPosts} from '../../redux/slices/postsSlice';
import {Loading} from '../../components/loading';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Posts</Text>
    </View>
  );
};

export const PostsScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {postsData, loading} = useSelector((state: initialStatesType) => ({
    postsData: state?.posts?.postsData,
    loading: state?.posts?.isLoading,
  }));

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderItem = ({item}: {item: PostDetailsType}) => {
    return <PostItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <Header />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
  },
  title: {
    fontSize: normalizeFontSize(18),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  header: {
    height: verticalScale(45),
    alignSelf: 'stretch',
    borderBottomWidth: verticalScale(0.5),
    borderBottomColor: COLORS.GRAY_II,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainerStyle: {
    marginTop: verticalScale(15),
    paddingBottom: verticalScale(30),
  },
});
