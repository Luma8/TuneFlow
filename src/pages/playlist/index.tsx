import React from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from "../../styles/globalStyles";
import styles from "./styles";

const PlayList: React.FC = () => {
  return (
    <View style={globalStyles.background}>
      <Text>
        Playlist
      </Text>
      <FlatList
        data={[
          { key: '1', number: '01', name: 'RandomSong', autor: 'Luma8', timer: '3.54' },
          { key: '2', number: '02', name: 'RandomSong', autor: 'Luma8', timer: '3.54' },
          { key: '3', number: '03', name: 'RandomSong', autor: 'Luma8', timer: '3.54' },
        ]}
        renderItem={({ item }) => {
          return (
            <View style={styles.musicContainer} key={item.key}>
              <Text style={{ color: '#FFF' }}>{item.number}</Text>
              <View>
                <Text style={{ color: '#FFF' }}>{item.name}</Text>
                <Text style={{ color: '#FFF' }}>{item.autor}</Text>
              </View>
              <Text style={{ color: '#FFF' }}>{item.timer}</Text>
              <TouchableOpacity>
                <Text style={{ color: '#888' }}>...</Text>
              </TouchableOpacity>
            </View>
          )
        }
        }
      />
    </View>
  )
}

export default PlayList;