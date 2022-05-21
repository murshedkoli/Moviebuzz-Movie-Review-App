import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Card, Title, Paragraph } from 'react-native-paper';
import YoutubePlayer from 'react-native-youtube-iframe';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserHeader from '../component/UserHeader';



const MoviePage = ({ route, navigation }) => {
    const { itemId, otherParam } = route.params;
    const { movieName, thumbnail, director, writers, realiseDate, trailer, movieStars, category, story, genre } = otherParam;
    return (
        <SafeAreaView>
            <UserHeader navigation={navigation} title={movieName} />
            <ScrollView>
                <Card>

                    <Card.Cover source={{ uri: thumbnail }} />

                </Card>

                <Card style={styles.container}>
                    <Card.Content>
                        <Title style={{ fontSize: 25 }}>{movieName}</Title>

                        <Paragraph><Text style={{ fontSize: 15, fontWeight: 'bold' }}>ধরণঃ</Text> {genre}</Paragraph>
                        <Paragraph><Text style={{ fontSize: 15, fontWeight: 'bold' }}>পরিচালকঃ</Text> {director}</Paragraph>
                        <Paragraph><Text style={{ fontSize: 15, fontWeight: 'bold' }}>লেখকঃ</Text> {writers}</Paragraph>
                        <Paragraph><Text style={{ fontSize: 15, fontWeight: 'bold' }}>মুক্তির তারিখঃ</Text> {realiseDate}</Paragraph>
                        <Paragraph><Text style={{ fontSize: 15, fontWeight: 'bold' }}>তারকাঃ</Text> {movieStars}</Paragraph>

                    </Card.Content>
                    <View style={styles.videoPlayer}>
                        <YoutubePlayer

                            height={180}
                            play={false}
                            videoId={trailer}
                        />
                    </View>
                    <Card.Content>
                        <Title>কাহিণীঃ </Title>
                        <Paragraph>{story}</Paragraph>
                    </Card.Content>

                    <Card.Content>
                        <Text>ডাউনলোড লিংক এর জন্যঃ www.movie-download.link</Text>

                    </Card.Content>
                </Card>

            </ScrollView>
        </SafeAreaView>
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