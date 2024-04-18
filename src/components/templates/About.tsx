import Image from 'next/image';
import { getPosts } from '@/libs/apis';

const templatesAbout = async () => {
  const { posts } = await getPosts();

  return (
    <main>
      <h1 className="text-3xl">通常のfeachをしています</h1>
      <div className="m-auto w-[800px]">
        <Image
          src="/images/thumbnail-mv.jpg"
          alt="Vercel Logo"
          width={800}
          height={400}
        />
      </div>
      <ul>
        {posts.map((post: any) => (
          <li key={post.ID}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default templatesAbout;
