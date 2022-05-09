import * as React from 'react';
import { Appbar } from 'react-native-paper';


const AppBarAction = () => {

    // const { options } = scene.descriptor;
    // const title = options.headerTitle;
    return (
        <Appbar.Header>
            <Appbar.Content title="Title" />

        </Appbar.Header>
    )
};

export default AppBarAction;