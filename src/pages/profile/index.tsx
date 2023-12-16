import React from "react";
import { View, Text } from 'react-native';
import { globalStyles } from "../../styles/globalStyles";

const Profile: React.FC = () => {
  return (
    <View style={globalStyles.background}>
      <Text>
        Profile
      </Text>
    </View>
  )
}

export default Profile;