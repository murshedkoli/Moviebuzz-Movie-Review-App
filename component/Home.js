import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import MoviePage from '../screens/MoviePage';
import PostReview from '../screens/PostReview';


const Stack = createNativeStackNavigator();

const Home = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="MoviePage" component={MoviePage}
                options={{ headerShown: false }} />

            <Stack.Screen name="PostPage" component={PostReview}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Home

const styles = StyleSheet.create({})