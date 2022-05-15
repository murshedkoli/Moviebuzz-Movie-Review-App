import { StyleSheet, Text, View, Image, ScrollView, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserHeader from '../component/UserHeader';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'
import { Platform } from 'react-native-web';



const PostReview = ({ navigation }) => {


    const [selectedImage, setSelectedImage] = useState(null);

    const [imageUrl, setImageUrl] = useState(null);

    const [selectedGenre, setSelectedGenre] = useState();
    const [selectedCategory, setSelectedCategory] = useState()



    const [movieData, setMovieData] = useState({
        movieName: '',
        movieStars: '',
        director: '',
        writers: '',
        realiseDate: '',
        story: '',
        trailer: '',



    })




    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        });

        console.log("pick result" + result);

        if (!result.cancelled) {
            setSelectedImage(result.uri);
            uploadImage(result)
        }
    };

    const handleInput = (value, fieldName) => {

        setMovieData({ ...movieData, [fieldName]: value })

    }

    // const BaseUrl = 'https://kolimoviebuzz.herokuapp.com/';
    // const urlLocal = 'htpp://localhost:5000/'

    const handleSubmit = (e) => {

        const { movieName, movieStars, director, writers, realiseDate, story, trailer, category } = movieData;

        movieData.thumbnail = imageUrl;
        movieData.genre = selectedGenre;
        movieData.category = selectedCategory;


        if (movieName.length > 0 && selectedCategory.length > 0 && selectedGenre.length > 0 && movieStars.length > 0 && director.length > 0 && writers.length > 0 && realiseDate.length > 0 && story.length > 0 && trailer.length > 0) {
            fetch(`https://kolimoviebuzz.herokuapp.com/addMovie`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(movieData)
            }).then(res => res.json())
                .then(result => {
                    if (result.success) {
                        ToastAndroid.show('Review Update successfully!', ToastAndroid.LONG);

                        navigation.navigate('Home')
                        console.log(result.msg)

                    } else {
                        ToastAndroid.show('Review Not Update!', ToastAndroid.SHORT);
                        console.log(result.msg)
                    }

                })

        } else {
            ToastAndroid.show('Fill Correctly!', ToastAndroid.SHORT);

        }


    };







    const uploadImage = (imageres) => {


        const datas = new FormData();
        datas.set('key', 'b24984d25dcce8d78b7e6427dade3d03')
        datas.append('image', imageres);



        console.log(datas)

        axios.post('https://api.imgbb.com/1/upload', datas)
            .then(response => {
                setImageUrl(response.data.data.display_url);
                console.log(response.data.data.display_url)
            })
            .catch(err => {
            });
    }


    return (
        <SafeAreaView>
            <UserHeader navigation={navigation} title='Review Form' />
            <ScrollView >
                <View style={styles.container}>


                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Button style={{ marginBottom: 20, marginTop: 20 }} mode="contained" onPress={pickImage}>
                            Select the Featured Image
                        </Button>
                        {selectedImage && <Image source={{ uri: imageUrl }} style={{ width: '100%', height: 200, borderRadius: 10 }} />}
                    </View>



                    <TextInput
                        mode='outlined'
                        label="Write Movie Name"
                        onChangeText={value => handleInput(value, 'movieName')} name='movieName' id='movieName' type="text" placeholder='Movie Name' />

                    <Picker
                        selectedValue={selectedGenre}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedGenre(itemValue)
                        }>
                        <Picker.Item label="Select Genre" value="genre" />
                        <Picker.Item label="Action" value="Action" />
                        <Picker.Item label="Darama" value="Darama" />
                        <Picker.Item label="Super Hero" value="Super Hero" />
                        <Picker.Item label="Crime Drama" value="Crime Drama" />
                        <Picker.Item label="War" value="War" />
                        <Picker.Item label="Fatasy" value="Fatasy" />
                        <Picker.Item label="Romance" value="Romance" />
                    </Picker>





                    <Picker
                        selectedValue={selectedCategory}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedCategory(itemValue)
                        }>
                        <Picker.Item label="Select Category" value="Category" />
                        <Picker.Item label="Bollywood" value="Bollywood" />
                        <Picker.Item label="Hollywood" value="Hollywood" />
                        <Picker.Item label="South Indian" value="South Indian" />
                        <Picker.Item label="Dhallywood" value="Dhallywood" />
                        <Picker.Item label="Tallywood" value="Tallywood" />
                        <Picker.Item label="Korean" value="Korean" />
                        <Picker.Item label="TV Series" value="TVSeries" />

                    </Picker>

                    <TextInput
                        mode='outlined'
                        label="Stars Name Here"
                        onChangeText={value => handleInput(value, 'movieStars')} type="text" name='movieStars' id='movieStars' placeholder='Robart Downy Jr.' />




                    <TextInput
                        mode='outlined'
                        label="Write Director Name"
                        onChangeText={value => handleInput(value, 'director')} type="text" name='director' id='director' placeholder='director' />



                    <TextInput
                        mode='outlined'
                        label="Write Writers Name"
                        onChangeText={value => handleInput(value, 'writers')} type="text" name='writers' id='writers' placeholder='writers' />



                    <TextInput
                        mode='outlined'
                        label="RealisDate"
                        onChangeText={value => handleInput(value, 'realiseDate')} type="date" name='realiseDate' id='realiseDate' placeholder='01/04/1997' />






                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        mode='outlined'
                        label="Write The Plot of the Movie"
                        onChangeText={value => handleInput(value, 'story')} type="text" name='story' id='story' placeholder='story' />




                    <TextInput
                        mode='outlined'
                        label="Paste The Trailer Youtube Id"
                        onChangeText={value => handleInput(value, 'trailer')} type="text" name='trailer' id='trailer' placeholder='trailer Link' />




                    <Button style={{ marginBottom: 20, marginTop: 20 }} mode="contained" onPress={handleSubmit}>
                        Submit
                    </Button>


                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default PostReview

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 50

    }
})