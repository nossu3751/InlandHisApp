import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { typography } from '../styles/global';
import { StatusBar } from 'expo-status-bar';
import { LucideBell, LucideMessageCircle, LucideMessageCircleHeart} from 'lucide-react-native';
import React from 'react';

interface TabHeaderProps {
  title: string;
  isHome?: boolean;
}

export const TabHeader = React.memo(function TabHeader({ title, isHome }: TabHeaderProps) {
  const insets = useSafeAreaInsets();
  console.log(insets)
  console.log('TabHeader rendering:', title, insets);

  const getHeaderContent = () => {
    if (title === '홈') {
        return (<>
            <Image 
                source={require('../assets/images/his_h_5.png')} 
                style={styles.logo}
                width={40}
                height={40}
                resizeMode="contain"
            />
            <View style={styles.rightIcons}>
                <LucideBell size={25} color="#FFFFFF"/>
                <LucideMessageCircle size={25} color="#FFFFFF"/>
            </View>
        </>)
    } else if (title === '검색') {
        return (<>
        <Text style={styles.title}>{title}</Text>
        </>)
    } else if (title === '프로필') {
        return (<>
            <Text style={styles.title}>{title}</Text>
            </>)
    } else if (title === '일정') {
        return (<>
            <Text style={styles.title}>{title}</Text>
            </>)
    }
  }

  return (<>
    {/* <View style={[styles.header, { paddingTop: insets.top || 8 }]}> */}
    <StatusBar style="light" backgroundColor="#000000" />
    <View style={[styles.header, { paddingTop: 0},]}>
      {getHeaderContent()}
    </View>
  </>
  );
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000000',
    width: '100%',
    paddingHorizontal: 24,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingTop: 12,
    
  },
  title: {
    display: 'flex',
    color: '#FFFFFF',
    fontSize: 32,
    fontFamily: typography.bold,
    lineHeight: 0,
  },
  logo: {
    width: 40,
    height: 40,
  },
  rightIcons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  }
});
