import { Schema, model } from "mongoose";

const event = new Schema({
  name: String,
  image: String,
  date: Date,
  link: String,
  about: String,
  location: String,
  addition: String,
});

const Event = model("Event", event);

export default Event;
