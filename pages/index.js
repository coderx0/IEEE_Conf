import Head from 'next/head'
import HomeMain from '../components/HomeMain'



export default function Home() {
  return (
    <div className='relative'>
      <Head>
        <title>IEEE MAC2023</title>
        <meta name="description" content="1st IEEE-International Conference on Microwave , Antenna and Communication" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <HomeMain/>
    </div>
  )
}
