import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


////uri is where the react will take the probs

const ResultsDetail = ({ result }) => {
    return (
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: result.image_url }} />  
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default ResultsDetail;