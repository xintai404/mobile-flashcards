import React, { Component } from 'react'
import {View, TouchableOpacity, Text, FlatList, ScrollView, StyleSheet } from 'react-native'
import * as api from '../utils/api'

export default class DeckList extends Component{
	decks = [
		{title: 'reacts', questions: 12},
		{title: 'easy', questions:2}
	]

	renderItem({item}) {
		return (
			<View style={styles.item}>
				<Text style={styles.title}>
					{item.title}
				</Text>
				<Text style={styles.number}>
					{item.questions} cards 
				</Text>
			</View>
		)
	}
	render(){
		return (
			<ScrollView style={styles.container}>

				{decks && decks.map(deck =>{
					return(
						<TouchableOpacity style={styles.item}
					 		key={deck.title}
					 		onPress={() => this.props.navigation.navigate(
					 			'deck',
					 			{title: deck.title}
					 		)}
					 	>
					 		<Text style={styles.title}>
								{deck.title}
							</Text>
							<Text style={styles.number}>
								{deck.questions} cards 
							</Text>

						</TouchableOpacity>
					)
				})}
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({

	container:{
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff'
	},

	item:{
		height: 100,
		alignSelf: 'center',
		borderBottomWidth: 2,
		borderStyle: 'solid',
		borderBottomColor: '#ddd'
	},

	title:{
		fontSize: 25,
		color: 'black',
		textAlign: 'center'
	},

	number:{
		fontSize: 12,
		color: 'grey',
		textAlign: 'center'
	}

})