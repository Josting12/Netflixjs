import Head from "next/head";
import React,{FC, PropsWithChildren} from "react";
import { Nav } from "../common/Nav";

interface Tprops{
    title: string;
    description?: string;
}

export const ApplicationWrapper: FC<PropsWithChildren <Tprops>> = ({
    title,
    description,
    children,
}) => {
  const displayTitle = `${title} | Josting Movies`;
  
    return (
    <div className="bg-black min-h-screen flex flex-col">
        <Head>
            <title>{title} | Netflix</title>
            {description && <meta name="description" content={description} />}
            <link rel="icon" href="/images/logo4.png" />
        </Head>
        <header className="text-black bg-white h-20">
            <Nav />
        </header>
      
        <main className="grow flex flex-col text-white">{children}</main>
        <footer className="flex p-6 h-20 text-white bg-black items-center justify-center">
        <a
          href="https://vercel.com/?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className="">Josting.ramos@utp.ac.pa</span>
        </a>
      </footer>
    </div>
    );
}