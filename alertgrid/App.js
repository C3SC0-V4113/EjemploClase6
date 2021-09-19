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
      url: 'https://img2.freepng.es/20180606/jfb/kisspng-flower-bouquet-arum-lily-wedding-teal-turquoise-wedding-5b1807cf077cd4.8672040915283015190307.jpg',
    },
    {
      name: 'EMERALD',
      code: '#2ecc71',
      url: 'http://pngimg.com/uploads/emerald/emerald_PNG22290.png',
    },
    {
      name: 'PETER RIVER',
      code: '#3498db',
      url: 'https://cdn.shopify.com/s/files/1/2486/4354/products/Peter-Lik-River-Moods-Framed-Recess-Mount_1800x.jpg?v=1585086439',
    },
    {
      name: 'AMETHYST',
      code: '#9b59b6',
      url: 'https://img2.freepng.es/20180420/fpe/kisspng-crystal-amethyst-gemstone-mineral-quartz-5ada1bb91ed794.3594550915242433851263.jpg',
    },
    {
      name: 'WET ASPHALT',
      code: '#34495e',
      url: 'https://img.freepik.com/free-photo/dark-empty-stage-multicolored-rays-neon-searchlight-wet-asphalt-smoke-night-shooting-bokeh-color_183410-81.jpg?size=626&ext=jpg',
    },
    {
      name: 'GREEN SEA',
      code: '#16a085',
      url: 'https://thumbs-prod.si-cdn.com/YJHENyI3yDiZzO2hLc91MZ-NdhE=/420x240/https://public-media.si-cdn.com/filer/6d/40/6d40f539-9571-40f7-b007-ae75f88ae932/istock-544966354_1.jpg',
    },
    {
      name: 'NEPHRITIS',
      code: '#27ae60',
      url: 'https://static.wikia.nocookie.net/among-us-wiki/images/7/72/Green.png/revision/latest?cb=20210612161818',
    },
    {
      name: 'BELIZE HOLE',
      code: '#2980b9',
      url: 'https://www.gpsworld.com/wp-content/uploads/shutterstock_1470515801-GreatBlueHole-W.jpg',
    },
    {
      name: 'WISTERIA',
      code: '#8e44ad',
      url: 'https://www.dressandcharm.com/6419-large_default/Wisteria-convertible-Infinity-Dress.jpg',
    },
    {
      name: 'MIDNIGHT BLUE',
      code: '#2c3e50',
      url: 'https://secureservercdn.net/198.71.233.5/652.356.myftpupload.com/wp-content/uploads/2016/11/Ford-GT-Midnight-Blue-Color.jpg',
    },
    {
      name: 'SUN FLOWER',
      code: '#f1c40f',
      url: 'https://services.meteored.com/img/article/%C2%BFcomo-y-por-que-se-mueven-los-girasoles---1_1024.jpg',
    },
    {
      name: 'CARROT',
      code: '#e67e22',
      url: 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c205.png',
    },
    {
      name: 'ALIZARIN',
      code: '#e74c3c',
      url: 'https://i.pinimg.com/originals/27/c8/90/27c890dd73513429ec3efdecff2e8a02.png',
    },
    {
      name: 'CLOUDS',
      code: '#ecf0f1',
      url: 'https://okdiario.com/img/2021/02/29/nubes-655x368.jpg',
    },
    {
      name: 'CONCRETE',
      code: '#95a5a6',
      url: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1024,h_768/https://perfodiam.com/wp-content/uploads/2018/12/Fondo-cubo-concreto-1024x768.jpg',
    },
    {
      name: 'ORANGE',
      code: '#f39c12',
      url: 'https://www.ngenespanol.com/wp-content/uploads/2018/08/Naranja-La-historia-detr%C3%A1s-de-la-fruta-y-el-color-1280x720.jpg',
    },
    {
      name: 'PUMPKIN',
      code: '#d35400',
      url: 'https://s1.eestatic.com/2020/08/26/ciencia/nutricion/calabaza-nutricion-superalimentos_515960097_158509098_1706x960.jpg',
    },
    {
      name: 'POMEGRANATE',
      code: '#c0392b',
      url: 'https://p4.wallpaperbetter.com/wallpaper/555/690/458/red-forest-autumn-red-nature-wallpaper-preview.jpg',
    },
    {
      name: 'SILVER',
      code: '#bdc3c7',
      url: 'https://c.files.bbci.co.uk/17544/production/_116765559_gettyimages-468068368.jpg',
    },
    {
      name: 'ASBESTOS',
      code: '#7f8c8d',
      url: 'https://www.eluniverso.com/resizer/nHsDYd8zImdWkSaV8xgm6B75yRM=/893x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/ZFCTH35JQVF2NJNKGSI5PKOWK4.jpg',
    },
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
          title: 'Colores Verdosos',
          data: items.slice(0, 6),
        },
        {
          title: 'Colores azules y Primaverales ඞ',
          data: items.slice(6, 12),
        },
        {
          title: 'Rojizo y Otoñales',
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
