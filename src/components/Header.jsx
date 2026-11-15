import styled from "@emotion/styled";
import { Container } from "./Container";

const HeaderContainer = styled(Container)`
  display: flex;
  & nav {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <h1>MDB-NEXT</h1>
        <nav>
          <a href="/">Головна</a>
          <a href="/">Вхід</a>
          <a href="/">Реєстрація</a>
        </nav>
      </HeaderContainer>
    </header>
  );
};
