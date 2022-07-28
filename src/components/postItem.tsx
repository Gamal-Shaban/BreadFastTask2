import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS, IMAGES} from '../theme/theme';
import {
  horizontalScale,
  normalizeFontSize,
  verticalScale,
} from '../utils/responsiveUtils';

export const PostItem = ({item, onPressItem}: any) => {
  return (
    <Pressable style={styles.item} onPress={() => onPressItem(item)}>
      <View style={styles.avatarView}>
        <View style={styles.imageContainer}>
          <Image source={IMAGES.avatar} style={styles.avatar} />
          <Text style={styles.userNameText}>User Name</Text>
        </View>
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
  imageContainer: {
    alignItems: 'center',
  },
  userNameText: {
    fontSize: normalizeFontSize(15),
    fontWeight: 'bold',
  },
});
