import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

interface Prop {
  Name: string;
  iconSource?: any;
  focused?: any,
  iconSourceFocused?: any;
}

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 76,
    height: 59,
    marginTop: 14,
    justifyContent: 'center',
    borderRadius: 18,
  },
  containerB: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 76,
    height: 59,
    marginTop: 14,
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: '#1372A5'
  },
  text: {
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 12,
    color: '#777',
    textTransform: 'uppercase',
  },
  textActive: {
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 12,
    color: '#FFF',
    textTransform: 'uppercase',
  }
});

const Buttontab: React.FC<Prop> = ({ Name, iconSource, iconSourceFocused, focused }) => {
  return (
    <View style={Styles.container}>
      <View style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center', marginBottom: 7 }}>
        {focused ?
          iconSourceFocused :
          iconSource
        }
      </View>
      <Text style={focused ? Styles.textActive : Styles.text}>
        {Name}
      </Text>
    </View>
  )
}

export default Buttontab;