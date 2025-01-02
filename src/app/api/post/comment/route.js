import Post from '../../../../lib/models/post.model.js';
import { connect } from '../../../../lib/mongodb/mongoose.js';
import { currentUser } from '@clerk/nextjs/server';

export const PUT = async (req) => {
    const user = await currentUser();
    try {
        await connect();
        if(!user){
            return new Response("Unauthorized", {
                status: 400
            })
        }
        
        const data = await req.json();
        console.log(data.postId);
        const post = await Post.findById(data.postId);
        if (!post) {
            return new Response("Post not found", {
                status: 404,
            });
        }
        const updatedPost = await Post.findByIdAndUpdate(
            data.postId,
            {
            $addToSet : {
                comments: {
                    comment: data.comment,
                    name: data.name,
                    username: data.username,
                    profileImg: data.profileImg,
                }
            }
        },
        { new: true }
        );
        return new Response(JSON.stringify(updatedPost), {
            status: 200,
        })
    } catch (error) {   
        console.log('Error sending comment:', error);
    }
}