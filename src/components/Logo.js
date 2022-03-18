import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/ew-instagram-logo-transparent-related-keywords-logo-instagram-vector-2017-115629178687gobkrzwak.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})
