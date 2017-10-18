import React, {Component}from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default class AddDeck extends Component{


	render(){
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
				<TextInput style={{height: 30, width: 200, borderColor:'grey', borderWidth: 1}}/>
			</View>
		)
	}
}