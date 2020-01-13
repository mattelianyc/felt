import React from 'react';

import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Components
import EmailFeedbackLink from './EmailFeedbackLink.component'
// Styling
import theme from '../styles/theme'

function Feedback() {

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
  ...theme.feedback
})

export default Feedback;