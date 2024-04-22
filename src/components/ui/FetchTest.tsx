'use client';

// Library
import useSWR from 'swr';

// components
import UiLoading from '@/components/ui/Loading';
import UiError from '@/components/ui/Error';

// apis
import { fetchJson } from '@/libs/apis';

// types
import { PostType } from '@/libs/types';

const Test = () => {
  const { data, error, isLoading } = useSWR<PostType>(
    process.env.NEXT_PUBLIC_API_KEY,
    fetchJson,
  );

  if (isLoading) {
    return <UiLoading />;
  }

  if (error) {
    return <UiError />;
  }

  return (
    <div className="test">
      {data && (
        <ul className="test">
          {data.posts.map((post, index) => (
            <li key={index}>
              <h2>
                uiコンポーネントから出力されてます
                {post.title}
              </h2>
              <p>
                uiコンポーネントから出力されてます
                {post.content}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Test;
