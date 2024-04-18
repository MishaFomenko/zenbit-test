import { NextResponse } from "next/server";

export async function GET(req, res) {
  const url = `http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}`;
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
      return NextResponse.json(responseData, { status: 200 });
    } else {
      return NextResponse.json(
        {
          error: "Failed to fetch feedback list",
        },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Error during fetching feedbacks:", error);
    return NextResponse.json(
      { error: "Error during fetching feedbacks" },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  const url = `http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}`;
  const payload = await req.json();
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
      return NextResponse.json(response, { status: 200 });
    } else {
      return NextResponse.json(
        {
          error: "Failed to submit feedback data",
        },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Error during feedback data submission:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function DELETE(req, res) {
  const currentURL = new URL(req.url);
  const id = currentURL.searchParams.get("id");
  const url = `http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}/${id}`;
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, requestOptions);
    if (response.ok) {
      return NextResponse.json(response, { status: 200 });
    } else {
      return NextResponse.json(
        {
          error: "Failed to delete feedback",
        },
        { status: response.status },
      );
    }
  } catch (error) {
    console.error("Error during deleting a feedback:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
