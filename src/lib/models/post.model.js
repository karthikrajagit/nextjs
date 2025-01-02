import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String,
      required: true,
    },
    likes: {
      type: [{ type: String, ref: 'User' }],
      default: [],
    },
    comments: {
      type: [
        {
          comment: String,
          name: String,
          username: String,
          profileImg: String,
          createdAt: { type: Date, default: Date.now },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;