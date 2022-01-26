import AppLoading from 'expo-app-loading';
import {StyleSheet, Text, View, Image, ImageBackground, Button, Dimensions, Platform, PixelRatio, StatusBar } from 'react-native';
//import {React } from 'react'
//import { Button } from 'react-native-elements';
import { useFonts } from 'expo-font';
import { Themes, Icons, Profiles } from './assets/Themes';
import themes from './assets/Themes/themes';
//import { ImageBackground } from 'react-native-web';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 400;

export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/
  
  return (
    <View style={styles.container}>
      
      <View style={styles.navigation}>
        <Image style={styles.topIcon} source={Icons.menu.light} />
        <Text
          style={styles.logo}>
          ensom
        </Text>
        <Image style={styles.topIcon} source={Icons.sun} />
      </View>
      <View style={styles.body}>
        <ImageBackground style={styles.profilePic} imageStyle={styles.profilePicPhoto} source={Profiles.mtl.image}>
          <Text style={styles.userName}>{Profiles.mtl.name}</Text>
          <Text style={styles.userCaption}>{Profiles.mtl.caption}</Text>
        </ImageBackground>
        <View style={styles.audioFeature}>
          <Text style={styles.audioText}>My hottest take</Text>
          <Image  style={styles.audioPlayer} source={Icons.player.light}/>
          <Image  style={styles.audioWave} source={Icons.audioWave.light}/>
        </View>
      </View>

      <View style={styles.bottomButtonBar}>
        <View style={styles.bottomButtons}>
          <Image style={styles.bottomButtonIcon} source={Icons.discover.light} />
            <Text style={styles.bottomButtonText}>Discover</Text>
        </View>
        <View style={styles.bottomButtons}>
          <Image style={styles.bottomButtonIcon} source={Icons.heart.light} />
            <Text style={styles.bottomButtonText}>Matches</Text>
        </View>
        <View style={styles.bottomButtons}>
          <Image style={styles.bottomButtonIcon} source={Icons.messages.light} />
            <Text style={styles.bottomButtonText}>DMs</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navigation:{
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  },
  logo:{
    fontFamily: 'Sydney-Bold', 
    fontSize: normalize(32) 
  },
  topIcon: {
    height: '80%',
    width: '10%',
    resizeMode: 'contain',
    marginLeft: 15,
    marginRight: 15,
  },
  body:{
    flex: 13,
    width: '100%',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  profilePic:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    aspectRatio: 1/1.1,
    borderRadius: 5,
    shadowColor: themes.light.shadows.shadowColor,
    shadowOffset: themes.light.shadows.shadowOffset,
    shadowOpacity: themes.light.shadows.shadowOpacity,
    shadowRadius: themes.light.shadows.shadowRadius,
    backgroundColor: '#ff0',
  },
  profilePicPhoto:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    height: '100%',
    width:'100%',
    borderRadius:5,
    backgroundColor: '#ff0',
  },
  userName:{
    flex:0,
    fontFamily: 'Sydney',
    color: '#fff',
    lineHeight: normalize(32),
    fontSize: normalize(32),
    margin: 10,
  },
  userCaption:{
    flex:0,
    fontFamily: 'Sydney',
    color: '#fff',
    lineHeight: normalize(18),
    fontSize: normalize(18),
    margin: 10,
  },
  audioFeature:{
    flex:0,
    width: '90%',
    aspectRatio: 1/.35,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap:'wrap',
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 40,
    shadowColor: themes.light.shadows.shadowColor,
    shadowOffset: themes.light.shadows.shadowOffset,
    shadowOpacity: themes.light.shadows.shadowOpacity,
    shadowRadius: themes.light.shadows.shadowRadius,
    backgroundColor: themes.light.bgSecondary,
  },
  audioText:{
    flex:0,
    width: '100%',
    alignSelf: 'flex-start',
    fontFamily: 'Sydney',
    color: '#000',
    lineHeight: normalize(26),
    fontSize: normalize(25),
    marginBottom: 10,
  },
  audioPlayer:{
    height: '50%',
    width:'20%',
    resizeMode: 'contain',
  },
  audioWave:{
    height: '50%',
    width:'80%',
    resizeMode: 'contain',
  },
  bottomButtonBar:{
    flex: 1.75,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    backgroundColor: Themes.light.navigation,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButtons:{
    flex: 0,
    height: '100%',
    width:'28%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',

  },
  bottomButtonIcon: {
    height: '55%',
    width: '55%',
    resizeMode: 'contain',
    marginTop: 7,
  },
  bottomButtonText:{
    flex:0,
    fontFamily: 'Sydney',
    color: '#fff',
    lineHeight: normalize(15),
    fontSize: normalize(13),
  },
});
