import React from 'react'
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'
import { Constants } from 'expo'

const purple = '#292477'
const white = '#fff'
function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


const Tabs = TabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions:{
      tabBarLabel: 'DECKS'
    }
  },

  AddDeck:{
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECk'
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
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>    
        <UdaciStatusBar backgroundColor={purple} barStyle="light-content" /> 
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
