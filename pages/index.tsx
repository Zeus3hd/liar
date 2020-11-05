import Head from "next/head";
import { Wrapper } from "../styles/Home.style";
import NewQuestion from "../components/NewQuestion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrapper>
        <NewQuestion />
      </Wrapper>
    </>
  );
}
