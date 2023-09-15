import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Soil = () => {
    const handleBuyNow = (parameters) => {
        // Implement the action you want to take when the "Buy Now" button is pressed.
        // You can pass the selected parameters to this function if needed.
        console.log(`Buy Now clicked for parameters: ${parameters}`);
    };

    return (
        <View style={styles.container}>
            {/* Main Data Card */}
            <View style={[styles.card, { marginBottom: 20 }]}>
                <Text style={styles.parameterTitle}>Soil Sample Data on 3 parameters</Text>
                <View style={styles.parameterContainer}>
                    <Text style={styles.parameterLabel}>pH</Text>
                </View>
                <View style={styles.parameterContainer}>
                    <Text style={styles.parameterLabel}>Electrical Conductivity</Text>
                </View>
                <View style={styles.parameterContainer}>
                    <Text style={styles.parameterLabel}>Organic Carbon</Text>
                </View>
                <TouchableOpacity onPress={() => handleBuyNow('3 parameters')}>
                    <Text style={styles.buyButton}>Buy Now (3 parameters)</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.card, { marginBottom: 20 }]}>
                <Text style={styles.parameterTitle}>Soil Sample Data on 6 parameters</Text>
                <View style={styles.parameterContainer}>
                    <Text style={styles.parameterLabel}>pH</Text>
                </View>
                <View style={styles.parameterContainer}>
                    <Text style={styles.parameterLabel}>Electrical Conductivity</Text>
                </View>
                <View style={styles.parameterContainer}>
                    <Text style={styles.parameterLabel}>Organic Carbon</Text>
                </View>
                <View style={styles.parameterContainer}>
                    <Text style={styles.parameterLabel}>Nitrogen (N)</Text>
                </View>
                <View style={styles.parameterContainer}>
                    <Text style={styles.parameterLabel}>Phosphorus</Text>
                </View>
                <View style={styles.parameterContainer}>
                    <Text style={styles.parameterLabel}>Potassium</Text>
                </View>
                <TouchableOpacity onPress={() => handleBuyNow('6 parameters')}>
                    <Text style={styles.buyButton}>Buy Now (6 parameters)</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    parameterTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    parameterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    parameterLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 2,
    },
    buyButton: {
        fontSize: 14,
        color: 'green',
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
});

export default Soil;
