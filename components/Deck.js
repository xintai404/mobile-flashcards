import React, {Component} from 'react'
import { StyleSheet, Text, View} from 'react-native'

export default class Deck extends Component{
	static navigationOptions = ({ navigation }) => {
	    const { title } = navigation.state.params
	    return {
	      title: title,
	      headerTintColor: 'white',
	      headerStyle:{
	      	backgroundColor: 'black',
	      	paddingTop: -10,
	      	height: 40
	      }
	    }
	}

	render(){
		return (
			<View>
				<Text> my deck </Text>
			</View>
		)
	}
}