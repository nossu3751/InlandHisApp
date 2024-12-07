import { StyleSheet } from 'react-native';

export const typography = {
  regular: 'SUITE-Regular',
  medium: 'SUITE-Medium',
  semibold: 'SUITE-SemiBold',
  bold: 'SUITE-Bold',
};

export const globalStyles = StyleSheet.create({
  text: {
    fontFamily: typography.regular,
  },
  textMedium: {
    fontFamily: typography.medium,
  },
  textSemiBold: {
    fontFamily: typography.semibold,
  },
  textBold: {
    fontFamily: typography.bold,
  },
}); 