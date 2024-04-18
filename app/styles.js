import styled from "styled-components";

export const RedPop = styled.div`
  @media (min-width: 1400px) {
    width: 200px;
    height: 200px;
    background: url("circle_pink_1.svg") no-repeat center center;
    position: absolute;
    background-size: contain;
    top: 40%;
    left: 60%;
    z-index: 2;
  }
`;

export const RedPop2 = styled(RedPop)`
  @media (min-width: 1400px) {
    top: 75%;
    left: 5%;
  }
`;

export const YellowPop1 = styled(RedPop)`
  @media (min-width: 1400px) {
    width: 100px;
    height: 100px;
    background: url("circle_yellow_1.svg") no-repeat center center;
    top: 2%;
    left: 2%;
  }
`;

export const YellowPop2 = styled(RedPop)`
  @media (min-width: 1400px) {
    width: 80px;
    height: 80px;
    background: url("circle_yellow_2.svg") no-repeat center center;
    position: absolute;
    background-size: contain;
    top: 38%;
    left: 61%;
    z-index: 3;
  }
`;

export const YellowPop3 = styled(YellowPop1)`
  @media (min-width: 1400px) {
    top: 85%;
    left: 92%;
  }
`;

export const GreenPop = styled.div`
  @media (min-width: 1400px) {
    width: 100px;
    height: 100px;
    background: url("circle_green_1.svg") no-repeat center center;
    position: absolute;
    background-size: contain;
    top: 81%;
    left: 80%;
    z-index: 2;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 20px;
  background-color: white;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 50%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  width: 50%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #ffa500;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 50%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  background: url("map.svg") no-repeat center center;
  background-size: cover;
  overflow: visible;

  @media (min-width: 768px) {
    width: 40%;
    height: 600px;
    right: -10%;
    background-size: contain;
  }
`;

export const SocialIconsContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  height: 5vh;
  background-color: #f0edec;
  padding: 20px;

  @media (min-width: 768px) {
    padding-left: 300px;
    justify-content: start;
    height: 15vh;
  }
`;

export const SocialIcon = styled.a`
  margin: 0 5px;
`;

export const IconImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const FeedbackLink = styled.div`
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
