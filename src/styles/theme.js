import {rem} from './rem';

const theme = {
  app: {
    wrapper: {
      flex: 1,
      backgroundColor: 'rgb(0,18,26)',
      paddingHorizontal: rem(35),
    },
    container: {
      marginTop: rem(35),
    },
    navigationButton: {
      backgroundColor: 'transparent',
      borderColor: 'grey',
      borderWidth: rem(2),
      marginVertical: rem(6),
      borderRadius: 4
    },
    navigationButtonText: {
      color: 'white',    
      paddingVertical: rem(12.5),
      paddingHorizontal: rem(15),
      textAlign: "center",
      letterSpacing: rem(1.5),
      fontWeight: '600',
      fontSize: rem(15)
    },
    emailFeedbackLinkText: {
      color: 'white',
      fontWeight: '900',
      textAlign: 'center',
      fontSize: rem(18),
      marginVertical: rem(20),
      letterSpacing: rem(1),
      textDecorationLine: 'underline',
    },
  },
  account: {
    header: {
      color: 'rgb(69, 168, 201)',
      fontWeight: '900',
      textAlign: 'center',
      letterSpacing: rem(3),
      marginTop: rem(50), 
      marginBottom: rem(8),
      fontSize: rem(15)
    },
    text: {
      color: 'white',
      fontWeight: '800',
      textAlign: 'center',
      fontSize: rem(20),
      marginVertical: rem(8)
    },
    description: {
      marginTop: rem(5),
      fontSize: rem(18),
      fontWeight: '400',
      color: 'grey',
      textAlign: 'center'
    },
    buttonsContainer: {
      paddingVertical: rem(40),
      marginHorizontal: rem(10),
    },
  },
  feedback: {
    header: {
      color: 'grey',
      fontWeight: '900',
      textAlign: 'center',
      letterSpacing: rem(2.5),
      marginBottom: rem(10),
      fontSize: rem(15)
    },
    title: {
      fontSize: rem(25),
      fontWeight: '600',
      color: 'grey',
      textAlign: 'center'
    },
    description: {
      marginTop: rem(5),
      fontSize: rem(16),
      fontWeight: '400',
      color: 'grey',
      textAlign: 'center'
    },
  }
};

export default theme;