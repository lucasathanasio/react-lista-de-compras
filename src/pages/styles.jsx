import styled from "styled-components";

export const Container = styled.div`
  background: #06c2a1;
  padding: 20px;
  border-radius: 10px;

  input {
    height: 35px;
    margin-top: 30px;
    border-radius: 5px;
    border: none;
    outline: none;
    padding-left: 10px;
  }
`;

export const AddButton = styled.button`
  height: 35px;
  background: #09fbd3;
  color: #0d1314;
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #7eeedb;
    transition: 0.5s;
  }
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  margin-top: 15px;
  padding: 0 0 0 10px;

  p {
    font-weight: bold;
    text-transform: capitalize;
  }
`;

export const TrashButton = styled.button`
  height: 40px;
  background: #fd9292;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    background: #fd7c7c;
    transition: 0.5s;
  }
`;
