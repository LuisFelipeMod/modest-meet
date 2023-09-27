import Image from 'next/image'
import styles from './comingPage.module.css'
import Header  from './header.js'
import ComingMain  from './comingMain.js'


export default function Home() {
  return (
    <>
        <Header></Header>
        <ComingMain></ComingMain>
    </>
  )
}
