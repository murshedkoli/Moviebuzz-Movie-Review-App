import { StyleSheet, Text, Image, View, ImageBackground } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons';

const user = "user";

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>

            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#8200d6' }} >
                <ImageBackground source={require('../assets/menu-back.jpg')} style={{ padding: 20 }} >
                    {
                        user ? <View>
                            <Image source={require('../assets/userpro.jpg')} style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }} />
                            <Text style={{ color: '#fff', fontSize: 18 }} >Full Name</Text>
                            <Text style={{ color: '#fff', }} >Total Review: 10</Text>
                        </View>
                            : <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="login" size={18} />

                                <Text style={{
                                    fontSize: 15,
                                    marginLeft: 5
                                }}>Login</Text>
                            </View>
                    }
                </ImageBackground>
                <View style={{ backgroundColor: '#fff' }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderColor: '#ccc' }}>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="share" size={18} />

                        <Text style={{
                            fontSize: 15,
                            marginLeft: 5
                        }}>Share Your Frends</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({})