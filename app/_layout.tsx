import { View } from 'react-native';
import { Stack } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  const [loaded] = useFonts({
    'SUITE-Regular': require('../assets/fonts/SUITE-Regular.otf'),
    'SUITE-Medium': require('../assets/fonts/SUITE-Medium.otf'),
    'SUITE-SemiBold': require('../assets/fonts/SUITE-SemiBold.otf'),
    'SUITE-Bold': require('../assets/fonts/SUITE-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <>
      <View style={{ height: insets.top, backgroundColor: '#000000' }} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#FFFFFF',
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
