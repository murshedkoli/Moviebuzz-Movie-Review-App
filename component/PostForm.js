import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

const PostForm = ({ imageUrl, uploadPercentage, handleImgUpload, handleInput, value, fieldName, selectedCategory, setSelectedCategory, selectedGenre, setSelectedGenre, handleSubmit }) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Post A Review </Text>
            <View >
                <View >
                    <Image source={imageUrl} alt="profile" />


                </View>
                <View >



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
            </View>
        </ScrollView>
    )
}

export default PostForm

const styles = StyleSheet.create({
    container: {
        padding: 10,

    },
    title: { textAlign: 'center', fontSize: 20, padding: 10, fontWeight: 'bold', color: 'gray' }
})