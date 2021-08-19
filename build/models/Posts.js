"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var PostSchema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: "",
        required: true
    },
    content: {
        type: String,
        default: "",
        required: true
    }
});
//Post es el objeto de PostSchema
exports.default = mongoose.model("Post", PostSchema);
//# sourceMappingURL=Posts.js.map