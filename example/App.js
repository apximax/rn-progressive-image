import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProgressiveImage from "rn-progressive-image";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <ProgressiveImage
        thumbnailSource={{ uri: 'https://i.ibb.co/Y80YDf2/Sample-JPGImage-10mbmb-min.jpg?bust' + Math.random()}}
        imageSource={{ uri:'https://docs.google.com/uc?id=1ZLBzOnySD8CGzxo4-4f9pllz2FnkGm5W'}}
        thumbnailFadeDuration={1000}
        imageFadeDuration={1000}
        style={{  width:400, height:400, alignSelf:"center" }}
    />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/**
 * Large Image link: https://docs.google.com/uc?id=1ZLBzOnySD8CGzxo4-4f9pllz2FnkGm5W
 * Thumbnail Link: https://i.ibb.co/Y80YDf2/Sample-JPGImage-10mbmb-min.jpg
 */


