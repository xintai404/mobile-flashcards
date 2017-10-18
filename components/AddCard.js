import React, {Component}from 'react'
import { StyleSheet, TextInput, Text, View, TouchableOpacity} from 'react-native'


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

	render(){

		return (
			<View style={styles.container}>

				<TextInput style={styles.text}
					placeholder="Question"
				/>

				<TextInput style={styles.text}
					placeholder="Answer"
				/>

				<TouchableOpacity style={styles.submitBtn}>
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
		backgroundColor:'black',
		marginTop: 30
	},
	submitBtnText:{
		textAlign:'center',
		color: '#fff',
		fontSize: 12
	}
})