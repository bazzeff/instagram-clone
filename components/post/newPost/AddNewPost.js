import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddNewPost = () => {
  return (
    <View>
      <Text style={styles.postText}>AddNewPost</Text>
    </View>
  )
}

export default AddNewPost

const styles = StyleSheet.create({
    postText: {
        color: '#fff',
    },
})