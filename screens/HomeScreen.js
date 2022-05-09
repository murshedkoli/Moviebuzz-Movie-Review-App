import { useState, useEffect } from 'react'
import { StyleSheet, Button, View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import { Card, Title, Paragraph } from 'react-native-paper';


const HomeScreen = ({ navigation }) => {


    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://kolimoviebuzz.herokuapp.com/movies')
            .then(result => result.json())
            .then(data => {
                // if (category.length === 0) {
                setMovies(data.reverse());
                // } else {

                //     const movieshere = data.filter(item => item.category === category);
                //     setMovies(movieshere.reverse());
                // }

            })
    }, [])



    return (
        <ScrollView>
            <View>
                {movies.length ?
                    movies.map((movie) => {
                        const { movieName, thumbnail, movieStars } = movie;

                        return (
                            <Card
                                key={movie._id}
                                onPress={() => {
                                    navigation.navigate('MoviePage', {
                                        itemId: 86,
                                        otherParam: movie,
                                    });
                                }}
                                style={{ margin: 15 }}>
                                <Card.Cover source={{ uri: thumbnail }} />

                                <Card.Content>
                                    <Title>{movieName}</Title>
                                    <Paragraph>{movieStars}</Paragraph>
                                </Card.Content>


                            </Card>


                        )
                    })
                    : <ActivityIndicator size="large" color="#00ff00" />

                }
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})