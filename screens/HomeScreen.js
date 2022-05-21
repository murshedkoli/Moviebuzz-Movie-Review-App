import React, { useState, useEffect } from 'react'
import { StyleSheet, RefreshControl, ScrollView, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import MoviesRow from '../component/MoviesRow';
import SearchBar from '../component/SearchBar';
import UserHeader from '../component/UserHeader';


const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

const HomeScreen = ({ navigation }) => {

    const [refreshing, setRefreshing] = React.useState(false);


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);



    const [movies, setMovies] = useState([]);
    console.log(movies)

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
    }, [refreshing])



    return (
        <SafeAreaView>
            <UserHeader navigation={navigation} title='MovieBuzz' />
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                style={{ backgroundColor: 'rgba(17, 17, 94, 0.39)', paddingTop: 20 }}>

                <SearchBar />
                <MoviesRow movies={movies} navigation={navigation} />

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})