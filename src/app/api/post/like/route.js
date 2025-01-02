import Post from '../../../../lib/models/post.model.js';
import { connect } from '../../../../lib/mongodb/mongoose.js';
import { currentUser } from "@clerk/nextjs/server";

export const PUT = async (req) => {
    const user = await currentUser();
    try {
        await connect();
        const data = await req.json();
        const post = await Post.findById(data.postId);
        if (!post) {
            return new Response("Post not found", {
                status: 404,
            });
        }
        if (post.likes.includes(user.username)) {
            const updatedPost = await Post.findByIdAndUpdate(
                data.postId ,
                { $pull: { likes: user.username } },
                { new: true }
            );
            return new Response(JSON.stringify(updatedPost), {
                status: 200,
            })
        } else {
           const updatedPost = await Post.findByIdAndUpdate(
             data.postId ,
            { $addToSet: { likes: user.username } },
            { new: true }
           )
           return new Response(JSON.stringify(updatedPost), {
            status: 200,
           })
        }
        await post.save();
        return new Response(JSON.stringify(post), {
            status: 200,
        });
    } catch (error) {    
        console.log("Error liking post:", error);
        return new Response("Error liking post", {
            status: 500,
        });
    }
}