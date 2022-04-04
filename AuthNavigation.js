import { View, Text } from 'react-native'
import React, { useEffect, useState} from 'react'
import { SignInStack, SignOutStack } from './navigation' 
import { authentication } from './firebase/firebase-config' 
import { signOut, onAuthStateChanged } from "firebase/auth";   
 
export const AuthNavigation = () => {
    const [currentUser, setCurrentUser] = useState(null)
    const useHandler = user => user ? setCurrentUser(user) : setCurrentUser(null)
    useEffect(() => {
        onAuthStateChanged(authentication, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    })
    signOut(authentication).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      }); 
    return <> {currentUser ? <SignInStack /> : <SignOutStack/> } </>
}

export default AuthNavigation;