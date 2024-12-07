import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Platform, View } from 'react-native';
import { Home, Search, Calendar, User } from 'lucide-react-native';
import HomeScreen from './index';
import SearchScreen from './search';
import EventsScreen from './events';
import ProfileScreen from './profile';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LucideIcon } from 'lucide-react-native';
import { HapticTab } from '../../components/HapticTab';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  
  const tabBarStyle = {
    ...styles.tabBar,
    bottom: insets.bottom || 16,
  };

  console.log(tabBarStyle)

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: tabBarStyle,
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.3)',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarItemStyle: styles.tabBarItem,
          tabBarIcon: ({ focused, color }) => {
            let Icon: LucideIcon = Home;
            switch (route.name) {
              case 'index':
                Icon = Home;
                break;
              case 'search':
                Icon = Search;
                break;
              case 'events':
                Icon = Calendar;
                break;
              case 'profile':
                Icon = User;
                break;
            }
            return (
              <View style={styles.iconContainer}>
                <Icon size={25} color={color} />
                {focused && <View style={styles.activeIndicator} />}
              </View>
            );
          },
          tabBarButton: (props) => <HapticTab {...props} />,
        })}
      >
        <Tab.Screen
          name="index"
          component={HomeScreen}
          options={{
            title: 'Home',
          }}
        />
        <Tab.Screen
          name="search"
          component={SearchScreen}
          options={{
            title: 'Search',
          }}
        />
        <Tab.Screen
          name="events"
          component={EventsScreen}
          options={{
            title: 'Events',
          }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
          }}
        />
      </Tab.Navigator>
      <View style={[styles.safeAreaFill, { height: insets.bottom }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaFill: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
  },
  tabBar: {
    position: 'absolute',
    width: '100%',
    height: 52,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingVertical: 0,
    shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: -1,
    // },
    // shadowOpacity: 0.03,
    // shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  tabBarItem: {
    height: 40,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateY: 7 }],
    height: '100%',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -10,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#A78BFA',
  },
});
