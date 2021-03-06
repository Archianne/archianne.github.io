import { lazy, Suspense } from "react";
import styled from "styled-components";
const Content = lazy(() => import("../__Router"));

const Main = () => {
  return (
    <StyledMain>
      <Suspense fallback={<div>Loading</div>}>
        <Content />
      </Suspense>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.main`
  height: 80vh;
  width: 100%;
  margin-top: 25px;

  @media (max-width: 768px) {
    width: 100vw;
    }
`;
