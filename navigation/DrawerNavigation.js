import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../component/Home';
import TVSeriesScreen from '../screens/TVSeriesScreen'
import BollywoodScreen from '../screens/BollywoodScreen';
import HollywoodScreen from '../screens/HollywoodScreen';
import BangladeshiScreen from '../screens/BangladeshiScreen';
import KolkataScreen from '../screens/KolkataScreen';
import KoreanScreen from '../screens/KoreanScreen';
import SouthIdianScreen from '../screens/SouthIdianScreen';
import OthersScreen from '../screens/OthersScreen';
import CustomDrawer from '../component/CustomDrawer';
import { MaterialIcons } from '@expo/vector-icons';




const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false, drawerLabelStyle: { marginLeft: -25 } }}
            drawerContent={props => <CustomDrawer {...props} />} initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home}
                options={{
                    title: 'Home',
                    drawerIcon: (color) => (
                        <MaterialIcons name="home" size={24} color={color} />
                    )

                }}
            />


            <Drawer.Screen name="Bollywood" component={BollywoodScreen}
                options={{
                    title: 'Bollywood Movies',
                    drawerIcon: (color) => (
                        <MaterialIcons name="local-movies" size={24} color={color} />
                    )

                }}
            />


            <Drawer.Screen name="SouthIndian" component={SouthIdianScreen}
                options={{
                    title: 'SouthIndian Movies',
                    drawerIcon: (color) => (
                        <MaterialIcons name="movie" size={24} color={color} />
                    )
                }}
            />

            <Drawer.Screen name="Hollywood" component={HollywoodScreen}
                options={{
                    title: 'Hollywood Movies',
                    drawerIcon: (color) => (
                        <MaterialIcons name="movie" size={24} color={color} />
                    )
                }}
            />

            <Drawer.Screen name="Kolkata" component={KolkataScreen}
                options={{
                    title: 'Kolkata Movies',
                    drawerIcon: (color) => (
                        <MaterialIcons name="movie" size={24} color={color} />
                    )
                }}
            />

            <Drawer.Screen name="Bangladeshi" component={BangladeshiScreen}
                options={{
                    title: 'Bangladeshi Movies',
                    drawerIcon: (color) => (
                        <MaterialIcons name="movie" size={24} color={color} />
                    )
                }}
            />
            <Drawer.Screen name="Korean" component={KoreanScreen}
                options={{
                    title: 'Korean Movies',
                    drawerIcon: (color) => (
                        <MaterialIcons name="movie" size={24} color={color} />
                    )
                }}
            />

            <Drawer.Screen name="Others" component={OthersScreen}
                options={{
                    title: 'Others Movies',
                    drawerIcon: (color) => (
                        <MaterialIcons name="movie-filter" size={24} color={color} />
                    )
                }}
            />


            <Drawer.Screen name="TVSeries" component={TVSeriesScreen}
                options={{
                    title: 'TV Series',
                    drawerIcon: (color) => (
                        <MaterialIcons name="live-tv" size={24} color={color} />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation

