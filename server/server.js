// Add your server code here.
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { backendRouter } from './routes/api.js';
import { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from './data/restaurants.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api', backendRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routes

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

// get all restaurants
app.get('/restaurants', async (req, res) => {
    const restaurants = await getRestaurants();
    res.render('restaurants', {
        Title: "Must Try Restaurants in Thailand",
        restaurants
    });
});

// get restaurants by id
app.get('/restaurant/:id', async (req, res) => {
    const restaurantId = parseInt(req.params.id, 10);
    const restaurant = await getRestaurant(restaurantId)
    if(restaurant) {
        res.render('restaurant-details', {restaurant})
    } else {
        res.status(404).send('Restaurant not found');
    }
});

app.get('/newrestaurants', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'new-restaurant-form.html'));
});

app.get('/api/restaurants', async (req, res) => {
    const restaurants = await getRestaurants();
    res.json(restaurants);
});

// create new restaurant from form
app.post('/create', (req, res) => {
    const newRestaurantData = req.body;
    const newRestaurant = createRestaurant(newRestaurantData);
    console.log("New restaurant created:", newRestaurant);
    res.status(201).json(newRestaurant);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
