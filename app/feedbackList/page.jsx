"use client";
import { useState, useEffect } from "react";

export default function FeedbackList() {
  const [list, setList] = useState([]);

  const fetchFeedbacks = async () => {
    const url = "http://localhost:3001";
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
        setList(responseData);
      } else {
        throw new Error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error during data submission:", error);
    }
  };
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const deleteFeedback = () => {};

  return (
    <>
      <div>
        {list.map((element) => (
          <div key={element.id}>
            <p>Name: {element.name}</p>
            <p>Email: {element.email}</p>
            <p>Message: {element.message}</p>
            <p>Created at: {element.created_at}</p>
            <button onClick={deleteFeedback}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
