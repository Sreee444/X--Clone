import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Post from '../components/Post';
import { posts } from './index.jsx';

const Profile = () => {
  
  const user = posts.find(post => post.id === 1);
  const userPosts = posts.filter(post => post.id === 1);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user.Profilepic }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.handle}>@{user.name.replace(/\s+/g, '').toLowerCase()}</Text>
      <Text style={styles.bio}>React Native Developer</Text>
      <Text style={styles.sectionTitle}>Tweets</Text>
      <FlatList
        style={styles.tweetsList}
        data={userPosts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Post data={item} />}
        ListEmptyComponent={<Text style={{ textAlign: 'center', color: '#888' }}>No tweets yet.</Text>}
        contentContainerStyle={{}}
      />
    </View>
  );
};
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingTop: 40,
    width: '100%',
  },
  tweetsList: {
    width: '100%',
    maxWidth: 400,
    marginTop: 12,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#222',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
  },
  handle: {
    fontSize: 16,
    color: '#657786',
    marginBottom: 8,
  },
  bio: {
    fontSize: 15,
    color: '#222',
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 24,
  },
});

export default Profile;
