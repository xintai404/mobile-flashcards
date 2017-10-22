import React, { Component }from 'react'
import { addCardToDeck } from '../utils/api'
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Keyboard } from 'react-native'
import { NavigationActions } from 'react-navigation'


export default class AddCard extends Component{
	static navigationOptions = ({ navigation }) => {
	    return {
	      title: 'Add Card',
	      headerTintColor: 'white',
	      headerStyle:{
	      	backgroundColor: 'black',
	      	paddingTop: -10,
	      	height: 40
	      }
	    }
	}

	constructor(props){
		super(props)
		this.navigation = this.props.navigation
		this.state={
			question:'',
			answer: ''
		}

		this.addNewCard = this.addNewCard.bind(this)
	}

	toHome(){
    	this.navigation.dispatch(NavigationActions.back())
	}

	addNewCard(){
		const { title } = this.navigation.state.params
		const card = {
			question: this.state.question,
			answer: this.state.answer
		}
		Keyboard.dismiss()
		addCardToDeck(title, card)

		this.navigation.goBack()

	}


	render(){
		const { question, answer } = this.state
		return (
			<View style={styles.container}>

				<TextInput style={styles.text}
					placeholder="Question"
					onChangeText={(text) => this.setState({question: text})}
				/>
    
				<TextInput style={styles.text}
					placeholder="Answer"
					onChangeText={(text) => this.setState({answer: text})}
				/>

				<TouchableOpacity style={[styles.submitBtn, {backgroundColor: question.trim() && answer.trim()? 'black' : 'grey'}]} 
					onPress={this.addNewCard}
					disabled={ !question.trim() && !answer.trim() }
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
		alignItems: 'center', 
		backgroundColor: '#fff'
	},

	text:{   
		height: 35, 
		width: 320, 
		marginTop: 30,
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