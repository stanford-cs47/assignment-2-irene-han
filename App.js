import React from 'react';
import { StyleSheet, Text, View, Image, Platform, SafeAreaView} from 'react-native';
import { Images, Profiles } from './App/Themes';
import Header from './App/Components/Header';
import Footer from './App/Components/Footer';

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
        <Header/>
        <View style={styles.body}>
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
        <Footer/>
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
  body: {
    height: "80%",
    justifyContent: 'center',
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
  titleView: {
    flexDirection: 'row',
  },
});
