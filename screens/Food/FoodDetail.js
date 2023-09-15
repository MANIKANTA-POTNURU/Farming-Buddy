import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';

import {
    Header,
    IconButton,
    CartQuantityButton,
    IconLabel,
    LineDivider,
    Rating,
    StepperInput,
    TextButton
} from "../../components"
import { FONTS, SIZES, COLORS, icons, images, dummyData } from "../../constants"

const FoodDetail = ({ navigation, route }) => {

    const [selectedSize, setSelectedSize] = React.useState("")
    const [foodItem, setFoodItem] = React.useState([])
    const [qty, setQty] = React.useState(1)

    React.useEffect(() => {
        let { foodItem } = route.params
        setFoodItem(foodItem)
    }, [])

    // Render

    function renderHeader() {
        return (
            <Header
                title="DETAILS"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2,
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <CartQuantityButton
                        quantity={3}
                    />
                }
            />
        )
    }

    function renderDetails() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* Food Card */}
                <View
                    style={{
                        height: 190,
                        borderRadius: 15,
                        backgroundColor: COLORS.lightGray2,
                    }}
                >
                    {/* Calories & Favourite */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: SIZES.base,
                            paddingHorizontal: SIZES.radius,
                        }}
                    >
                       

                        {/* Favourite */}
                        <Image
                            source={icons.love}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray
                            }}
                        />

                    </View>

                    {/* Food Image */}
                    <Image
                        source={foodItem?.image}
                        resizeMode="contain"
                        style={{
                            height: 170,
                            width: "100%"
                        }}
                    />
                </View>

                {/* Food Info */}
                <View
                    style={{
                        marginTop: SIZES.padding
                    }}
                >
                    {/* Name & Description */}
                    <Text style={{ ...FONTS.h1 }}>{foodItem?.name}</Text>

                    <Text
                        style={{
                            marginTop: SIZES.base,
                            color: COLORS.darkGray,
                            textAlign: 'justify',
                            ...FONTS.body3,
                        }}
                    >
                        woww , its good choice
                    </Text>

                    {/* Ratings & Duration & Shipping */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding
                        }}
                    >
                        {/* Ratings */}
                        <IconLabel
                            containerStyle={{
                                backgroundColor: COLORS.primary
                            }}
                            icon={icons.star}
                            label="4.5"
                            labelStyle={{
                                color: COLORS.white
                            }}
                        />

                        {/* Duration */}
                        <IconLabel
                            containerStyle={{
                                marginLeft: SIZES.radius,
                                paddingHorizontal: 0
                            }}
                            icon={icons.clock}
                            iconStyle={{
                                tintColor: COLORS.black
                            }}
                            label="5 days"
                        />

                       
                    </View>

                    {/* Sizes */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding,
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>Sizes:</Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                marginLeft: SIZES.padding
                            }}
                        >
                            {dummyData.sizes.map((item, index) => {
                                return (
                                    <TextButton
                                        key={`Sizes-${index}`}
                                        buttonContainerStyle={{
                                            width: 55,
                                            height: 55,
                                            margin: SIZES.base,
                                            borderWidth: 1,
                                            borderRadius: SIZES.radius,
                                            borderColor: selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                                            backgroundColor: selectedSize == item.id ? COLORS.primary : null
                                        }}
                                        label={item.label}
                                        labelStyle={{
                                            color: selectedSize == item.id ? COLORS.white : COLORS.gray2,
                                            ...FONTS.body2
                                        }}
                                        onPress={() => setSelectedSize(item.id)}
                                    />
                                )
                            })}
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    function renderRestaurant() {
        return (
            <View>
              

               

                
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 120,
                    alignItems: 'center',
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius
                }}
            >
                <StepperInput
                    value={qty}
                    onAdd={() => setQty(qty + 1)}
                    onMinus={() => {
                        if (qty > 1) {
                            setQty(qty - 1)
                        }
                    }}
                />

                <TextButton
                    buttonContainerStyle={{
                        flex: 1,
                        flexDirection: 'row',
                        height: 60,
                        marginLeft: SIZES.radius,
                        paddingHorizontal: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    label="Buy Now"
                    label2="Rs 100"
                    onPress={() => navigation.navigate("MyCart")}
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}

            <ScrollView>
                {/* Food Details */}
                {renderDetails()}

                <LineDivider />

                {/* Restaurant */}
                {renderRestaurant()}
            </ScrollView>

            {/* Footer */}
            <LineDivider />

            {renderFooter()}
        </View>
    )
}

export default FoodDetail;