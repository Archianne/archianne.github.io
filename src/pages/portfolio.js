import { Suspense } from "react";
import styled from "styled-components";
import useFetch from "../components/_Hooks/useFetch";
import Line from "../components/_Styled/line";
import Link from "../components/_Styled/link";

const Portfolio = () => {
  const URL = `https://api.github.com/users/Archianne/repos`;
  const [value] = useFetch(URL);
  const mapValues =
    Array.isArray(value) &&
    value.slice(0, 12).map((item) => {
      return (
        <List key={item.id}>
          <p>{item.name}</p>
          <Line />
          <Link href={item.html_url}>Repository</Link>
          <Line />
          <Link href={`https://archianne.github.io/${item.name}`}>Preview</Link>
        </List>
      );
    });

  return (
    <StyledRepo>
      <Suspense fallback={<div>Loading</div>}>{mapValues}</Suspense>
    </StyledRepo>
  );
};

export default Portfolio;

const StyledRepo = styled.ul`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  flex-basis: auto;
  justify-content: space-around;

  a {
    color: ${(props) => props.theme.fontColor1};
  }
`;

const List = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 150px;
  min-width: 150px;
  width: 25%;
  margin: 5px 10px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.boxBorder};

  @media (max-width: 768px) {
    width: 90vw;
    margin: 5px 0;
  }
`;
