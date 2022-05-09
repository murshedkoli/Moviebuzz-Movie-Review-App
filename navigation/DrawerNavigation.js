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




const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home}
                options={{
                    title: 'MovieBuzz'
                }}
            />


            <Drawer.Screen name="Bollywood" component={BollywoodScreen}
                options={{
                    title: 'Bollywood Movies'
                }}
            />


            <Drawer.Screen name="SouthIndian" component={SouthIdianScreen}
                options={{
                    title: 'SouthIndian Movies'
                }}
            />

            <Drawer.Screen name="Hollywood" component={HollywoodScreen}
                options={{
                    title: 'Hollywood Movies'
                }}
            />

            <Drawer.Screen name="Kolkata" component={KolkataScreen}
                options={{
                    title: 'Kolkata Movies'
                }}
            />

            <Drawer.Screen name="Bangladeshi" component={BangladeshiScreen}
                options={{
                    title: 'Bangladeshi Movies'
                }}
            />
            <Drawer.Screen name="Korean" component={KoreanScreen}
                options={{
                    title: 'Korean Movies'
                }}
            />

            <Drawer.Screen name="Others" component={OthersScreen}
                options={{
                    title: 'Others Movies'
                }}
            />


            <Drawer.Screen name="TVSeries" component={TVSeriesScreen}
                options={{
                    title: 'TV Series'
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation

