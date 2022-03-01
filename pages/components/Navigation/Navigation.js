import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/pokemon">POKEMON</Link>
        </li>
        <li>
          <Link href="/pokemon-ssr">POKEMON-SSR</Link>
        </li>
        <li>
          <Link href="/pokemon-ssg">POKEMON-SSG</Link>
        </li>
        <li>
          <Link href="/pokemon-isr">POKEMON-ISR</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
