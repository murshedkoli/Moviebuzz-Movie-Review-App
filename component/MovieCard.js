import * as React from 'react';
import { StyleSheet } from 'react-native'
import { Card, Button, Title, Paragraph } from 'react-native-paper';

const MovieCard = ({ movie }) => {

    const { movieName, thumbnail, movieStars } = movie;
    return (
        <Card

            style={styles.container}>
            <Card.Cover source={{ uri: thumbnail }} />

            <Card.Content>
                <Title>{movieName}</Title>
                <Paragraph>{movieStars}</Paragraph>
            </Card.Content>

        </Card>
    )
};

export default MovieCard;

const styles = StyleSheet.create({
    container: {
        margin: 15

    }
})