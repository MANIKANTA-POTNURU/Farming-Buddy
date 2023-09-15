import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Linking
} from 'react-native';
const SellProducts = () => {
    const redirectToWebsite = () => {
        const url = 'https://koushik2003.pythonanywhere.com/admin';
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
                <Text style={{ color: 'white' }}>Sell Your Farm Products</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SellProducts;