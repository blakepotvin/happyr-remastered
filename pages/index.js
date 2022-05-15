import Head from "next/head";
import Landing from "/components/landing";
import About from "/components/about";
export default function Home() {
  return (
    <main>
      <Head>
        <title>Happyr</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300&family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Landing />
      <About />
      {/* <a href="https://storyset.com/people">People illustrations by Storyset</a> */}
    </main>
  );
}
