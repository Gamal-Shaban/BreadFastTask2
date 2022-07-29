import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';
import {
  horizontalScale,
  normalizeFontSize,
  verticalScale,
} from '../../utils/responsiveUtils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: COLORS.WHITE,
  },
  contentContainerStyle: {
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(15),
    paddingBottom: verticalScale(30),
  },
  ListHeaderComponentContainer: {},
  postTitle: {
    fontSize: normalizeFontSize(20),
    lineHeight: verticalScale(22),
    fontWeight: 'bold',
    flex: 1,
  },
  postBody: {
    fontSize: normalizeFontSize(16),
    lineHeight: verticalScale(20),
    marginTop: verticalScale(15),
  },
  commentsTitle: {
    fontSize: normalizeFontSize(22),
    fontWeight: 'bold',
    marginTop: verticalScale(30),
    marginBottom: verticalScale(10),
  },
  titleView: {
    flexDirection: 'row',
  },
  avatar: {
    height: verticalScale(80),
    width: verticalScale(80),
  },
});
