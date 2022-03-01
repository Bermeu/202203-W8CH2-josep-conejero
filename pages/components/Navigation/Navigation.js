import Link from "next/link";
import styled from "styled-components";

const Container = styled.ul`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: large;
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.li`
  font-size: 20px;
`;

const Band = styled.div`
  padding-bottom: 100px;
`;

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
