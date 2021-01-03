import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ( { navigation }) => {
    const [result, setResult] = useState(null);  //is null at the begin and after we render the data we update the set result
    
    const id = navigation.getParam('id'); 

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    //Check to Make sure the result is null

    if (!result) {
        return null;
    }

    return (
        <View>
        <Text style={styles.title}>{result.name}</Text>
        <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri : item }} />
        }}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginBottom: 10,
        borderRadius: 5,
        alignSelf: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        alignSelf: 'center'
    }
});

export default ResultsShowScreen;