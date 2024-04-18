"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setList } from "../store/slices/listSlice";
import Link from "next/link";
import * as styles from "./styles";

export default function FeedbackList() {
  const list = useSelector((state) => state.list.list);
  const dispatch = useDispatch();

  const deleteFeedback = async (event) => {
    const url = `http://${process.env.BACKEND_IP}/${event.target.id}`;
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        let newList = [...list];
        let cleanList = newList.filter(
          (element) => element.id !== event.target.id,
        );
        dispatch(setList(cleanList));
      } else {
        throw new Error("Failed to delete a feedback");
      }
    } catch (error) {
      console.error("Error during deleting a feedback:", error);
    }
  };

  const fetchFeedbacks = async () => {
    const url = `http://${process.env.BACKEND_IP}`;
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        const responseData = await response.json();
        dispatch(setList(responseData));
      } else {
        throw new Error("Failed to fetch feedbacks list");
      }
    } catch (error) {
      console.error("Error during fetching feedbacks:", error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, [list]);

  return (
    <>
      <Link href="/">{"<< Back to form"}</Link>
      <styles.Container>
        {list.length ? (
          list.map((element) => (
            <styles.FeedbackItem key={element.id}>
              <styles.InfoParagraph>
                <styles.BoldLabel>Name:</styles.BoldLabel> {element.name}
              </styles.InfoParagraph>
              <styles.InfoParagraph>
                <styles.BoldLabel>Email:</styles.BoldLabel> {element.email}
              </styles.InfoParagraph>
              <styles.InfoParagraph>
                <styles.BoldLabel>Message:</styles.BoldLabel> {element.message}
              </styles.InfoParagraph>
              <styles.InfoParagraph>
                <styles.BoldLabel>Created at:</styles.BoldLabel>{" "}
                {element.created_at}
              </styles.InfoParagraph>
              <styles.DeleteButton id={element.id} onClick={deleteFeedback}>
                Delete
              </styles.DeleteButton>
            </styles.FeedbackItem>
          ))
        ) : (
          <div>No feedbacks yet</div>
        )}
      </styles.Container>
    </>
  );
}
