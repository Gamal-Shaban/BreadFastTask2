import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CommentType} from '../types';
import {COLORS} from '../theme';
import {normalizeFontSize, verticalScale} from '../utils/responsiveUtils';

export const CommentItem = ({item}: {item: CommentType}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        <Text style={styles.titleType}>name : </Text>
        {item?.name}
      </Text>
      <Text style={[styles.name, styles.email]}>
        <Text style={styles.titleType}>email : </Text>
        {item?.email}
      </Text>
      <Text style={[styles.name, styles.email]}>
        <Text style={styles.titleType}>comment : </Text>
        {item?.body}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: verticalScale(10),
    borderColor: COLORS.GRAY_II,
    borderWidth: verticalScale(1),
    borderRadius: verticalScale(8),
    justifyContent: 'center',
    padding: verticalScale(10),
  },
  name: {
    fontSize: normalizeFontSize(18),
    textAlign: 'left',
  },
  email: {
    marginTop: verticalScale(10),
  },
  titleType: {
    fontSize: normalizeFontSize(18),
    color: '#01B8F0',
  },
});
