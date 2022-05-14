import { StyleSheet, Text, View, Image, ScrollView, ToastAndroid } from 'react-native'
import React, { useState, } from 'react'
import { Button, TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserHeader from '../component/UserHeader';


const PostReview = ({ navigation }) => {



    const [imageUrl, setImageUrl] = useState(
        'https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg'
    );

    const [uploadPercentage, setUploadPercentage] = useState(0);

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



    const handleInput = (value, fieldName) => {

        setMovieData({ ...movieData, [fieldName]: value })

    }

    const BaseUrl = 'https://kolimoviebuzz.herokuapp.com/';
    const urlLocal = 'htpp://localhost:5000/'

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

                    } else {
                        ToastAndroid.show('Review Not Update!', ToastAndroid.SHORT);

                    }

                })

        } else {
            ToastAndroid.show('Fill Correctly!', ToastAndroid.SHORT);

        }


    };




    const handleImgUpload = event => {

        const image = event.target.files[0];
        const imagefile = event.target;


        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;


        if (!allowedExtensions.exec(imagefile.value)) {
            ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);


            imagefile.value = "";
        }


        if (image.size > 500000) {
            ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);

            imagefile.value = "";
        }


        else {
            uploadImage(image)
        }

    }



    const uploadImage = (image) => {

        const imageData = new FormData();
        imageData.set('key', 'b24984d25dcce8d78b7e6427dade3d03')
        imageData.append('image', image);


        const options = {
            onUploadProgress: (ProgressEvent) => {
                const { loaded, total } = ProgressEvent;
                let percent = Math.floor((loaded * 100) / total)

                if (percent < 100) {
                    setUploadPercentage(percent)
                }
            }
        }

        axios.post('https://api.imgbb.com/1/upload', imageData, options)
            .then(response => {
                setImageUrl(response.data.data.display_url);
                setUploadPercentage(100, () => {
                    setTimeout(() => {
                        setUploadPercentage(0);
                    }, 1000);
                })
            })
            .catch(err => {
            });
    }




    return (
        <SafeAreaView>
            <UserHeader navigation={navigation} title='Review Form' />
            <ScrollView >
                <Text style={{ textAlign: 'center', fontSize: 20, padding: 10, fontWeight: 'bold', color: 'gray' }}>Post A Review </Text>
                <View style={styles.container}>

                    <Image source={{ uri: imageUrl }} alt="profile" />
                    {/* {
                            uploadPercentage > 0 &&
                            <View class="progress" style={{ marginBottom: '15px' }}>
                                <View class={"progress-bar progress-bar-striped " + (uploadPercentage > 80 ? 'bg-success' : 'bg-danger')} role="progressbar" style={{ width: uploadPercentage + '%' }} aria-valuenow={uploadPercentage} aria-valuemin="0" aria-valuemax="100">{uploadPercentage}%</View>
                                <br /><br />
                            </View>
                        } */}





                    <TextInput onChange={handleImgUpload} name='thubmnail' id='thubmnail' type="file" />



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
        marginBottom: 20

    }
})