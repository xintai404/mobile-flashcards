import React, {Component} from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import * as api from '../utils/api'
import { AppLoading } from 'expo'

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

	state ={
		title: '',
		questions: [],
		ready: false
	}

	componentDidMount(){
		const { title } = this.props.navigation.state.params

		api.getDeck(title)
		.then( (deck) => {
			this.setState({
				title: deck.title,
				questions: deck.questions,
				ready: true
			})
		})
	}

	render(){
		const {title, questions, ready } = this.state
		const number = questions.length
		if(!ready){
			return < AppLoading/ >
		}
		return (
			<View style={styles.container}>
				<Text style={styles.title}>
					{title}
				</Text>
				<Text style={styles.number}>
					{number} cards
				</Text>
				<View>
				<TouchableOpacity style={styles.addBtn} onPress={() => this.props.navigation.navigate(
					'AddCard',
					{title: title}
				)}>
					<Text style={styles.btnText, {color:'black'}}>
					 Add Card
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.startBtn} onPress={() => this.props.navigation.navigate(
					'Quiz',
					{title: title}    
				)}>
					<Text style={styles.btnText, {color: 'white'}}>
					 Start Quiz
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
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	title:{
		fontSize: 30,
		textAlign: 'center',
	},
	number:{   
		fontSize: 15,
		marginTop: 15,
		marginBottom: 40,
		textAlign: 'center',
		color: 'grey'
	},
	addBtn:{
		borderRadius: 7,
		paddingTop: 12,
		paddingLeft: 45,
		paddingRight: 45,
		paddingBottom: 12,
		marginTop: 30,
		backgroundColor: 'white',
		borderColor:'black',
		borderWidth: 1,
		borderStyle: 'solid'
	},
	startBtn:{
		borderRadius: 7,
		paddingTop: 12,
		paddingLeft: 45,
		paddingRight: 45,
		paddingBottom: 12,
		marginTop: 10,
		backgroundColor: 'black',
	},
	btnText:{
		textAlign:'center',
		fontSize: 12
	}
})