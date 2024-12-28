import Input from "@/components/Input";

export default async function Home() {
  let data = null;
  try {
    const response = await fetch(process.env.URL + '/api/post/all',{
      method: 'POST',
      cache: 'no-cache',
    })
    data = await response.json();
  } catch (error) {
    console.log("Error fetching data in all:", error);
  }
 
  return (
    <div className="ml-2 min-h-screen gap-2">
      <h1 className="text-2xl font-bold mt-2">Home</h1>
      <Input/>
    </div>
  )}