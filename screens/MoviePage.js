import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import YoutubePlayer from 'react-native-youtube-iframe';



const MoviePage = ({ route, navigation }) => {
    const { itemId, otherParam } = route.params;
    const { movieName, thumbnail, director, writers, realiseDate, trailer, movieStars, category, story, genre } = otherParam;
    return (
        <ScrollView>
            <Card>

                <Card.Cover source={{ uri: thumbnail }} />

            </Card>

            <Card style={styles.container}>
                <Card.Content>
                    <Title>{movieName}</Title>

                    <Paragraph>Genre: {genre}</Paragraph>
                    <Paragraph>Director: {director}</Paragraph>
                    <Paragraph>Writers: {writers}</Paragraph>
                    <Paragraph>Realise Date: {realiseDate}</Paragraph>
                    <Paragraph>Stars : {movieStars}</Paragraph>

                </Card.Content>
                <View style={styles.videoPlayer}>
                    <YoutubePlayer

                        height={180}
                        play={false}
                        videoId={trailer}
                    />
                </View>
                <Card.Content>
                    <Title>Story of this movie: </Title>
                    <Paragraph>{story}</Paragraph>
                </Card.Content>

                <Card.Content>
                    <Text>For Links visit: www.movie-download.link</Text>

                </Card.Content>
            </Card>

        </ScrollView>
    )
}

export default MoviePage;

const styles = StyleSheet.create({
    container: {

        borderRadius: 15,
        marginTop: -10,
    },

    videoPlayer: {
        margin: 20,


    }
})