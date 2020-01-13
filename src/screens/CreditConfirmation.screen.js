import React from 'react';
import { 
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

// Components
import Account from '../components/Account.component'
import FeaturetteDivider from '../components/FeaturetteDivider.component'
import Disclaimer from '../components/Disclaimer.component'
// Styling
import theme from '../styles/theme'

function CreditConfirmation() {

  return (
    <View style={styles.wrapper}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Account />
        <FeaturetteDivider />
        <Disclaimer />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  ...theme.app
})

export default CreditConfirmation;