import { Text, TextProps } from 'react-native';
import { globalStyles } from '../styles/global';

interface ThemedTextProps extends TextProps {
  type?: 'title' | 'subtitle' | 'default' | 'defaultSemiBold';
}

export function ThemedText({ type = 'default', style, ...props }: ThemedTextProps) {
  const baseStyle = (() => {
    switch (type) {
      case 'title':
        return [globalStyles.textBold, { fontSize: 24 }];
      case 'subtitle':
        return [globalStyles.textSemiBold, { fontSize: 18 }];
      case 'defaultSemiBold':
        return globalStyles.textSemiBold;
      default:
        return globalStyles.text;
    }
  })();

  return <Text style={[baseStyle, style]} {...props} />;
}
