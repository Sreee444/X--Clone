import { Entypo, FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Slot, useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function _layout() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <Slot />
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => router.push('/')}> 
          <Entypo name="home" size={24} color="black" />
        </TouchableOpacity>
        <FontAwesome name="search" size={24} color="black" />
        <MaterialCommunityIcons name="robot" size={24} color="black" />
        <Ionicons name="people" size={24} color="black" />
        <MaterialCommunityIcons name="bell" size={24} color="black" />
        <Entypo name="mail" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e1e8ed',
    height: 56,
    zIndex: 10,
  },
  navIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLabel: {
    fontSize: 12,
    color: '#1da1f2',
    marginTop: 2,
  },
});