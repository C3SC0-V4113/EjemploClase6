import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Image,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import {SectionGrid} from 'react-native-super-grid';

// npx react-native run-android
// npx @react-native-community/cli doctor
//expo start --clear
//keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

export default function Example() {
  const [items, setItems] = React.useState([
    {
      name: 'TURQUOISE',
      code: '#1abc9c',
      url: 'https://reactjs.org/logo-og.png',
    },
    {name: 'EMERALD', code: '#2ecc71', url: 'https://reactjs.org/logo-og.png'},
    {
      name: 'PETER RIVER',
      code: '#3498db',
      url: 'https://reactjs.org/logo-og.png',
    },
    {name: 'AMETHYST', code: '#9b59b6', url: 'https://reactjs.org/logo-og.png'},
    {
      name: 'WET ASPHALT',
      code: '#34495e',
      url: 'https://reactjs.org/logo-og.png',
    },
    {
      name: 'GREEN SEA',
      code: '#16a085',
      url: 'https://reactjs.org/logo-og.png',
    },
    {
      name: 'NEPHRITIS',
      code: '#27ae60',
      url: 'https://reactjs.org/logo-og.png',
    },
    {
      name: 'BELIZE HOLE',
      code: '#2980b9',
      url: 'https://reactjs.org/logo-og.png',
    },
    {name: 'WISTERIA', code: '#8e44ad', url: 'https://reactjs.org/logo-og.png'},
    {
      name: 'MIDNIGHT BLUE',
      code: '#2c3e50',
      url: 'https://reactjs.org/logo-og.png',
    },
    {
      name: 'SUN FLOWER',
      code: '#f1c40f',
      url: 'https://reactjs.org/logo-og.png',
    },
    {name: 'CARROT', code: '#e67e22', url: 'https://reactjs.org/logo-og.png'},
    {name: 'ALIZARIN', code: '#e74c3c', url: 'https://reactjs.org/logo-og.png'},
    {name: 'CLOUDS', code: '#ecf0f1', url: 'https://reactjs.org/logo-og.png'},
    {name: 'CONCRETE', code: '#95a5a6', url: 'https://reactjs.org/logo-og.png'},
    {name: 'ORANGE', code: '#f39c12', url: 'https://reactjs.org/logo-og.png'},
    {name: 'PUMPKIN', code: '#d35400', url: 'https://reactjs.org/logo-og.png'},
    {
      name: 'POMEGRANATE',
      code: '#c0392b',
      url: 'https://reactjs.org/logo-og.png',
    },
    {name: 'SILVER', code: '#bdc3c7', url: 'https://reactjs.org/logo-og.png'},
    {name: 'ASBESTOS', code: '#7f8c8d', url: 'https://reactjs.org/logo-og.png'},
  ]);

  function createButtonAlert(msg, title) {
    Alert.alert(
      title,
      msg,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  return (
    <SectionGrid
      itemDimension={90}
      // staticDimension={300}
      // fixed
      // spacing={20}
      sections={[
        {
          title: 'Titulo 1',
          data: items.slice(0, 6),
        },
        {
          title: 'Titulo 2',
          data: items.slice(6, 12),
        },
        {
          title: 'Titulo 3',
          data: items.slice(12, 20),
        },
      ]}
      style={styles.gridView}
      renderItem={({item, section, index}) => (
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => createButtonAlert(item.name, section.title)}>
          <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
            <Image style={{width: 40, height: 40}} source={{uri: item.url}} />
          </View>
        </TouchableHighlight>
      )}
      renderSectionHeader={({section}) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
});
