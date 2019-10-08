import React from 'react';
import { StyleSheet, View, Image, Platform} from 'react-native';
import { Images } from './../Themes';

export default class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
      return (
        <View style={styles.footer}>
          <View style={styles.iconContainer}>
            <View style={[styles.buttonSmall, styles.buttonContainer]}>
              <Image style={styles.button}
              source={Images.rewind}/>
            </View>
            <View style={[styles.buttonLarge, styles.buttonContainer]}>
              <Image style={styles.button}
              source={Images.nope}/>
            </View>
            <View style={[styles.buttonSmall, styles.buttonContainer]}>
              <Image style={styles.button}
              source={Images.boost}/>
            </View>
            <View style={[styles.buttonLarge, styles.buttonContainer]}>
              <Image style={styles.button}
              source={Images.like}/>
            </View>
            <View style={[styles.buttonSmall, styles.buttonContainer]}>
              <Image style={styles.button}
              source={Images.superLike}/>
            </View>
          </View>
        </View>
      );
    }
  }

  const grey = '#c5c5c5'

  const styles = StyleSheet.create({
    footer: {
      height: "20%",
      paddingLeft: '5%',
      paddingRight: '5%',
      justifyContent: 'center',
      paddingBottom: '5%'
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    navIcons: {
      flex: 1,
      height: Platform.OS === 'ios' ? 35 : 45,
      width: Platform.OS === 'ios' ? 35 : 45,
      resizeMode: 'contain',
      tintColor: grey,
    },
    buttonContainer: {
      padding: 10,
      backgroundColor: 'white',
      alignItems:'center',
      justifyContent: 'center',
    },
    buttonLarge: {
      height: 60,
      width: 60,
      borderRadius: 60/2,
    },
    buttonSmall: {
      height: 50,
      width: 50,
      borderRadius: 50/2,
    },
    button: {
      height: 40,
      width: 40,
      resizeMode: 'contain'
    },
  });
