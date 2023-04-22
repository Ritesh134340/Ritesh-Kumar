import styled from "styled-components";

export const HomeWrapper = styled.div`
  background: linear-gradient(90deg, #3f2b96 0%, #a8c0ff 100%);
  box-sizing: border-box;
  height: 100vh;
  margin: auto;
  padding-top: 50px;

  .home-heading {
    text-align: center;
    color: white;
    user-select: none;
  }

  .home-main {
    display: flex;
    margin-top: 100px;
    gap: 80px;
    align-items: center;
    justify-content: center;
    user-select: none;
  }

  .add-btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .add-data {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #19376D;
    font-size: 15px;
    border-radius: 5px;
    border: none;
    outline: none;
  }
`;
