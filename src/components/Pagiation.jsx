import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const StyledControl = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  gap: 5px;
  & button {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .active {
    background-color: white;
  }
`;

export const Pagination = ({ pagesCount, setPage, page }) => {
  const [buttons, setButtons] = useState([]);
  const [maxPage, setMaxPage] = useState(300);
  useEffect(() => {
    const arr = [];
    console.log(page, pagesCount);
    const maxPage = pagesCount > 300 ? 300 : pagesCount;
    setMaxPage(maxPage);
    if (pagesCount > 10) {
      if (page < 7) {
        for (let i = 1; i < 9; i++) {
          arr.push(i);
        }
        arr.push("...");
        arr.push(maxPage);
      } else if (page > maxPage - 7) {
        arr.push(1);
        arr.push("...");
        arr.push(maxPage - 7);
        arr.push(maxPage - 6);
        arr.push(maxPage - 5);
        arr.push(maxPage - 4);
        arr.push(maxPage - 3);
        arr.push(maxPage - 2);
        arr.push(maxPage - 1);
        arr.push(maxPage);
      } else {
        arr.push(1);
        arr.push("...");
        arr.push(page - 2);
        arr.push(page - 1);
        arr.push(page);
        arr.push(page + 1);
        arr.push(page + 2);
        arr.push(page + 3);
        arr.push("...");
        arr.push(maxPage);
      }
    }

    setButtons(arr);
  }, [pagesCount, page]);

  const onButtonClick = (page) => {
    setPage(page);
  };

  return (
    <StyledControl>
      <button disabled={page === 1} onClick={() => setPage((prev) => prev - 1)}>
        <AiFillCaretLeft />
      </button>
      {buttons.map((item) => (
        <button
          className={item === page ? "active" : ""}
          onClick={item !== "..." ? () => onButtonClick(item) : () => {}}
          key={item === "..." ? Math.random() : item}
        >
          {item}
        </button>
      ))}
      <button
        disabled={page === maxPage}
        onClick={() => setPage((prev) => prev + 1)}
      >
        <AiFillCaretRight />
      </button>
    </StyledControl>
  );
};
