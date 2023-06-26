export default async function Placeholder() {
  interface PostsModel {
    id: number;
    userId: number;
    title: string;
    body: string;
  }

  const posts: PostsModel[] = await getData();

  return (
    <div className="">
      <h1>Placeholder</h1>
      {posts.map((post) => (
        <p> {post.title}</p>
      ))}
    </div>
  );
}

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}
