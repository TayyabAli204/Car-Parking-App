import { StyleSheet } from 'react-native';
import {
  fontPixel,
  heightPixel,
  pixelSizeVertical,
} from '../../utils/ResponsiveStyle';
import COLORS from '../../consts/colors';

const SplashScreenStyles = StyleSheet.create({
  logoContainer: {
    flex: 1.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: fontPixel(18),
    color: COLORS.primary,
    letterSpacing: 1,
    paddingTop: pixelSizeVertical(54),
  },
  img: {
    width: '100%',
    height: heightPixel(290),
  },
});

export default SplashScreenStyles;
