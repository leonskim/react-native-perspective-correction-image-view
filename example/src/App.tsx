import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { PerspectiveCorrectionImage } from 'react-native-perspective-correction-image-view';

export default function App() {
 return (
   <View style={styles.container}>
     <Text>Origianl Image</Text>
     <Image source={require('./sample.png')} />
     <Text style={{ marginTop: 60 }}>Result Image</Text>
     <PerspectiveCorrectionImage
       source={require('./sample.png')}
       srcImageWidth={400}
       srcImageHeight={300}
       targetWidth={200}
       targetHeight={150}
       corners={[114, 80, 324, 46, 77, 203, 306, 252]}
     />
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
