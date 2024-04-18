import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

export const FeedbackItem = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const InfoParagraph = styled.p`
  font-size: 16px;
  color: #333;
`;

export const BoldLabel = styled.span`
  font-weight: bold;
`;

export const DeleteButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #ff7875;
  }
`;

export const FeedbackLink = styled.div`
  width: 130px;
  padding: 10px 15px;
  margin: 10px 20px;
  background-color: #4a90e2;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357abd;
    text-decoration: none;
  }
`;
