"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "./store/store";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html>
      <Provider store={store}>
        <Head>
          <title>Zenbit test app</title>
          <meta
            name="description"
            content="Test task for zenbit internship application"
          />
        </Head>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
