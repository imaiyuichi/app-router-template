import Image from 'next/image';

const templatesAbout = () => {
  return (
    <main>
      <p>Aboutページです</p>
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

export default templatesAbout;
