import { View, Text, StyleSheet } from 'react-native';
import { TabHeader } from '@/components/TabHeader';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <TabHeader title="프로필" />
      <View style={styles.content}>
        <Text>Profile Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 