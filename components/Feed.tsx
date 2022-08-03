import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { feed } from '../data';
import IconFeather from 'react-native-vector-icons/Feather';

export default function Feed() {
  return (
    <View>
      {feed.map((f, i) => (
        <View key={'feed-' + i} style={styles.post}>
          <View>
            <View style={styles.profil}>
              <View style={styles.profilInfo}>
                <Image source={{ uri: f.pfp }} style={styles.pfp} />
                <Text
                  style={{ paddingLeft: 6, fontSize: 14, fontWeight: '700' }}
                >
                  {f.username}
                </Text>
              </View>

              <IconFeather name='more-horizontal' />
            </View>

            <Image source={{ uri: f.image }} style={styles.image} />

            <View style={styles.bottom}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <IconFeather name='heart' style={styles.icon} />
                  <IconFeather name='message-circle' style={styles.icon} />
                  <IconFeather name='send' style={styles.icon} />
                </View>

                <IconFeather name='bookmark' style={styles.icon} />
              </View>

              <Text style={{ fontWeight: '700', paddingTop: 4 }}>
                {f.likes} J'aime
              </Text>

              <Text style={{ paddingTop: 4 }}>
                <Text style={{ fontWeight: '700' }}>{f.username}</Text>{' '}
                {f.comment}
              </Text>

              <Text style={{ paddingTop: 4, color: 'gray' }}>
                Voir les {f.comments} commentaires
              </Text>

              <View
                style={{
                  paddingTop: 4,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={require('../assets/profile-pic.png')}
                  style={styles.pfpLittle}
                />

                <Text style={{ color: 'gray', marginLeft: 6 }}>
                  Ajoutez un commentaire...
                </Text>
              </View>

              <Text style={{ paddingTop: 4, color: 'gray' }}>
                Il y a {f.date}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    borderTopColor: '#d4d4d4',
    borderTopWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
  },
  profil: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  profilInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pfp: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width,
    maxWidth: 500,
    maxHeight: 500,
  },
  bottom: {
    padding: 10,
  },
  icon: {
    paddingHorizontal: 3,
    fontSize: 24,
  },
  pfpLittle: {
    width: 25,
    height: 25,
    borderRadius: 25,
  },
});
