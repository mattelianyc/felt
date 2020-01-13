import React from 'react';

import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking
} from 'react-native';

// Components
import EmailFeedbackLink from './EmailFeedbackLink.component'
// Styling
import theme from '../styles/theme'

function Disclaimer() {

  return (
    <View style={styles.container}>
      <Text style={styles.header}> QUESTIONS, COMMENTS? </Text>
      <Text style={styles.description}>
        We love feedback from our customers.  Let us know how we can make your experience with Felt even better!
      </Text>
      <EmailFeedbackLink />
    </View>
  )
}

const styles = StyleSheet.create({
  ...theme.app,
  ...theme.disclaimer
})

export default Disclaimer;