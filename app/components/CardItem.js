import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {color} from '../config';

function CardItem({item}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: item?.images[0]}} />
      <Text style={styles.title}>
        {item?.brand} : {item?.title}
      </Text>
      <Text style={styles.price}>${item?.price}</Text>
      <Text style={styles.description}>{item?.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    elevation: 1,
    margin: 10,
    backgroundColor: color.medium,
    borderRadius: 15,
    padding: 20,
  },
  description: {
    marginTop: 15,
    fontSize: 18,
    color: color.black,
  },
  image: {
    overflow: 'hidden',
    alignSelf: 'center',
    aspectRatio: 1.8,
    height: 200,
    width: '100%',
  },
  title: {
    fontSize: 20,
    color: color.black,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: 'blue',
    fontWeight: '600',
  },
});
export default CardItem;
