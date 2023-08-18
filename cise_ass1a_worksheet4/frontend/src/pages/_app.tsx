import "../../styles/globals.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import PopulatedNavBar from "../components/PopulatedNavBar";
import data from "../utils/dummydata.json"
import { useState } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  console.log(data.articles)
  const [ getData, setData ] = useState(data.articles);

  const addNew  = ( save: any ) => {
    let copy = getData
    copy.push(save)
    setData(copy)
    console.log(data);
  }

  return (
    <SessionProvider session={session}>
      <PopulatedNavBar />
      <Component {...pageProps} articles={getData} addNew={addNew}/>
    </SessionProvider>
  );
}

export default MyApp;