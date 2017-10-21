import React from 'react'
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import { Constants } from 'expo'
import { setLocalNotification} from './utils/helper'
import { FontAwesome } from '@expo/vector-icons'

const purple = '#292477'
const white = '#fff'
function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor: 'black', height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


const Tabs = TabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions:{
      tabBarLabel: 'DECKS',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='list' size={30} color={tintColor} />
    }     
  },

  AddDeck:{
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECk',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions:{
    activeTintColor: Platform.OS ==='ios'? purple : white,
    labelStyle:{
      fontSize: 12,
    },
    style:{
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigation = StackNavigator({
  Home: {
    screen: Tabs
  },

  Deck:{
    screen: Deck
  },

  AddCard: {
    screen: AddCard
  },
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <View style={styles.container}>    
        <UdaciStatusBar barStyle="light-content" /> 
        <MainNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

