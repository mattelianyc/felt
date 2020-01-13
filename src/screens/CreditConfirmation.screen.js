import React from 'react';
import { 
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

// Components
import Account from '../components/Account.component'
import FeaturetteDivider from '../components/FeaturetteDivider.component'
import Feedback from '../components/Feedback.component'
// Styling
import theme from '../styles/theme'

function CreditConfirmation() {

  return (
    <View style={styles.wrapper}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Account />
        <FeaturetteDivider />
        <Feedback />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  ...theme.app
})

export default CreditConfirmation;