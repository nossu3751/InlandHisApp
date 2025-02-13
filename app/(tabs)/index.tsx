import { View, Text, StyleSheet } from 'react-native';
import { TabHeader } from '../../components/TabHeader';

export default function HomeScreen() {
  console.log('HomeScreen rendering');  // 디버깅용 로그
  return (
    <View style={styles.container}>
      <TabHeader title="홈"/>
      <View style={styles.content}>
        <Text>Home Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});
