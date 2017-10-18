import { AsyncStorage } from 'react-native'

export function getDecks(){
	return AsyncStorage.getAllKeys()
			.then( decks => {
				return decks.map(deck => {
					return {
						title: deck.titile, 
						size: deck.questions.length
					}
				})
			})
}

export function getDeck(id){
	return AsyncStorage.getItem(id)
}

export function saveDeckTitle(title){
	return AsyncStorage.setItem(title, JSON.stringify({
		title: title,
		questions: []
	}))
}

export function addCardToDeck(title, card){
	return AsyncStorage.getItem(title)
			.then(JSON.parse)
			.then( (deck) => {
				deck.questions.push(card)
				return AsyncStorage.setItem(title, JSON.stringify(deck))
			})
}