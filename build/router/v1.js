"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var PostController_1 = require("../controllers/PostController");
exports.default = (function (app) {
    var apiRoutes = express.Router();
    var postRoutes = express.Router();
    /** Post routes*/
    apiRoutes.use('/posts', postRoutes);
    postRoutes.get("/", PostController_1.getAllPosts);
    postRoutes.get("/:id", PostController_1.getPostById);
    postRoutes.post("/", PostController_1.createPost);
    postRoutes.put("/:id", PostController_1.updatePost);
    postRoutes.delete("/:id", PostController_1.deletePost);
    //apiRoutes usa y contiene todas las peticiones postRoutes
    app.use("/api", apiRoutes);
    //no se exporta porq la function recibe la app
});
//# sourceMappingURL=v1.js.map