"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
// mongoose schema
var blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  content: { type: String, required: true },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: false, default: new Date() },
    },
  ],
});
// defining the collection and model
var Blog = mongoose.models["Blog"] || mongoose.model("Blog", blogSchema);
exports.default = Blog;
