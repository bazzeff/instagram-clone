import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import * as yup from 'yup';
import { Formik } from 'formik';
import { Divider } from 'react-native-elements';
import validUrl from 'valid-url';
import { db, authentication } from '../../firebase/firebase-config'
import { doc, setDoc, Timestamp } from "firebase/firestore"; 

const PLACEHOLDER_IMG = 'https://media.architecturaldigest.com/photos/58f918044f42bd463db36a3f/4:3/w_2663,h_1997,c_limit/1%20-%2010%20Greenest%20Cities%20in%20America%20in%202017.jpg';
const uploadPostSchema = yup.object().shape({
  imageUrl: yup.string().url().required('A URL is required'),
  caption: yup.string().max(2200, 'Caption has reached the character limit.'),
}); 

const FormikPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null)
  const getUserName = () => {
    const user = authentication.currentUser
    const unsubscribe = await getDocs(collection(db, "users"), where("uid", "==", user.uid).limit(1).onSnapshot(
      snapshot => snapshot.docs.map(doc => {
        setCurrentLoggedInUser({
          name: doc.data().name,
          profile_picture: doc.data().profile_picture,
        })
      })
    ));
    return unsubscribe;
  }
  useEffect(() => {
    getUserName()
  }, [])

  const uploadPostToFirebase = ({ imageUel, caption }) => {
    const unsubscribe = db.collection('users').doc(authentication.currentUser.email).collection('posts')
    .add({
      imageUrl: imageUrl,
      name: currentLoggedInUser.name,
      username: currentLoggedInUser.username,
      profile_picture: currentLoggedInUser.profile_picture,
      owner_uid: authentication.currentUser.uid,
      owner_email: authentication.currentUser.email,
      caption: caption,
      createdAt: Timestamp(),
      likes_by_users: [],
      comments: [,]
    })
    .then(() => navigation.goBack())
    return unsubscribe;
  }

  return (
    <Formik initialValues={{ caption: '', imageUrl: ''}}
    onSubmit={(values) => {
      uploadPostToFirebase(values.imageUrl, values.caption)
    }}
    validationSchema={uploadPostSchema}
    validateOnMount={true}
    >
    {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) =>  (
      <>
     <View style={styles.container}>
      <Image source={{ uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG }} style={styles.imageStyle} />
       <View>
       <TextInput 
       style={styles.formText} 
       placeholder='Write a caption' 
       placeholderTextColor='gray' 
       multiline={true}
       onChangeText={handleChange}
       onBlur={handleBlur}
       value={values.caption} 

       />
       </View>
     </View>
     <Divider width={0.2} orientation='vertical' />
       <TextInput 
       onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
       style={styles.formText2} 
       placeholder='Enter Image Url' 
       placeholderTextColor='gray' 
       onChangeText={handleChange}
       onBlur={handleBlur}
       value={values.imageUrl}  

       />
       {errors.imageUrl && (
         <Text style={styles.textError}>
           {errors.imageUrl}
         </Text>
       
       )}
       <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
        
     </>
    )   
    }
    </Formik>
  )
}

export default FormikPostUploader

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  formText: {
      color: '#fff',
      fontSize: 20,
  },
  formText2: {
      color: '#fff',
      fontSize: 18,
  },
  captionView: {
    flex: 1,
    marginLeft: 12,
  },
  textError: {
    fontSize: 10,
    color: 'red',
  },
})