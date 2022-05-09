import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

const GetMovies = ({ category }) => {



    return (
        useEffect(() => {
            fetch('https://kolimoviebuzz.herokuapp.com/movies')
                .then(result => result.json())
                .then(data => {

                    const movieshere = data.filter(item => item.category === category);

                    return movieshere;

                });

        }, [category])
    )



}

export default GetMovies

const styles = StyleSheet.create({})