import Post from '../../../../lib/models/post.model.js';
import { connect } from '../../../../lib/mongodb/mongoose.js';
import { currentUser } from '@clerk/nextjs/server';

export const POST = async (req) => {
    try {
        const user = await currentUser();
        await connect();
        const data = await req.json();
        const post = await Post.findById(data.postId);
        return new Response(JSON.stringify(post), {
            status: 200,
        });
    } catch (error) {
        console.log('Error fetching post:', error);
        return new Response('Error fetching post', {
            status: 500,
        });
    }
}