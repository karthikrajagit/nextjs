import Post from '../../../../lib/models/post.model.js';
import { connect } from '../../../../lib/mongodb/mongoose.js';

export const POST = async (req) => {
    try {
        await connect();
        const data = await req.json();
        const searchTerm = decodeURIComponent(data.searchTerm);
        const searchResult = await Post.find({
            $or: [
                {username: {$regex: searchTerm, $options: 'i'}},
                {name: {$regex: searchTerm, $options: 'i'}},
                {text: {$regex: searchTerm, $options: 'i'}}
            ],
        }).sort({createdAt: -1})
        return new Response(JSON.stringify(searchResult), {status: 200})
    } catch (error) {
        console.log("Error: ", error)
    }
}