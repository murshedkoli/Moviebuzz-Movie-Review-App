import React, { useState, useEffect } from 'react'
import { StyleSheet, Button, View, Text, ScrollView, ActivityIndicator, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import MoviesRow from '../component/MoviesRow';
import SearchBar from '../component/SearchBar';
import UserHeader from '../component/UserHeader';


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
        <SafeAreaView>
            <UserHeader navigation={navigation} />
            <ScrollView >

                <SearchBar />
                <MoviesRow movies={movies} navigation={navigation} />

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

    userNameStyle: {
        fontSize: 18,
    },

})