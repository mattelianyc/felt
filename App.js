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
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
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
              <Text style={styles.sectionTitle}>Disclaimer</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>

            {/* <LearnMoreLinks /> */}

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
    borderColor: 'yellow',
    borderWidth: rem(2),
    marginVertical: rem(4)
  },
  buttonText: {
    color: 'yellow',    
    paddingVertical: rem(10),
    paddingHorizontal: rem(15),
    textAlign: "center",
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 36,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: rem(24),
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
