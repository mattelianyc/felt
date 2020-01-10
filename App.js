/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import vars, {rem} from './styles/vars.style';

const App: () => React$Node = () => {
  return (
    <View style={{backgroundColor: 'rgb(0,18,26)', height: '100%', width: '100%'}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              
              <Text style={{color: 'rgb(69,168,201)', fontWeight: '600', textAlign: 'center', letterSpacing: rem(3), marginBottom: rem(8), marginTop: rem(50)}}>SUCCESS!</Text>
              
              {/* CREDITS */}
              <Text style={{color: 'white', fontWeight: '800', textAlign: 'center', fontSize: rem(20), marginVertical: rem(8)}}>{'XX'} credits are now active in your account!</Text>
              
              <Text style={styles.sectionDescription}>
                Start using them on your next card project, or learn more about how to create lists and send invitations and gifts!
              </Text>
            </View>
            
            {/* BUTTONS */}
            <View style={styles.sectionContainer}>
              <TouchableOpacity 
                onPress={() => Alert.alert('Cannot press this one')}
                style={styles.button}>
                  <Text style={styles.buttonText}>Start A Card</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => Alert.alert('Cannot press this one')}
                style={styles.button}>
                  <Text style={styles.buttonText}>Return to Home</Text>
              </TouchableOpacity>
            </View>

            {/* FEATURETTE DIVIDER  */}
            <View style={styles.sectionContainer}>
              <View style={{
                // width:'90%',
                height: 2,
                backgroundColor: 'black',
                // marginHorizontal: '5%',
                // marginVertical: rem(40) 
                }}></View>
            </View>

            {/* DISCLAIMER  */}
            <View style={styles.sectionContainer}>
              <Text style={{color: 'grey', fontWeight: '600', textAlign: 'center', letterSpacing: rem(3), marginBottom: rem(8)}}>QUESTIONS, COMMENTS?</Text>
              <Text style={styles.sectionDescription}>
                We love feedback from our customers.  Let us know how we can make your experience with Felt even better!
              </Text>
              <TouchableOpacity>
                <Text style={styles.emailLink}>
                  hi@feltapp.com
                </Text>
              </TouchableOpacity>
            </View>

            {/* <LearnMoreLinks /> */}

          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

// export const navbarHeight = rem(65);
// export const borderThickness = rem(0.5);
// export const buttonBorderThickness = rem(2);
// export const defaultFontSize = rem(16);
// export const buttonBorderRadius = 4;


const styles = StyleSheet.create({
  navbar: {
    height: rem(65),
    borderBottomWidth: rem(0.5)
  },
  button: {
    borderColor: 'rgb(222,180,50)',
    borderWidth: rem(2),
    marginVertical: rem(4)
  },
  buttonText: {
    color: 'rgb(222,180,50)',    
    paddingVertical: rem(10),
    paddingHorizontal: rem(15),
    textAlign: "center",
  },
  body: {
    backgroundColor: 'rgb(0,18,26)',
  },
  sectionContainer: {
    marginTop: 36,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: rem(24),
    fontWeight: '600',
    color: 'grey',
    textAlign: 'center'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'grey',
    textAlign: 'center'
  },
  emailLink: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: rem(20),
    marginTop: rem(10),
    textDecorationLine: 'underline',
    // textDecorationStyle: 'solid'
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'grey',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
