import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddNewPost from '../../components/post/newPost/AddNewPost'

const NewPostScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  )
}

export default NewPostScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
    },
})