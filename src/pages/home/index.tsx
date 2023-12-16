import React from "react";
import { View, Text } from 'react-native';
import { globalStyles } from "../../styles/globalStyles";

const Home: React.FC = () => {
  return (
    <View style={globalStyles.background}>
      <Text>
        OLá
      </Text>
    </View>
  )
}

export default Home;