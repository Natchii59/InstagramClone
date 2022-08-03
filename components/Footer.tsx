import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconFeather from 'react-native-vector-icons/Feather';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Footer() {
  return (
    <SafeAreaView style={styles.footer}>
      <View style={styles.iconsBox}>
        <IconFoundation name='home' style={styles.icon} />
        <IconFeather name='search' style={styles.icon} />
        <IconOcticons name='video' style={styles.icon} />
        <IconMaterial name='shopping-outline' style={styles.icon} />
        <Image
          source={require('../assets/profile-pic.png')}
          style={styles.pfp}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'white',
    height: 110,
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-start',
    borderTopColor: '#d4d4d4',
    borderTopWidth: 1,
  },
  iconsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 8,
  },
  icon: {
    fontSize: 26,
  },
  pfp: {
    width: 26,
    height: 26,
    borderRadius: 26,
  },
});
