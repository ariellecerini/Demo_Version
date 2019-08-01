import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class TextRender extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.typeContainer}>
          Heyyyyy
        </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  typeContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0

  }
});
