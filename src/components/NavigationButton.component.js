import React, { useState } from 'react';

import { 
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

import theme from '../styles/theme'

function NavigationButton(props) {

  const navigate = route => {
    // navigate to `{route}`
  }

  return (
    <TouchableHighlight 
      onPress={() => navigate(props.route)}
      underlayColor={'rgb(222,180,50)'}
      style={styles.navigationButton}>
      <Text style={styles.navigationButtonText}>{props.title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  ...theme.app
})

export default NavigationButton;