import React from 'react';
import { StyleSheet, View, Image, Platform} from 'react-native';
import { Images } from './../Themes';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
      return (
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Image style={styles.navIcons}
            source={Images.settings}/>
            <Image style={[styles.picture, styles.logo]}
            source={Images.logo}/>
            <Image style={styles.navIcons}
            source={Images.chat}/>
          </View>
        </View>
      );
    }
  }

  const grey = '#c5c5c5'

  const styles = StyleSheet.create({
    header: {
      height: Platform.OS === 'ios' ? 44 : 56,
      borderBottomWidth: 1,
      borderColor: grey,
      paddingBottom: '1%',
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
    logo: {
      flex: 1,
      resizeMode: 'contain',
      height: Platform.OS === 'ios' ? 34 : 46,
    },
  });
