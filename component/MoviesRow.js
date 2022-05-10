import { StyleSheet, Button, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { Card, Title, Paragraph, } from 'react-native-paper';


const MoviesRow = ({ movies, navigation }) => {
    return (
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
    )
}

export default MoviesRow

const styles = StyleSheet.create({})