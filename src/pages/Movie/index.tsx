import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ApplicationWrapper } from '../../component/layout/AplicationWrapper'
import {MovieList} from "../../component/MovieList/MovieList"


type Tprops = {
  response: string;
};

const Catalogo: NextPage<Tprops> = () => {
  return (
        <ApplicationWrapper title='Movies'>
          
          <MovieList />

        </ApplicationWrapper>
  );
};

export default Catalogo