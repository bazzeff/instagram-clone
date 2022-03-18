import { StyleSheet, Text, Touchable, View, Image } from 'react-native';
import React, { useState } from 'react';
import { Divider } from 'react-native-elements';

export const bottomTabIcons =[
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-regular/144/ffffff/home.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',

    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/fluency-systems-filled/500/ffffff/search--v1.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',

    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/fluency-systems-filled/50/ffffff/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',

    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
        inactive: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',

    },
    {
        name: 'Profile',
        active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
        inactive: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',

    }
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home');
    const Icon = ({ icon }) => (
        <Touchable onPress={() => setActiveTab(icon.name)}>
            <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} 
            style={[styles.icon, icon.name === 'Profile' ? styles.profilePic(): null,
            activeTab === 'Profile' && icon.name === activeTab ? styles.profilePic(activeTab) : null,]} />
        </Touchable>
    )
  return (
      <View style={styles.wrapper}>
          <Divider width={1} orientation='vertical' />
    <View style={styles.container}>
      {icons.map((icon, index)  => (
          <Icon key={index} icon={icon}/>
      ))}
    </View>
      </View>
  )
}

export default BottomTabs

const activeTab = ('' ==='Profile' ? 2 : 0);

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '#000',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        padding: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    profilePic: {
        borderWidth: activeTab,
        borderRadius: 50,
        borderColor: '#fff',
    },
})