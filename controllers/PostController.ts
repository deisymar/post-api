import Post from "../models/Posts";

export function getAllPosts(req, res, next){
    Post.find((err,posts)=>{
        if(err){
            res.status(500).json({err});
        }
        res.status(200).json({posts});
    });
}

export function getPostById(req, res, next){
    const id= req.params.id;
    Post.findById(id,(err, post)=>{
        if(err){
            res.status(500).json({err});
        }
        res.status(200).json({post});
    });
}

export function createPost(req,res,next){
    const title = req.body.title;
    const content = req.body.content;

    if(!title){
        res.status(422).json({err:"Title is required."});
        return;
    }
    if(!content){
        res.status(422).json({err:"Content is required."});
        return;
    }
    const post = new Post({title,content});

    post.save((err,post)=>{
        if(err){
            res.status(500).json({err});
        }
        res.status(200).json({post});
    });
}
export function updatePost(req, res,next){
    const id = req.params.id;
    //metodo de mongoose
    Post.findByIdAndUpdate(id,req.body,(err,post)=>{
        if(err){
            res.status(500).json({err});
        }
        res.status(200).json({post});
    });
}

export function deletePost(req, res, next){
   const id = req.params.id;
  Post.findByIdAndRemove(id, req.body, (err, post) => {      
    if(err){        
        res.status(500).json({err});
    }
       res.status(200).json({post});
    });
}
