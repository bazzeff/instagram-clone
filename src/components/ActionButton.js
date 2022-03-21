import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React, {Component} from 'react';

const ActionButton = () => {
  return (
    <View style={styles.action}>
        <TouchableHighlight
          underlayColor={constants.actionColor}
          onPress={this.props.onPress}>
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
  )
}

export default ActionButton

const styles = StyleSheet.create({})