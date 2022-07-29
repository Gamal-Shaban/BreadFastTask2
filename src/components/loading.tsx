import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {COLORS} from '../theme';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={COLORS.BLACK} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
