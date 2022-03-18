import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity>
      <Image
        style={styles.logo}
        source={require('../../assets/header-logo.png')}
      />
    </TouchableOpacity>
    
      <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
      <Image
        style={styles.icon}
        source={{
            uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
        }}
      />
          
      </TouchableOpacity>
      <TouchableOpacity>
      <Image
        style={styles.icon}
        source={{
            uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
        }}
      />
          
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.unreadBadge}>
          <Text style={styles.unreadBadgeText}>11</Text>
      </View>
      <Image
        style={styles.icon}
        source={{
            uri: 'https://icon-library.com/images/send-message-icon/send-message-icon-18.jpg',
        }}
      />
          
      </TouchableOpacity> 
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginHorizontal: 20, 
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  icon: {
     width: 30,
     height: 30, 
     marginLeft: 10,
     resizeMode: 'contain', 
  },
  iconContainer: {
     flexDirection: 'row',
  },
  unreadBadge: {
      backgroundColor: "#FF3250",
      position: 'absolute',
      left: 20,
      bottom: 18,
      width: 25,
      height: 18,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
  },
  unreadBadgeText: {
      color: 'white',
      fontWeight: '600',
  }
});
