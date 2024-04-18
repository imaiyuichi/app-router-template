'use client';
// Library
import useSWR from 'swr';

// components
import Image from 'next/image';
import UiLoading from '@/components/ui/Loading';
import UiError from '@/components/ui/Error';

// apis
import { fetchJson } from '@/libs/apis';
import { API_KEY } from '@/variables';

// types
import { PostType } from '@/libs/types';

const TemplatesIndex = () => {
  const { data, error, isLoading } = useSWR<PostType>(
    API_KEY,
    fetchJson,
  );

  if (isLoading) {
    return <UiLoading />;
  }
  if (error) {
    return <UiError />;
  }
  return (
    <main>
      <h1 className="text-3xl">
        TOPページです
        <br />
        swrを使用してfeachしています
      </h1>
      <div className="m-auto w-[800px]">
        <Image
          src="/images/thumbnail-mv.jpg"
          alt="Vercel Logo"
          width={800}
          height={400}
        />
      </div>
      {data && (
        <ul className="test">
          {data.posts.map((post, index) => (
            <li key={index}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default TemplatesIndex;
