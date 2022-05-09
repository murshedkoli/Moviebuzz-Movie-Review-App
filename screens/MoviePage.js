import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MoviePage = ({ route, navigation }) => {
    const { itemId, otherParam } = route.params;
    const { movieName, thumbnail } = otherParam;
    return (
        <View>
            <Text>{movieName}</Text>
        </View>
    )
}

export default MoviePage;

const styles = StyleSheet.create({})