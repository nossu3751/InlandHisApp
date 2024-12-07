import { View, Text, StyleSheet } from 'react-native';
import { TabHeader } from '@/components/TabHeader';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <TabHeader title="검색" />
      <View style={styles.content}>
        <Text>Search Screen</Text>
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