import { Header } from "@/components/Header";
import { StyledForm, StyledInput } from "@/components/Styled.Form";

export default function Registration() {
  return (
    <>
      <Header />
      <main>
        <StyledForm>
          <h2>Вхід</h2>
          <StyledInput>
            <label htmlFor="login">Логін</label>
            <input id="login" type="text" />
          </StyledInput>
          <StyledInput>
            <label htmlFor="password">Пароль</label>
            <input id="password" type="text" />
          </StyledInput>
          <button type="submit">Увійти</button>
        </StyledForm>
      </main>
    </>
  );
}
