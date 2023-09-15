const myProfile = {
    name: "Ninja Coders",
    profile_image: require("../assets/images/profile.png"),
    address: "ISB, Hyderabad"
}

const categories = [
    {
        id: 1,
        name: "Crop Tonics",
        icon: require("../assets/icons/rice.png")
    },
    {
        id: 2,
        name: "Fertilizer",
        icon: require("../assets/icons/rice.png")
    },
    {
        id: 3,
        name: "Pesticide",
        icon: require("../assets/icons/rice.png")
    },
    {
        id: 4,
        name: "Seeds",
        icon: require("../assets/icons/rice.png")
    }
]

const croptonic1 = {
    id: 1,
    name: "Crop Tonic",
    description: "Crop Tonic for Farms",
    categories: [1],
    price: 100,
    recommended: 78,
    isFavourite: true,
    image: require("../assets/dummyData/croptonics/tonic1.png")
}

const croptonic2 = {
    id: 2,
    name: "Crop Tonic",
    description: "Crop Tonic for Farms",
    categories: [1],
    price: 150,
    recommended: 78,
    isFavourite: false,
    image: require("../assets/dummyData/croptonics/tonic2.png")
}

const croptonic3 = {
    id: 3,
    name: "Crop Tonic",
    description: "Crop Tonic for Farms",
    categories: [1],
    price: 150,
    recommended: 78,
    isFavourite: false,
    image: require("../assets/dummyData/croptonics/tonic3.png")
}

const croptonic4 = {
    id: 4,
    name: "Crop Tonic",
    description: "Crop Tonic for Farms",
    categories: [1],
    price: 150,
    recommended: 78,
    isFavourite: false,
    image: require("../assets/dummyData/croptonics/tonic4.png")
}

const Fertilizer1 = {
    id: 4,
    name: "Fertilizers",
    description: "Fertilizers for Farms",
    categories: [2],
    price: 150,
    recommended: 78,
    isFavourite: true,
    image: require("../assets/dummyData/Fertilizers/fert1.png")
}

const Fertilizer2 = {
    id: 4,
    name: "Fertilizers",
    description: "Fertilizers for Farms",
    categories: [2],
    price: 150,
    recommended: 78,
    isFavourite: true,
    image: require("../assets/dummyData/Fertilizers/fert2.png")
}
const Fertilizer3 = {
    id: 4,
    name: "Fertilizers",
    description: "Fertilizers for Farms",
    categories: [2],
    price: 150,
    recommended: 78,
    isFavourite: true,
    image: require("../assets/dummyData/Fertilizers/fert3.png")
}
const Fertilizer4 = {
    id: 4,
    name: "Fertilizers",
    description: "Fertilizers for Farms",
    categories: [2],
    price: 150,
    recommended: 78,
    isFavourite: true,
    image: require("../assets/dummyData/Fertilizers/fert4.png")
}
const Fertilizer5 = {
    id: 4,
    name: "Fertilizers",
    description: "Fertilizers for Farms",
    categories: [2],
    price: 150,
    recommended: 78,
    isFavourite: true,
    image: require("../assets/dummyData/Fertilizers/fert5.png")
}
const Pestcides1 = {
    id: 4,
    name: "Pesticides",
    description: "Pesticides for Farms",
    categories: [3],
    price: 150,
    recommended: 78,
    isFavourite: true,
    image: require("../assets/dummyData/Pesticides/pest1.png")
}
const Pestcides2 = {
    id: 4,
    name: "Pesticides",
    description: "Pesticides for Farms",
    categories: [3],
    price: 150,
    recommended: 78,
    isFavourite: true,
    image: require("../assets/dummyData/Pesticides/pest2.png")
}
const Pestcides3 = {
    id: 4,
    name: "Pesticides",
    description: "Pesticides for Farms",
    categories: [3],
    price: 150,
    recommended: 78,
    isFavourite: true,
    image: require("../assets/dummyData/Pesticides/pest3.png")
}
const Pestcides4 = {
    id: 4,
    name: "Pesticides",
    description: "Pesticides for Farms",
    categories: [3],
    price: 150,
    recommended: 78,
    isFavourite: true,
    image: require("../assets/dummyData/Pesticides/pest4.png")
}
const Pestcides5 = {
    id: 4,
    name: "Pesticides",
    description: "Pesticides for Farms",
    categories: [3],
    price: 150,
    recommended: 78,
    isFavourite: true,
    image: require("../assets/dummyData/Pesticides/pest5.png")
}
const menu = [
    {
        id: 1,
        name: "Featured",
        list: [
            croptonic1, croptonic2, croptonic3,Fertilizer5,Fertilizer1,Pestcides5,Pestcides1
        ]
    },
    {
        id: 2,
        name: "Nearby you",
        list: [
            croptonic1, croptonic3, croptonic4,Fertilizer4,Fertilizer5,Fertilizer1,Pestcides4,Pestcides2
        ]
    },
    {
        id: 3,
        name: "Popular",
        list: [
            croptonic1, croptonic2, croptonic4,Fertilizer3,Fertilizer5,Fertilizer1,Pestcides3,Pestcides2,Pestcides1
        ]
    },
    {
        id: 4,
        name: "Newest",
        list: [
            croptonic1, croptonic2, croptonic3,Fertilizer2,Fertilizer5,Fertilizer1,Pestcides5
        ]
    },
    {
        id: 5,
        name: "Trending",
        list: [
            croptonic1, croptonic3, croptonic4,Fertilizer1,Fertilizer5,Pestcides5,Pestcides4
        ]
    },
    {
        id: 6,
        name: "Recommended",
        list: [
            croptonic1, croptonic2, croptonic4,Fertilizer5,Fertilizer1,Pestcides3,Pestcides5
        ]
    },

]

