import { Router } from "express";
import mongoose from "mongoose";

// Erstelle neue Router Instanz
const buildingsRouter = Router();

const buildingSchema = new mongoose.Schema({
  id: { type: String },
  Name: String,
  Coordinates: {
    X: Number,
    Y: Number,
    Width: Number,
    Length: Number,
  },
  image: String,
  occupied: Number,
  empty: Number,
  address: String,
});

const poiSchema = new mongoose.Schema({
  id: String,
  Name: String,
  Coordinates: {
    X: Number,
    Y: Number,
  },
  size: {
    width: Number,
    height: Number,
  },
  image: String,
  description: String,
});

// ------------------------------------------------------


export const BuildingsModel = mongoose.model("Building", buildingSchema);
export const PoisModel = mongoose.model("Poi", poiSchema);

buildingsRouter.route("/").get( async (req, res) => {
  
    try {
        let buildings = await BuildingsModel.find();

        res.send(buildings)
    } catch (error) {
        console.log(error);
    }
});


export default buildingsRouter;
