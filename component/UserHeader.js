import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';



const UserHeader = ({ navigation, navigation: { goBack }, title, }) => {


    return (
        <View
            style={styles.userHead}
        >
            <View>
                {
                    title !== "MovieBuzz" &&
                    <TouchableOpacity onPress={() => goBack()} style={{ flexDirection: 'row' }}>
                        <MaterialIcons style={styles.backButton} name='arrow-back-ios' />
                        <Text style={{ color: 'white' }}>Back</Text>
                    </TouchableOpacity>
                }

            </View>
            {
                title !== "MovieBuzz" ? <View><Text style={styles.userNameStyle}>{title}</Text></View> :
                    <View><Text style={{ color: 'white', fontSize: 25, marginLeft: -100, fontWeight: 'bold' }}>MovieBuzz</Text></View>
            }
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                {
                    title !== 'Review Form' && <TouchableOpacity
                        style={{ marginRight: 20 }}
                        onPress={() => navigation.navigate('PostPage')
                        }
                    >
                        <FontAwesome name="plus" size={24} color="white" />
                    </TouchableOpacity>
                }
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <ImageBackground
                        source={require('../assets/userpro.jpg')}
                        style={{ width: 35, height: 35 }}
                        imageStyle={{ borderRadius: 25 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UserHeader

const styles = StyleSheet.create({
    userHead: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: 'darkblue',
        paddingVertical: 10,
        marginBottom: 10

    },

    userNameStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    backButton: {
        fontSize: 18,
        color: 'white'
    }
})