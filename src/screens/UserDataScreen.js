import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getFirestore } from "firebase/firestore"

const UserDataScreen = () => {

    const GetData = () => {
        //
    }
  return (
    <View>
      <Text style={styles.mainContainer}>UserData</Text>
      <Button title="Get data" onPress={GetData}>
        Login
      </Button>
    </View>
  )
}

export default UserDataScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
    },
})