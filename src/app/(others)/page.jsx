import Input from "@/components/Input";
import { CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";

export default async function Home() {
  let data = null;
  try {
    const response = await fetch(process.env.URL + '/api/post/all', {
      method: 'POST',
      cache: 'no-cache',
    });
    const rawtext = await response.text();
    data = JSON.parse(rawtext);
    console.log(data);
  } catch (error) {
    console.log("Error fetching data in all:", error);
  }

  return (
    <div className="container mx-auto max-w-3xl p-4 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Home</h1>
      <Input />
      <div className="mt-8 space-y-6">
        {data && data.map((post) => (
          <div 
            key={post._id} 
            className="border border-gray-300 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105"
          >
            {/* Header: Profile */}
            <div className="flex items-center gap-4 p-4 bg-white">
              <img 
                src={post.profileImg} 
                alt={post.name} 
                className="w-12 h-12 rounded-full object-cover" 
              />
              <h2 className="text-lg font-semibold text-gray-700">{post.name}</h2>
            </div>
            
            {/* Post Content */}
            <p className="p-4 text-gray-600">{post.text}</p>
            
            {/* Post Image */}
            {post.image && (
              <img 
                src={post.image} 
                alt={post.name} 
                className="w-full h-auto object-cover"
              />
            )}
            
            {/* Footer: Actions */}
            <div className="flex items-center justify-between px-4 py-2 bg-white border-t border-gray-200">
              <div className="flex items-center gap-6">
                <CiHeart className="w-8 h-8 text-red-700 cursor-pointer hover:scale-110 transition-transform" />
                <FaRegCommentDots className="w-8 h-8 text-gray-700 cursor-pointer hover:scale-110 transition-transform" />
              </div>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
