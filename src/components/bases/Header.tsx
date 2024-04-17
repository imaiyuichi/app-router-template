import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex bg-slate-300 p-5">
      <h1 className="mr-10">Header</h1>
      <nav>
        <ul className="flex gap-3">
          <li>nav</li>
          <li>
            <Link href="/">TOPへ</Link>
          </li>
          <li>
            <Link href="/about">Aboutへ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
