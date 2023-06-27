import Layout from "@/components/layout";
import Head from "next/head";

export default function FirstPost() {
  return (
    <Layout>
      <div>
        <Head>
          <title>First Post</title>
        </Head>
        <main>
          <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesettingindustry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </p>
        </main>
        <footer></footer>
      </div>
    </Layout>
  );
}
