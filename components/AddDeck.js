import React, {Component}from 'react'
import { StyleSheet, TextInput, View, Text, TouchableOpacity} from 'react-native'

export default class AddDeck extends Component{


	render(){
		return (
			<View style={styles.container}>
				{<Text style={styles.title}>
					What is the title of the new deck?
				</Text>}
				<TextInput style={styles.text}
					placeholder="Deck Title"
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
		backgroundColor:'black',
		marginTop: 30
	},
	submitBtnText:{
		textAlign:'center',
		color: '#fff',
		fontSize: 12
	}
})