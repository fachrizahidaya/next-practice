import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <h1>Welcome to My Blog</h1>
        <div>
          <div>
            <Link href="/posts/first-post">
              <h3>First Post</h3>
            </Link>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
