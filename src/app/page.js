'use client'
import styles from './page.module.css'
import Headers from '@/components/common/headers/headers'
import Intro from '@/components/intro/intro'
import Reviews from '@/components/reviews/reviews'


export default function Home() {


  
  return (

    <div className={styles.page}>
  
        <Headers title={'Gittes'} subtitle={'Glamping'} img={'/image_00.jpg'} />

        <Intro/>        
        
        <Reviews></Reviews>

    </div>
  )

}
