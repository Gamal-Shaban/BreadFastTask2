import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';
import {normalizeFontSize, verticalScale} from '../../utils/responsiveUtils';

export const styles = StyleSheet.create({
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
