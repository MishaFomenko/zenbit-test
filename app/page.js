"use client";
import * as styles from "./styles";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail, setMessage } from "./store/slices/formSlice";

export default function Home() {
  const name = useSelector((state) => state.form.name);
  const email = useSelector((state) => state.form.email);
  const message = useSelector((state) => state.form.message);
  const dispatch = useDispatch();

  async function handleSubmit() {
    const url = `/api`;
    const payload = {
      name,
      email,
      message,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        console.log("Data submitted successfully:", response);
        dispatch(setName(""));
        dispatch(setEmail(""));
        dispatch(setMessage(""));
        return response;
      } else {
        throw new Error("Failed to submit feedback data");
      }
    } catch (error) {
      console.error("Error during feedback data submission:", error);
    }
  }

  return (
    <main style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <styles.PageContainer>
        <styles.RedPop />
        <styles.RedPop2 />
        <styles.YellowPop1 />
        <styles.YellowPop2 />
        <styles.YellowPop3 />
        <styles.GreenPop />
        <styles.FormContainer>
          <h1>Reach out to us!</h1>
          <styles.Input
            type="text"
            placeholder="Your name*"
            required
            value={name}
            onChange={(event) => dispatch(setName(event.target.value))}
          />
          <styles.Input
            type="email"
            placeholder="Your e-mail*"
            required
            value={email}
            onChange={(event) => dispatch(setEmail(event.target.value))}
          />
          <styles.TextArea
            placeholder="Your message*"
            required
            value={message}
            onChange={(event) => dispatch(setMessage(event.target.value))}
          />
          <styles.Button onClick={handleSubmit}>Send message</styles.Button>
        </styles.FormContainer>
        <styles.MapContainer />
      </styles.PageContainer>
      <styles.SocialIconsContainer>
        <styles.SocialIcon href="#" target="_blank">
          <styles.IconImage src="linkedin_icon.svg" alt="LinkedIn" />
        </styles.SocialIcon>
        <styles.SocialIcon href="#" target="_blank">
          <styles.IconImage src="fb_icon.svg" alt="FaceBook" />
        </styles.SocialIcon>
        <styles.SocialIcon href="#" target="_blank">
          <styles.IconImage src="twitter_icon.svg" alt="Twitter" />
        </styles.SocialIcon>
        <styles.SocialIcon href="#" target="_blank">
          <styles.IconImage src="pinterest_icon.svg" alt="Pinterest" />
        </styles.SocialIcon>
        <Link href="/feedbackList">
          <styles.FeedbackLink>View list of feedbacks</styles.FeedbackLink>
        </Link>
      </styles.SocialIconsContainer>
    </main>
  );
}
