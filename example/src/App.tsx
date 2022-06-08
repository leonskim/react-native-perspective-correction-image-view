import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { PerspectiveCorrectionImage } from 'react-native-perspective-correction-image-view';

export default function App() {
  const ref = React.createRef<View>();
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, marginBottom: 24 }}>
        Corner Points: [114, 80, 324, 46, 77, 203, 306, 252]
      </Text>
      <Text style={styles.text}>Origianl Image</Text>
      <Image style={{ marginBottom: 62 }} source={require('./sample.png')} />
      <Text style={styles.text}>Result Image</Text>
      <PerspectiveCorrectionImage
        source={require('./sample.png')}
        sourceCorners={[114, 80, 324, 46, 77, 203, 306, 252]}
        sourceWidth={400}
        sourceHeight={300}
        width={200}
        height={150}
        ref={ref}
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
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
