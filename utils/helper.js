import * as api from './api'
import {Permissions, Notifications } from 'expo'
import { AsyncStorage } from 'react-native'

const NOTIFICATION_KEY = 'flashcards:notification'
function setDummyData(){

	let data = {
	  	React: {
	    	title: 'React',
	    	questions: [
		      	{
			        question: 'What is React?',
			        answer: 'A library for managing user interfaces'
		      	},
			    {
			        question: 'Where do you make Ajax requests in React?',
			        answer: 'The componentDidMount lifecycle event'
			    }
	    	]
	  	},
	  	JavaScript: {
	    	title: 'JavaScript',
	    	questions: [
	      		{
	        		question: 'What is a closure?',
	        		answer: 'The combination of a function and the lexical environment within which that function was declared.'
	      		}
	    	]
	  	}
	}
	return api.addDecks(data)
			.then(() => toDeckArray(data))    
}

function toDeckArray(decks){
	return Object.keys(decks).map(title => {
		return decks[title]
	})
}

export function formatDecks(decks){
	return decks === null
		? setDummyData()
		: toDeckArray(JSON.parse(decks))
				
}
export function clearLocalNotification () {
  	return AsyncStorage.removeItem(NOTIFICATION_KEY)
    		.then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification(){
	return {
		title: 'Study for fun!',
		body: "👋 don't forget to learn something for today!",
		ios:{
			sound: true
		},
		android:{
			sound: true,
			priority: 'high',
			sticky: false,
			vibrate: true
		}
	}
}

export function setLocalNotification () {
  	AsyncStorage.getItem(NOTIFICATION_KEY)
    	.then(JSON.parse)
    	.then((data) => {
      		if (data === null) {
        		Permissions.askAsync(Permissions.NOTIFICATIONS)
          		.then(({ status }) => {
            		if (status === 'granted') {
	              		Notifications.cancelAllScheduledNotificationsAsync()

	              		let tomorrow = new Date()
	              		tomorrow.setDate(tomorrow.getDate() + 1)
	              		tomorrow.setHours(20)
	              		tomorrow.setMintutes(0)

	              		Notifications.scheduleLocalNotificationAsync(
	                		createNotification(),
	                		{
	                  			time: tomorrow,
	                  			repeat: 'day',
	                		}
	              		)

	              		AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
           			}
          		})
      		}
    	})
}