const sizes = [
    {
        id: 1,
        label: '1L'
    },
    {
        id: 2,
        label: '2L'
    },
    {
        id: 3,
        label: '3L'
    },
    {
        id: 4,
        label: '4L'
    }
]

const myCart = [
    {
        ...croptonic1,
        qty: 1
    },
    {
        ...croptonic2,
        qty: 1
    },
    {
        ...croptonic3,
        qty: 1
    }
]

const myCards = [
    {
        id: 1,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
        card_no: "1234"
    },
    {
        id: 2,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
        card_no: "1234"
    },
]

const allCards = [
    {
        id: 1,
        name: "Apple Pay",
        icon: require("../assets/icons/apple.png")
    },
    {
        id: 2,
        name: "Visa",
        icon: require("../assets/icons/visa.png"),
    },
    {
        id: 3,
        name: "PayPal",
        icon: require("../assets/icons/paypal.png"),
    },
    {
        id: 4,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
    },
    {
        id: 5,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
    },
]


const fromLocs = [
    {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
    },
    {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
    },
    {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
    },
    {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
    },
    {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
    },
    {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
    }
]

const Tomato = require("../assets/images/tomato.jpg")
const beet = require("../assets/images/beet.jpg")
const rice = require("../assets/images/rice.jpg")
const wheat = require("../assets/images/wheat.jpg")
 const carrot = require("../assets/images/carrot.jpg")


const pizzaHut = require("../assets/dummyData/pizza_hut.png")
const mcDonald = require("../assets/dummyData/mcdonald.png")
const burgerKing = require("../assets/dummyData/burger_king.png")
const domino = require("../assets/dummyData/domino_pizza.png")
const starbucks = require("../assets/dummyData/starbucks.png")
const veg_biryani = require("../assets/dummyData/veg_biryani.png")
const wrap_sandwich = require("../assets/dummyData/wrap_sandwich.png")

const orderHistories = [
    {
        title: "19 Sep 2021",
        data: [
            {
                id: 18888,
                name: "Pizza Hut",
                image: pizzaHut,
                price: 35.30,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 3,
                deliveredTime: "19 Sep, 14:30"
            },
            {
                id: 28888,
                name: "KFC",
                //image: kfc,
                price: 55.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "19 Sep, 12:30"
            },
            {
                id: 38888,
                name: "Domino's Pizza",
                image: domino,
                price: 15.50,
                status: "C",
                status_desc: "Order Cancel",
                itemCount: 1,
                deliveredTime: "19 Sep, 10:30"
            },
        ]
    },
    {
        title: "15 Sep 2021",
        data: [
            {
                id: 48888,
                name: "Starbucks",
                image: starbucks,
                price: 40.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "15 Sep, 10:00"
            }
        ]
    }
]

const upcomingOrders = [
    {
        title: "",
        data: [
            {
                id: 88888,
                name: "Starbucks",
                image: starbucks,
                price: 10.00,
                status: "O",
                status_desc: "Food on the way",
                itemCount: 4,
                deliveredTime: "27 Sep, 10:00"
            },
            {
                id: 98888,
                name: "McDonald",
                image: mcDonald,
                price: 20.00,
                status: "O",
                status_desc: "Food on the way",
                itemCount: 4,
                deliveredTime: "27 Sep, 10:00"
            },
        ]
    },
    {
        title: "Latest Orders",
        data: [
            {
                id: 68888,
                name: "Starbucks",
                image: starbucks,
                price: 10.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "27 Sep, 10:00"
            },
            {
                id: 78888,
                name: "Burger King",
                image: burgerKing,
                price: 12.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "27 Sep, 8:00"
            }
        ]
    }
]

const availableCoupons = [
    {
        id: 1,
        name: "Tomato",
        image:Tomato,
        description: 'Last 6 months',
        discountPercent: 20 ,
    },
    {
        id: 2,
        name: "Beetroot",
        image:beet,
        description: 'Last 4 months',
        discountPercent: 10,
    },
    {
        id: 3,
        name: "Rice",
       image: rice,
        description: 'Last 3 months',
        discountPercent: 35,
    },
    {
        id: 4,
        name: "Wheat",
        image: wheat,
        description: 'Last 4 months',
        discountPercent: 15,
    },
    {
        id: 5,
        name: "Carrot",
        image: carrot,
        description: 'Last 5 months',
        discountPercent: 30,
    },
]

const usedCoupons = [
    {
        id: 1,
        name: "Rice",
        image: rice,
        description: 'From Last month',
        discountPercent: 20,
    },
    {
        id: 2,
        name: "Wheat",
        image: wheat,
        description: 'From Last 3 months',
        discountPercent: 15,
    },
]

const notifications = [
    {
        title: "Andhra",
        data: [
            {
                id: 1,
                image: domino,
                title: "T",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "a few seconds ago"
            },
            {
                id: 2,
                image: veg_biryani,
                title: "Veg Biryani - 35% sale today",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "5 mins ago"
            },
        ]
    },
    {
        title: "OthersState",
        data: [
            {
                id: 3,
                image: domino,
                title: "Domino's - Buy 1 get 1 free",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "1 day ago"
            },
            {
                id: 4,
                image: veg_biryani,
                title: "Veg Biryani - 35% sale today",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "1 day ago"
            }
        ]
    }
]

const deliveryMan = {
    name: "Williams Adam",
    avatar: require("../assets/dummyData/delivery_man.png")
}

export default {
    myProfile,
    categories,
    menu,
    sizes,
    myCart,
    myCards,
    allCards,
    fromLocs,
    orderHistories,
    upcomingOrders,
    availableCoupons,
    usedCoupons,
    notifications,
    deliveryMan,
}