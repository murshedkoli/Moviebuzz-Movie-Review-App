import { useState, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import UserHeader from '../component/UserHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import MoviesRow from '../component/MoviesRow';


const BangladeshiScreen = ({ navigation }) => {


    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://kolimoviebuzz.herokuapp.com/movies')
            .then(result => result.json())
            .then(data => {

                const movieshere = data.filter(item => item.category === "Dhallywood");
                setMovies(movieshere.reverse());


            })
    }, [])



    return (
        <SafeAreaView>
            <UserHeader navigation={navigation} title='Bangladeshi Movies' />
            <ScrollView >

                <MoviesRow movies={movies} navigation={navigation} />

            </ScrollView>
        </SafeAreaView>
    )
}

export default BangladeshiScreen;

const styles = StyleSheet.create({})