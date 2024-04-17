"use client";
import { useState } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between; // Ensures items are spaced out
  align-items: stretch; // Stretches items to fill the container
  min-height: 80vh; // Takes up 90% of the viewport height
  padding: 20px;
  background-color: white;
`;

const FormContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 50%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  width: 50%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ffa500;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 50%;
`;

const MapContainer = styled.div`
  width: 60%;
  height: 600px; // Adjust based on your content needs
  background: url("map.svg") no-repeat center center;
  background-size: contain;
  position: relative;
  right: -10%; // Allows the map to extend beyond the page limit
  overflow: visible;
`;

const RedPop = styled.div`
  width: 200px;
  height: 200px;
  background: url("circle_pink_1.svg") no-repeat center center;
  position: absolute;
  background-size: contain;
  top: 40%;
  left: 65%;
  z-index: 2;
`;

const RedPop2 = styled(RedPop)`
  top: 75%;
  left: 5%;
`;

const YellowPop1 = styled(RedPop)`
  width: 100px;
  height: 100px;
  background: url("circle_yellow_1.svg") no-repeat center center;
  top: 2%;
  left: 2%;
`;

const YellowPop2 = styled(RedPop)`
  width: 80px;
  height: 80px;
  background: url("circle_yellow_2.svg") no-repeat center center;
  position: absolute;
  background-size: contain;
  top: 38%;
  left: 66%;
  z-index: 3;
`;

const YellowPop3 = styled(YellowPop1)`
  top: 85%;
  left: 92%;
`;

const GreenPop = styled.div`
  width: 100px;
  height: 100px;
  background: url("circle_green_1.svg") no-repeat center center;
  position: absolute;
  background-size: contain;
  top: 80.5%;
  left: 80%;
  z-index: 2;
`;

const SocialIconsContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh; // Fixed to 10% of the viewport height
  background-color: #f0edec;
`;

const SocialIcon = styled.a`
  margin: 0 10px;
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
`;

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const payload = {
      name,
      email,
      message,
    };
    console.log(payload);
  };

  return (
    <main style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <PageContainer>
        <RedPop />
        <RedPop2 />
        <YellowPop1 />
        <YellowPop2 />
        <YellowPop3 />
        <GreenPop />
        <FormContainer>
          <h1>Reach out to us!</h1>
          <Input
            type="text"
            placeholder="Your name*"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            type="email"
            placeholder="Your e-mail*"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextArea
            placeholder="Your message*"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <Button onClick={handleSubmit}>Send message</Button>
        </FormContainer>
        <MapContainer />
      </PageContainer>
      <SocialIconsContainer>
        <SocialIcon href="#" target="_blank">
          <IconImage src="path_to_linkedin_icon.png" alt="LinkedIn" />
        </SocialIcon>
      </SocialIconsContainer>
    </main>
  );
}
