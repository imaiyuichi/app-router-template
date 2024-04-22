// components
import Image from 'next/image';
import FetchTest from '@/components/ui/FetchTest';
import PartsReadMore from '@/components/parts/ReadMore';

const TemplatesIndex = () => {
  return (
    <main>
      <h1 className="text-3xl">TOPページです</h1>
      <div className="m-auto w-[800px]">
        <Image
          src="/images/thumbnail-mv.jpg"
          alt="Vercel Logo"
          width={800}
          height={400}
        />
      </div>
      <FetchTest />
      <PartsReadMore />
    </main>
  );
};

export default TemplatesIndex;
