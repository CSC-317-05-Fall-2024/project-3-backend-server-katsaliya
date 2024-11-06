// Fill this in
let restaurantData = [
    {
        id: 0,
        name: "Sühring",
        phone: "+66 2 287 1799",
        address: "10 Yen Akat Soi 3, Bangkok 10120, Thailand",
        photo: "/images/Sühring.png",
    },
    {
        id: 1,
        name: "Nahm",
        phone: "+66 2 625 3333",
        address: "27 South Sathorn Road, Bangkok 10120, Thailand",
        photo: "/images/nahm.png",
    },
    {
        id: 2,
        name: "Gaggan Anand",
        phone: "+66 98 883 1022",
        address: "68 Sukhumvit Soi 31, Bangkok 10110, Thailand",
        photo: "/images/Gaggan.png",
    },
    {
        id: 3,
        name: "Blue Elephant",
        phone: "+66 76 354 355",
        address: "96 Krabi Road, Phuket 83000, Thailand",
        photo: "/images/Blue.png",
    },
    {
        id: 4,
        name: "Baan Rim Pa",
        phone: "+66 76 340 789",
        address: "223 Prabaramee Road, Phuket 83150, Thailand",
        photo: "/images/baan.png",
    },
    {
        id: 5,
        name: "Le Du",
        phone: "+66 92 919 9969",
        address: "399/3 Silom Soi 7, Bangkok 10500, Thailand",
        photo: "/images/LeDu.png",
    },
];

let lastId = restaurantData.length> 0 ? restaurantData[restaurantData.length - 1].id : 0;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
    return restaurantData;
};


// Get a restaurant by id
const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id === id);
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
    const restaurant = {
        id: getNextId(),
        ...newRestaurant,
    };
    restaurantData.push(restaurant);
    return restaurant;
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
    restaurantData = restaurantData.filter(restaurant => restaurant.id !== id);

};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };