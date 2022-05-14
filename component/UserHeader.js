import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const UserHeader = ({ navigation, navigation: { goBack }, title, NewPost }) => {

    const NewPostButton = NewPost || true;

    return (
        <View
            style={styles.userHead}
        >
            <View>
                {
                    title !== "MovieBuzz" &&
                    <TouchableOpacity onPress={() => goBack()} style={{ flexDirection: 'row' }}>
                        <MaterialIcons style={styles.backButton} name='arrow-back-ios' />
                        <Text>Back</Text>
                    </TouchableOpacity>
                }

            </View>
            <View><Text style={styles.userNameStyle}>{title}</Text></View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                {
                    title !== 'Review Form' && <TouchableOpacity
                        style={{ marginRight: 20 }}
                        onPress={() => navigation.navigate('PostPage')
                        }
                    >
                        <FontAwesome name="plus" size={24} color="black" />
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
        alignItems: 'center'
    },

    userNameStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    backButton: {
        fontSize: 18
    }
})