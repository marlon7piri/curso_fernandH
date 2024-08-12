import React from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';
import { globalStyles } from '../../theme/theme';
import { useUser } from '../../hooks/useUser';
import { useProfileStore } from '../../store/profile-store';




const ProfileScreen = () => {
  const { users, nextPage, prevPage } = useUser()
  const email = useProfileStore(state => state.email)
  const name = useProfileStore(state => state.name)


  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.primaryText, { textAlign: 'center' }]}>
        Usuarios
      </Text>
      <Text style={{ color: "#000", fontWeight: 'bold' }}>
        {email} -{name}
      </Text>

      <FlatList
        renderItem={({ item }) => {
          return (
            <View style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <Image
                source={{ uri: item.avatar }}
                alt="Avatar User"
                style={globalStyles.avatar}
              />
              <Text>
                {item.first_name} {item.last_name}
              </Text>
            </View>
          );
        }}
        data={users}
      />
      <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        <Button title="Prev" onPress={prevPage} />
        <Button title="Next" onPress={nextPage} />
      </View>
    </View>
  );
};

export default ProfileScreen;
