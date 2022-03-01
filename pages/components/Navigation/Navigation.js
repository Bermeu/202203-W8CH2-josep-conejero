import Link from "next/link";
import styled from "styled-components";

const Container = styled.ul`
  width: 100%;
  text-align: center;
  color: #000;
  font-size: 20px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Heading = styled.li`
  font-size: 20px;
  list-style-type: none;
  background-color: lightblue;
  padding: 10px;
`;

const Option = styled.li`
  font-size: 20px;
  list-style-type: none;
  background-color: lightblue;
  padding: 10px;
`;

const Navigation = () => {
  return (
    <nav>
      <Container>
        <Heading>
          <Link href="/">HOME</Link>
        </Heading>
        <Option>
          <Link href="/pokemon">POKEMON</Link>
        </Option>
        <Option>
          <Link href="/pokemon-ssr">POKEMON-SSR</Link>
        </Option>
        <Option>
          <Link href="/pokemon-ssg">POKEMON-SSG</Link>
        </Option>
        <Option>
          <Link href="/pokemon-isr">POKEMON-ISR</Link>
        </Option>
      </Container>
    </nav>
  );
};

export default Navigation;
