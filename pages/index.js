import Head from 'next/head'
import Image from 'next/image'
import data from "./college.json"
import CollegeCard from "../components/CollegeCard";
import Header from "../components/Header"
export default function Home() {
  console.log(data);
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className=" sm:grid sm:grid-cols-2 w-full">
      {
       data?.map(({id,name,place,away,price,dprice,rating,feedback,img,offer,best,rank,match})=>(
       <CollegeCard
       className=" bg-red"
       key={id}
       id={id}
       name={name}
       place={place}
       away={away}
       price={price}
       dprice={dprice}
       rating={rating}
       feedback={feedback}
       img={img}
       offer={offer}
       best={best}
       rank={rank}
       match={match}
       />

       ))
      } 
      
      </div>
    </div>
  )
}
