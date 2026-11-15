import { getMovieById } from "@/API/getMovieById";
import { useEffect } from "react";
import { baseImagePath } from "@/service/baseImagePath";
import styled from "@emotion/styled";
import { Header } from "@/components/Header";

export async function getServerSideProps(context) {
  const data = await getMovieById({ id: context.query.film });
  return {
    props: { data },
  };
}

const BackDrop = styled.div`
  min-height: 100vh;
  background-color: gray;
  background-image: url("${(props) => props.imageUrl}");
  background-size: cover;
  /* padding-top: 30px; */
`;
const FilmContainer = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border: 3px solid black;
  padding: 40px;
  background-color: #000000ed;
  border-radius: 40px;
  box-shadow: 0px 0px 20px white;
  & .head {
    display: flex;
    justify-content: space-between;
    & h1 {
      color: white;
      font-size: 80px;
    }
  }
  & .poster {
    width: 300px;
  }
`;

export default function Films({ data }) {
  useEffect(() => {
    console.log(data);
  }, []);
  //poster_path
  return (
    <BackDrop imageUrl={baseImagePath + data.backdrop_path}>
      <Header />
      <FilmContainer>
        <div className="head">
          <h1>{data.title}</h1>
          <div className="poster">
            <img src={baseImagePath + data.poster_path} alt="" />
          </div>
        </div>
      </FilmContainer>
    </BackDrop>
  );
}
