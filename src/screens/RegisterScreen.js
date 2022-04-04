import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator' 
import { authentication, db } from '../../firebase/firebase-config' 
import { signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, addDoc, setDoc } from "firebase/firestore"; 
import { response } from 'express'


export default function RegisterScreen({ navigation }) {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })


  const onSignUpPressed = ({ navigation }) => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    } 
 
    const getRandomProfilePicture = async () => {
      const response = await fetch('https://randomuser.me/api')
      const data = await response.json()
      return data.results[0].picture.large
    }
     const authUser =  createUserWithEmailAndPassword(authentication, email, password, name)
      .then((userCredential) => {
      // Signed in 
      console.log(re);
      setIsSignedIn(true)
      const user = userCredential.user;
      const docRef = addDoc(collection(db, "users"), {
        owner_uid: user.uid,
        displayName: name,
        email: user.email,
        profile_picture: getRandomProfilePicture(),
      });
      await setDoc(doc(docRef,  user.uid), {
        name: "San Francisco", 
        state: "CA", 
        country: "USA",
        capital: false, 
        population: 860000,
        regions: ["west_coast", "norcal"] });
      // ...
      if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const profile_picture = user.profile_picture;
        const emailVerified = user.emailVerified;
      
        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
      }
     })
     .catch((error) => {
      console.log(error);
      setIsSignedIn(false)
       const errorCode = error.code;
       const errorMessage = error.message;
        
     });    
  } 
  signOut(authentication).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header> 
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry={true}
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button> 
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View> 
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
