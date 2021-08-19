import * as express from "express";
import { 
    getAllPosts, getPostById, createPost, updatePost, deletePost
} from "../controllers/PostController"

export default (app) => {
    const apiRoutes = express.Router();
    const postRoutes = express.Router();

    /** Post routes*/
    apiRoutes.use('/posts',postRoutes);

    postRoutes.get("/", getAllPosts);
    postRoutes.get("/:id", getPostById);
    postRoutes.post("/", createPost);
    postRoutes.put("/:id", updatePost);
    postRoutes.delete("/:id", deletePost);
    //apiRoutes usa y contiene todas las peticiones postRoutes
    app.use("/api", apiRoutes);
    //no se exporta porq la function recibe la app
};