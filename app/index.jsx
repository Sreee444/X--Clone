import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Post from "../components/Post";

export const posts = [
  {
    id: 1,
    name: "ISRO",
    postImage:
      "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postCaption: "Mystery of the universe",
    Profilepic:
      "https://plus.unsplash.com/premium_photo-1674588218207-474f9ca6d3d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likeCount: "200M",
    repostCount: "51.9m",
    shareCount: "22.6m",
    viewCount: "256M",
  },
  {
    id: 2,
    name: "NASA",
    postImage:
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postCaption: "New Moon Mission",
    Profilepic:
      "https://plus.unsplash.com/premium_photo-1674590090701-31d791d1030d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likeCount: "605K",
    repostCount: "51.9K",
    shareCount: "22.6K",
    viewCount: "45.7M",
  },
  {
    id: 3,
    name: "SpaceX",
    postImage:
      "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postCaption: "New Journey to the Mystery",
    Profilepic:
      "https://images.unsplash.com/photo-1711919600878-b5d9e77d3357?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likeCount: "605K",
    repostCount: "51.9K",
    shareCount: "22.6K",
    viewCount: "45.7M",
  },
];

const index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.topBar}>
        <Image source={{ uri: posts[0].Profilepic }} style={styles.profilePic} />
        <FontAwesome6 name="x-twitter" size={24} color="black" />
        <TouchableOpacity
          onPress={() =>
            router.push({ pathname: "/profile", params: { user: JSON.stringify(posts[0]) } })
          }
        >
          <Ionicons name="settings-outline" size={28} color="#222" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsRow}>
        <View style={styles.tabActive}>
          <Text style={styles.tabActiveText}>For you</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Following</Text>
        </View>
      </View>

      {/* Feed */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Post data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 70 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f8fa",
    position: "relative",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e8ed",
  },
  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },

  tabsRow: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e8ed",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
  },
  tabText: {
    fontSize: 16,
    color: "#888",
    fontWeight: "500",
  },
  tabActive: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#1da1f2",
  },
  tabActiveText: {
    fontSize: 16,
    color: "#1da1f2",
    fontWeight: "bold",
  },
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e1e8ed",
    height: 56,
    zIndex: 10,
  },
  navIcon: {
    flex: 1,
    alignItems: "center",
  },
});

export default index;