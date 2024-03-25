import Cinema from "../model/cinema";
import { connectDB } from "../config/db";
import "dotenv/config";

// import fs from "fs";
// import path from "path";

const fs = require("fs");
const path = require("path");

const uploadCinema = async () => {
  try {
    await connectDB(process.env.MONGO_URI as string);
    console.log("Өгөгдлийн санруу хуулж эхэлж байна");
    const fdata = fs.readFileSync(
      path.join(__dirname, "../../data/film.json"),
      {
        encoding: "utf8",
      }
    );
    const films = JSON.parse(fdata).films;
    await Cinema.deleteMany();
    await Cinema.insertMany(films);
    console.log("Өгөгдлийн санруу хуулж дууслаа");
  } catch (error) {
  } finally {
    process.exit();
  }
};

uploadCinema();
