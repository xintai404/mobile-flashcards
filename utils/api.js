import { AsyncStorage } from 'react-native'
import { formatDecks } from './helper'

const DECK_KEY = 'Flashcard:Key'

export function addDecks(decks){
	return AsyncStorage.setItem(DECK_KEY, JSON.stringify(decks))
}
export function getDecks(){
	//AsyncStorage.removeItem(DECK_KEY)  
	return AsyncStorage.getItem(DECK_KEY)
			.then(data => formatDecks(data))
}

export function getDeck(id){
	return AsyncStorage.getItem(DECK_KEY)
			.then((data) => {
			 	const decks = JSON.parse(data)
			 	return decks[id]
			 })
}
         
export function saveDeckTitle(title){
	return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
		[title]: {
			title,
			questions: []
		}
	}))
}

export function addCardToDeck(title, card){
	return AsyncStorage.getItem(DECK_KEY)
			.then( (data) => {
				const decks = JSON.parse(data)
				decks[title].questions.push(card)
				AsyncStorage.setItem(DECK_KEY, JSON.stringify(decks))
			})
}