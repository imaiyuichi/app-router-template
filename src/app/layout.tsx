// styles
import '@/styles/_destyle.scss';
import '@/styles/_global.scss';
import '@/styles/_utility.scss';

// components
import Footer from '@/components/bases/Footer';
import Header from '@/components/bases/Header';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
