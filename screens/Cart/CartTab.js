import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const CartTab = () => {
    // State to store the selected category
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Define an array of categories
    const categories = [
        {
            text: 'Agri Knowledge',
            videoId: 'jOv9JGGPhoQ',
            description: 'Description for Agri Knowledge videos',
        },
        {
            text: 'Agri Techniques',
            videoId: 'Al3pcVDdvwk',
            description: 'Description for Agri Techniques videos',
        },
        {
            text: 'Agri Loans',
            videoId: 'RSNfUVS3cJQ',
            description: 'Description for Agri Loans videos',
        },
        {
            text: 'Agri Insurances',
            videoId: 'v7C43dQOmgg',
            description: 'Description for Agri Insurances videos',
        },
        {
            text: 'Agri Schemes',
            videoId: 'UhZAgYPXmCk',
            description: 'Description for Agri Schemes videos',
        },
        {
            text: 'Agri Subsidies',
            videoId: 'KZ9Q72Pt2Ic',
            description: 'Description for Agri Subsidies videos',
        },
    ];

    // Function to handle category button click
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Render category buttons */}
            {categories.map((category) => (
                <Button 
                    key={category.text}
                    title={category.text}
                    onPress={() => handleCategoryClick(category)}
                    color="green"
                    style={{ marginVertical: 6, padding: 10, width: 150 }}
                />
            ))}
            {/* Render selected category details */}
            {selectedCategory && (
                <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                            Title: {selectedCategory.text}
                        </Text>

                        <WebView
                            source={{ uri: `https://www.youtube.com/embed/${selectedCategory.videoId}` }}
                            style={{ flex: 1, alignSelf: 'center', width: '100%', height: 250}}
                        />

                    <Text>Description: {selectedCategory.description}</Text>
                </View>
            )}
        </View>
    );
};

export default CartTab;
