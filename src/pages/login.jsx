import { Header } from "@/components/Header";
import { StyledForm, StyledInput } from "@/components/Styled.Form";
import { useState, useContext } from "react";
import { loginUserClient } from "@/API/loginUser";
import { useRouter } from "next/router";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassowrd] = useState("");
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await loginUserClient({ login, password });
      window.localStorage.setItem("user", JSON.stringify(user));
      router.replace("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Header />
      <main>
        <StyledForm onSubmit={onSubmit}>
          <h2>Вхід</h2>
          <StyledInput>
            <label htmlFor="login">Логін</label>
            <input
              value={login}
              onChange={(event) => setLogin(event.target.value)}
              id="login"
              type="text"
            />
          </StyledInput>
          <StyledInput>
            <label htmlFor="password">Пароль</label>
            <input
              value={password}
              onChange={(event) => setPassowrd(event.target.value)}
              id="password"
              type="text"
            />
          </StyledInput>
          <button type="submit">Увійти</button>
        </StyledForm>
      </main>
    </>
  );
}
