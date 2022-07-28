import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/theme';
import {horizontalScale, verticalScale} from '../../utils/responsiveUtils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
  },
  image: {
    width: horizontalScale(125),
    height: verticalScale(125),
    marginTop: verticalScale(-35),
    alignSelf: 'center',
  },
});
