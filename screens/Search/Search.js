import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Linking
} from 'react-native';
const Search = () => {
    const redirectToWebsite = () => {
        const url = 'https://64e6b8fd27e0cb2ad236fbb7--enchanting-horse-ae40a7.netlify.app/';
        Linking.openURL(url);
    };

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text>Hello Farmer</Text>
            <TouchableOpacity
                onPress={redirectToWebsite}
                style={{
                    marginTop: 20,
                    padding: 10,
                    backgroundColor: 'green',
                    borderRadius: 5,
                }}
            >
                <Text style={{ color: 'white' }}>Do You want chat with mentor</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Search;