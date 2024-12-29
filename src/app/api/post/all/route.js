import Post from '../../../../lib/models/post.model.js';
import { connect } from '../../../../lib/mongodb/mongoose.js';

export const POST = async (req) => {
    
    try {
        await connect();
        const feedPost = await Post.find({}).sort({ createdAt: -1 });
        return new Response(JSON.stringify(feedPost), {
            status: 200,
        });
    } catch (error) {
        console.log('Error fetching posts:', error);
        return new Response('Error fetching posts', {
            status: 404,
        });
    }
}