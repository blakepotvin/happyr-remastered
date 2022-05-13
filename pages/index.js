import Head from "next/head";
import Navigation from "/components/home/navigation";
import Landing from "/components/home/landing";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Happyr</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <Landing />
    </main>
  );
}
