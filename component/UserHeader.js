import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const UserHeader = ({ navigation }) => {
    return (
        <View
            style={styles.userHead}
        >
            <Text style={styles.userNameStyle}>Hello Murshed</Text>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <ImageBackground
                    source={require('../assets/userpro.jpg')}
                    style={{ width: 35, height: 35 }}
                    imageStyle={{ borderRadius: 25 }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default UserHeader

const styles = StyleSheet.create({
    userHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
    },
})