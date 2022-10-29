import type, { NextPage } from "next";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ApplicationWrapper } from '../component/layout/AplicationWrapper'

type HomeProps = {
  response: string;
};

const Home: NextPage<HomeProps> = () => {
  return (
        <ApplicationWrapper title='Home'>
          <div className="grow flex justify-center items-center bg-[url('/Images/home-bg.jpg')]">
            <h2 className="text-7xl text-red-600 font-bold ">
              Netflix 
            </h2> 
          </div>
        </ApplicationWrapper>
  );
};

export default Home
