import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class HelloWorld extends Component {

  render() {
    return  (

			<View>
			<Text style={styles.yup}>

			Hello World.

			</Text>
			</View>

		)
    }
}

const styles = StyleSheet.create({
yup: {
 color: "blue",
 fontSize: 20

}

});
