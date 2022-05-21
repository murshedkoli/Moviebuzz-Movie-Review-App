import { StyleSheet, Text, View, Image, ScrollView, ToastAndroid, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserHeader from '../component/UserHeader';
import { WebView } from 'react-native-webview';
import { Dimensions } from 'react-native';





const PostReview = ({ navigation }) => {


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <UserHeader navigation={navigation} title='Review Form' />

            <WebView
                source={{ uri: 'https://moviebuzz-server.web.app' }}
            />

        </SafeAreaView>
    )
}

export default PostReview


const styles = StyleSheet.create({

})