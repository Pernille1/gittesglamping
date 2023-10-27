'use client'
import Image from 'next/image';
import styles from './accordians.module.css';
import { useState } from 'react';
import { nanumFont, zenFont } from '@/utils/fonts';


const Accordian = ({body, time, date, title, img}) => {

    const [isActive, setIsActive] = useState(false);

    return <div className={`${styles.accordion} ${isActive ? styles.active : ''}`}>
      <h1 className={`${zenFont.className} ${styles.title}`}>{title}</h1>

      <Image src={img} alt={title} width={300} height={300}/>

     
    <div className={`${styles.footer} ${zenFont.className}`}>
     <h3 className={styles.footerTop}>{date} <br/> Kl. {time} </h3>

      <div className={styles.body}>
        <button className={zenFont.className} onClick={() => setIsActive(!isActive)}>Læs mere</button>
        
        <div className={`${styles.textblock} ${nanumFont.className}`} dangerouslySetInnerHTML={{__html:body}}></div>
      </div>
    </div>

    </div>
};

export default Accordian;