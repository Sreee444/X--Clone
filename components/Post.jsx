import { EvilIcons, Feather, Ionicons, FontAwesome } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

const Post = ({ data }) => {
  return (
    <View style={styles.card}>
      
      <View style={styles.header}>
        <Image source={{ uri: data.Profilepic }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.username}>{data.name}</Text>
          <Text style={styles.caption}>{data.postCaption}</Text>
        </View>
        
        <Feather name="more-horizontal" size={20} color="#888" />
      </View>
      
      <Image source={{ uri: data.postImage }} style={styles.postImage} />
      
      <View style={styles.actionsRow}>
        <View style={styles.action}><Feather name="message-circle" size={20} color="#888" /><Text style={styles.actionText}>{data.shareCount}</Text></View>
        <View style={styles.action}><Feather name="repeat" size={20} color="#888" /><Text style={styles.actionText}>{data.repostCount}</Text></View>
        <View style={styles.action}><Feather name="heart" size={20} color="#888" /><Text style={styles.actionText}>{data.likeCount}</Text></View>
        <View style={styles.action}><Feather name="bar-chart-2" size={20} color="#888" /><Text style={styles.actionText}>{data.viewCount}</Text></View>
        <View style={styles.action}><FontAwesome name="bookmark-o" size={20} color="#888" /></View>
        <View style={styles.action}><Feather name="share-2" size={20} color="#888" /></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 0,
    borderRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e8ed',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    gap: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginTop: 2,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#14171a',
  },
  handle: {
    fontSize: 14,
    color: '#657786',
    marginLeft: 4,
  },
  postImage: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    marginBottom: 8,
    backgroundColor: '#e1e8ed',
  },
  caption: {
    fontSize: 15,
    color: '#14171a',
    marginTop: 2,
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingRight: 8,
    marginBottom: 2,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  actionText: {
    fontSize: 13,
    color: '#657786',
    marginLeft: 2,
  },
});

export default Post;