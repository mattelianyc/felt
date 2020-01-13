import React, {useContext} from 'react';
import { 
  StyleSheet,
  Text,
  View
} from 'react-native';

// Components
import NavigationButton from './NavigationButton.component'
import CreditCount from './CreditCount.component'
// Styling
import theme from '../styles/theme'

function Account() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}> SUCCESS! </Text>
        <Text style={styles.text}><CreditCount /> credits are now active in your account!</Text>
        <Text style={styles.description}>
          Start using them on your next card project, or learn more about how to create lists and send invitations and gifts!
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <NavigationButton title={'START A CARD'} route={'start_a_card'} />
        <NavigationButton title={'RETURN TO HOME'} route={'return_to_home'} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  ...theme.app,
  ...theme.account
})

export default Account;