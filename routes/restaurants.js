const express = require("express");
const router = express.Router();
const restaurantsData = require("../data");
router.get("/", (req, res) => {
  res.json(restaurantsData);
});

router.get("/:id", (req, res) => {
  const restaurantId = Number.parseInt(req.params.id, 10);
  const restaurant = restaurantsData.find((restaurant) => restaurant.id === restaurantId);
  res.json(restaurant);
});

router.post("/", (req, res) => {
  const currentRestaurantId = restaurantsData.length;
  console.log("🚀 ~ file: restaurants.js ~ line 16 ~ router.post ~ currentRestaurantId", currentRestaurantId);
  const newRestaurant = { id: currentRestaurantId + 1, ...req.body };
  restaurantsData.push(newRestaurant);
  res.json(newRestaurant);
});

router.put("/:id", (req, res) => {
  const restaurantId = Number.parseInt(req.params.id, 10);
  const restaurantIndex = restaurantsData.findIndex((restaurant) => restaurant.id === restaurantId);
  const updatedRestaurant = {
    id: restaurantId,
    ...req.body,
  };
  restaurantsData[restaurantIndex] = updatedRestaurant;
  res.json(updatedRestaurant);
});

router.delete("/:id", (req, res) => {
  const restaurantId = Number.parseInt(req.params.id, 10);
  const restaurantIndex = restaurantsData.findIndex((restaurant) => restaurant.id === restaurantId);
  restaurantsData.splice(restaurantIndex, 1);
  res.sendStatus(204);
});

module.exports = router;
