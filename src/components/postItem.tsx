import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSelectedPost} from '../redux/slices/postsSlice';
import {COLORS, IMAGES} from '../utils/theme';
import {
  horizontalScale,
  normalizeFontSize,
  verticalScale,
} from '../utils/functions';

export const PostItem = ({item}: any) => {
  const dispatch = useDispatch();
  const onPressItem = () => {
    dispatch(setSelectedPost(item));
  };
  return (
    <Pressable style={styles.item} onPress={onPressItem}>
      <View style={styles.avatarView}>
        <Image source={IMAGES.avatar} style={styles.avatar} />
        <Text style={styles.title} numberOfLines={3}>
          {item?.title}
        </Text>
      </View>

      <Text style={styles.body} numberOfLines={4}>
        {item?.body}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: verticalScale(10),
    borderColor: COLORS.GRAY_II,
    borderWidth: verticalScale(0.5),
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(16),
    borderRadius: verticalScale(7),
    backgroundColor: COLORS.GRAY_III,
  },
  title: {
    fontSize: normalizeFontSize(18),
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: verticalScale(24),
    flex: 1,
  },
  body: {
    fontSize: normalizeFontSize(16),
    textAlign: 'left',
    marginTop: verticalScale(10),
    lineHeight: verticalScale(20),
  },
  avatarView: {
    flexDirection: 'row',
  },
  avatar: {
    height: verticalScale(80),
    width: verticalScale(80),
  },
});
