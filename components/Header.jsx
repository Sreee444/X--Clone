import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
  const router = useRouter();
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Twitter</Text>
      <TouchableOpacity onPress={() => router.push('/profile')}>
        <Ionicons name="settings-outline" size={28} color="#222" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e8ed',
    backgroundColor: '#fff',
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1da1f2',
  },
});

export default Header;