import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ICON_SIZE = 22;

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/Instagram-Logo.png')}
        style={styles.logo}
      />

      <View style={styles.icons}>
        <Icon name='plus-square' size={ICON_SIZE} style={styles.icon} />
        <Icon name='heart' size={ICON_SIZE} style={styles.icon} />
        <Icon name='send' size={ICON_SIZE} style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  logo: {
    width: 120,
    height: 40,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingLeft: 10,
  },
});
