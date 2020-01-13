import React from 'react';

import { 
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';

// Styling
import theme from '../styles/theme'

function EmailFeedbackLink() {

  const openNativeMailer = () => Linking.openURL('mailto:hi@feltapp.com')

  return (
    <TouchableOpacity onPress={openNativeMailer}>
      <Text style={styles.emailFeedbackLinkText}> hi@feltapp.com </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  ...theme.app
})

export default EmailFeedbackLink;