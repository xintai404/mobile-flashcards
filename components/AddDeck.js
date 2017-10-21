import React, {Component}from 'react'
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Keyboard} from 'react-native'
import { saveDeckTitle } from '../utils/api'

export default class AddDeck extends Component{

	constructor(props){
		super(props)

		this.state = {
			text :''
		}
		this.submit = this.submit.bind(this)
	}
	

	submit(){
		const { text } = this.state
		saveDeckTitle(text)

		Keyboard.dismiss()
		this.props.navigation.navigate(
      		'Deck',
      		{ title: text, questions: [] }
    	)
	}
	render(){
		const { text } = this.state
		return (
			<View style={styles.container}>
				<Text style={styles.title}>    
					What is the title of the new deck?
				</Text>
				<TextInput style={styles.text}
					placeholder="Deck Title"
					onChangeText={(text) => this.setState({text})}
				/>

				<TouchableOpacity style={[styles.submitBtn, {backgroundColor: text.trim()? 'black': 'grey'}]} 
					onPress={this.submit}
					disabled={!text.trim()}
				>
					<Text style={styles.submitBtnText}>
					 Submit
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1, 
		padding: 50,
		alignItems: 'center', 
		backgroundColor: '#fff'
	},
	title:{
		fontSize: 40,
		marginTop: 30,
		marginBottom: 40,
		textAlign: 'center',
	},
	text:{   
		height: 30, 
		width: 280, 
		borderColor:'grey', 
		borderRadius: 5,
		borderWidth: 1,
		fontSize: 12,
		paddingTop: 3,
		paddingLeft:2,
	},
	submitBtn:{
		borderRadius: 7,
		paddingTop: 10,
		paddingLeft: 25,
		paddingRight: 25,
		paddingBottom: 10,
		marginTop: 30
	},
	submitBtnText:{
		textAlign:'center',
		color: '#fff',
		fontSize: 12
	}
})