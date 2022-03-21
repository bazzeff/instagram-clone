import React, { useState } from 'react';
import {  StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import Header from '../../components/home/Header'
import Stories from '../../components/home/Stories'
import Post from '../../components/home/Post'
import POSTS from '../../data/posts'
import BottomTabs, { bottomTabIcons } from '../../components/home/BottomTabs'



const HomeScreen = ({ navigation }) => {
    const [posts, setPosts] = useState(POSTS);
  return (
      <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text> 
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
       {posts.map((post, index) => (
        <Post key={index} post={post} /> 
       ))}
      </ScrollView>
      <BottomTabs  icons={bottomTabIcons} />
      </SafeAreaView> 
  )
}

export default HomeScreen


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
    },
})