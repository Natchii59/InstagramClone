import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { stories } from '../data';

export default function Stories() {
  return (
    <ScrollView
      style={styles.stories}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.story}>
        <View style={{ position: 'relative' }}>
          <Image
            source={require('../assets/profile-pic.png')}
            style={styles.myPfp}
          />
          <View style={styles.iconPlus}>
            <Icon
              name='plus'
              style={{
                fontSize: 18,
                color: 'white',
              }}
            />
          </View>
        </View>
        <Text style={styles.myUsername} numberOfLines={1}>
          Votre story
        </Text>
      </View>
      {stories.map((data, i) => (
        <View key={'storie-' + i} style={styles.story}>
          <LinearGradient
            colors={[
              '#C13584',
              '#E1306C',
              '#FD1D1D',
              '#F56040',
              '#F77737',
              '#FCAF45',
              '#FFDC80',
            ]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.backPfp}
          >
            <Image
              source={{
                uri: data.pfp,
              }}
              style={styles.pfp}
            />
          </LinearGradient>
          <Text style={styles.username} numberOfLines={1}>
            {data.username}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  stories: {
    paddingVertical: 5,
  },
  story: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  myPfp: {
    width: 65,
    height: 65,
    borderRadius: 65,
    backgroundColor: 'gray',
  },
  pfp: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: 'gray',
    borderWidth: 2,
    borderColor: 'white',
  },
  backPfp: {
    width: 65,
    height: 65,
    borderRadius: 65,
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '500',
    maxWidth: 65,
  },
  myUsername: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '500',
    maxWidth: 65,
    color: 'gray',
  },
  iconPlus: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    padding: 2,
    width: 25,
    height: 25,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#34a1eb',
    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 2,
  },
});
