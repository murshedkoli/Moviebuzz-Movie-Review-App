import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';


const SearchBar = () => {
    return (
        <View style={styles.searchBar}>
            <MaterialIcons name='search' size={20} color="#c6c6c6" style={{ marginRight: 5 }} />
            <TextInput placeholder='Search' style={{ width: '100%' }} />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBar: {
        margin: 20,
        marginBottom: 0,
        marginTop: 0,
        flexDirection: 'row',
        borderColor: '#c6c6c6',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        alignItems: 'center'

    }
})