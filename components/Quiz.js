import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native'
import * as api from '../utils/api'
import { 
	clearLocalNotification,
  	setLocalNotification
} from '../utils/helper'


export default class Quiz extends Component{
	constructor(props){
		super(props)
		this.state = {
			index: 0,
			questions: [],
			score: 0,
			showAnswer: false
		}
		this.toggleShowAnswer = this.toggleShowAnswer.bind(this)
		this.onIncorrect = this.onIncorrect.bind(this)
		this.onCorrect = this.onCorrect.bind(this)
		this.reset = this.reset.bind(this)

	}


	componentDidMount(){
		const { title } = this.props.navigation.state.params
		api.getDeck(title)
		.then( deck => {
			this.setState({
				questions: Object.assign(deck.questions),
				index: 0
			})
		})
	}
	toggleShowAnswer(){
		this.setState((state) => {
			return {
				...state,
				showAnswer: !state.showAnswer
			}
		})
	}
	onIncorrect(){
		this.setState((state) =>{
			const { index } = state
			return {
				...state,
				index: index+1,
				showAnswer: false
			}
		})
	}

	onCorrect(){
		this.setState( (state) => {
			const { index, score } = state
			return {
				...state,
				index: index + 1,
				score: score + 1,
				showAnswer: false
			}
		})
	}

	reset(){
		this.setState({
			index: 0,
			score: 0,
			showAnswer: false
		})
	}

	render(){
		const { index, questions, score, showAnswer } = this.state
		if( index >= questions.length ){
			clearLocalNotification()
      		.then(setLocalNotification)

      		return (
      			<View style={styles.content}>
      				<Text style={styles.text}>
      				  	Your Score
      				</Text>
      				<Text style={styles.text} style={[ styles.text, {color: 'red'}]}>
      					{ Math.round( score/questions.length*100) }
      				</Text>

      				<TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.navigate(
						'Home'
					)}>
						<Text style={styles.btnText}>
						 Quit
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.resetBtn} onPress={() => this.reset()}>
						<Text style={styles.btnText}>
						 Restart
						</Text>
					</TouchableOpacity>
      			</View>
      		)
		}   

		return (
			
			<View style={styles.container}>
				<Text style={styles.page}>
					{index+1}/{questions.length}
				</Text>
				<View style={styles.content}>
				<Text style={styles.text}>
					{ 
						!showAnswer? questions[index]['question'] : questions[index]['answer']
					}
      			</Text>
      			<TouchableOpacity  onPress={this.toggleShowAnswer}>
	      			<Text style={styles.hint}>
	      			   	{ showAnswer? 'Question' : 'Answer' }
	      			</Text>
	      		</TouchableOpacity>

      			<TouchableOpacity style={styles.backBtn} onPress={this.onCorrect}>
					<Text style={styles.btnText}>
						 Correct
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.resetBtn} onPress={this.onIncorrect}>
					<Text style={styles.btnText}>
						 Incorrect
					</Text>
				</TouchableOpacity>
				</View>
			</View>
			
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'space-between',
		backgroundColor: '#fff'
	},
	page:{
		alignSelf: 'flex-start',
		fontSize: 15,
		marginTop: 5,
		marginLeft: 5,
		fontWeight: '400'
	},
	content: {
		flex: 1,
		alignItems: 'center', 
		justifyContent: 'center',
		marginTop: -20
	},
	text:{
		fontSize: 30,
		textAlign: 'center',
	},
	hint:{
		color: 'red',
		fontWeight: 'bold',
		paddingTop: 10
	},

	backBtn:{
		marginTop: 40,
		borderRadius: 7,
		paddingTop: 12,
		paddingLeft: 45,
		paddingRight: 45,
		paddingBottom: 12,
		marginTop: 30,
		backgroundColor: 'green',
		width: 150
	},
	resetBtn:{
		borderRadius: 7,
		paddingTop: 12,
		paddingLeft: 45,
		paddingRight: 45,
		paddingBottom: 12,
		marginTop: 10,
		backgroundColor: 'red',
		width: 150
	},
	btnText:{
		textAlign:'center',
		fontSize: 12,
		color: 'white'
	}
})

