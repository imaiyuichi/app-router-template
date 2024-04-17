import Image from 'next/image';

const templatesIndex = () => {
  return (
    <main>
      <p>TOPページです</p>
      <div className="m-auto w-[800px]">
        <Image
          src="/images/thumbnail-mv.jpg"
          alt="Vercel Logo"
          width={800}
          height={400}
        />
      </div>
    </main>
  );
};

export default templatesIndex;
