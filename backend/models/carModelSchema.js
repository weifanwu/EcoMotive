const mongoose = require('mongoose');

const CarModelSchema = new mongoose.Schema({
    title: String,
    year: String,
    external_link: String,
    make: String,
    model: String,
    car_type: String,
    base_model: String,
    co2_emission: String,
    combined_MPG: String,
    drive: String,
    fuel_type: String,
    fuel_economy_score: String,
    range: String,
    transmission: String,
    vehicle_size_class: String,
    you_save_spend_in_5_years: String,
    number_of_seats: String,
    apple_carplay: String,
    keyless_entry: String,
    dynamic_cruise_control: String,
    price: String,
    image: String
});

const Car = mongoose.model('Car', CarModelSchema);

module.exports = Car;