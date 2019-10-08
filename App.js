import React from 'react';
import { StyleSheet, Text, View, Image, Platform, SafeAreaView} from 'react-native';
import { Images, Profiles } from './App/Themes';

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
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

        <View style={styles.profile}>
          <View style={styles.profileCard}>
            <View style={styles.imgContainer}>
              <Image style={styles.picture, styles.profileImg}
              source={this.state.profileImage}/>
            </View>
            <View style={styles.textContainer}>
              <View style={styles.titleView}>
                <Text style={{fontWeight: 'bold', fontSize: 24}}>{this.state.name},</Text>
                <Text style={{fontSize: 24}}>{this.state.age}</Text>
              </View>
              <Text style={{fontSize: 16, color: grey}}>{this.state.occupation}</Text>
            </View>
          </View>
        </View>

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
      </SafeAreaView>
    );
  }
}

const light_grey = '#e9e9e9'
const grey = '#c5c5c5'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: light_grey,
  },
  header: {
    height: Platform.OS === 'ios' ? 44 : 56,
    borderBottomWidth: 1,
    borderColor: grey,
    paddingBottom: '1%',
  },
  profile: {
    height: "80%",
    justifyContent: 'center',
  },
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
  profileCard: {
    margin: '5%',
    borderWidth: 1,
    borderColor: grey,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  profileImg: {
    width: '100%',
    height: '100%',
  },
  imgContainer: {
    overflow: 'hidden',
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
  },
  textContainer: {
    padding: 10,
    paddingBottom: -10
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
  logo: {
    flex: 1,
    resizeMode: 'contain',
    height: Platform.OS === 'ios' ? 34 : 46,
  },
  navIcons: {
    flex: 1,
    height: Platform.OS === 'ios' ? 35 : 35,
    width: Platform.OS === 'ios' ? 35 : 35,
    resizeMode: 'contain',
    tintColor: grey,
  },
  titleView: {
    flexDirection: 'row',
  },
});
