import { useState, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import UserHeader from '../component/UserHeader';
import MoviesRow from '../component/MoviesRow';


const HollyWoodScreen = ({ navigation }) => {


    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://kolimoviebuzz.herokuapp.com/movies')
            .then(result => result.json())
            .then(data => {

                const movieshere = data.filter(item => item.category === "হলিউড");
                setMovies(movieshere.reverse());

            })
    }, [])



    return (
        <SafeAreaView>
            <UserHeader navigation={navigation} title='Hollywood Movies' />
            <ScrollView >

                <MoviesRow movies={movies} navigation={navigation} />

            </ScrollView>
        </SafeAreaView>
    )
}

export default HollyWoodScreen

const styles = StyleSheet.create({})