import Image from 'next/image';
import FetchTest from '@/components/ui/FetchTest';

const templatesAbout = async () => {
  return (
    <main>
      <h1 className="text-3xl">Aboutページです</h1>
      <div className="m-auto w-[800px]">
        <Image
          src="/images/thumbnail-mv.jpg"
          alt="Vercel Logo"
          width={800}
          height={400}
        />
      </div>
      <FetchTest />
    </main>
  );
};

export default templatesAbout;
