'use client'
import styles from './navigation.module.css';
import {FaXmark}  from 'react-icons/fa6'
import Link from 'next/link';
import { useBasketContext } from '@/context/basket';
import { FaBars, FaShoppingBag } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
import { zenFont } from '@/utils/fonts';

/* 


    Navigation component


*/
const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isBasketOpen, setIsBasketOpen] = useState(false);
    const {basketContext, setBasketContext} = useBasketContext();
 
    return <div className={styles.navigation}>
        
        {/* 
        
            BAR 
        
        */}
        
        <div className={styles.bar}>

            <div className={styles.logo}>
                <Link href="/"><Image src="/logo.png"
                    alt={'Gittes Glamping logo'}
                    width={4989}
                    height={1349}
                    className={styles.image}></Image></Link>
            </div>

            <div className={styles.actions}>
                
                {/* <div onClick={() => { setIsBasketOpen(!isBasketOpen); setIsOpen(false)} }>

                    <BasketCounter></BasketCounter>
                    <FaShoppingBag className={`${styles.bag} ${basketContext && basketContext?.length !== 0 ? styles.active : ''} `}></FaShoppingBag>



                </div> */}

                <div onClick={() => {setIsOpen(!isOpen); setIsBasketOpen(false)}}>

                    <FaBars className={`${styles.bars}`}></FaBars>

                </div>
            </div>
        </div>

        {/* 
        
            Navigation Dropdown
        
        */}

        <div className={`${styles.dropdown} ${zenFont.className} ${isOpen ? styles.open : ''}`} onClick={() => {setIsOpen(false)}}>
            < FaXmark className={styles.close}/>
            <div className={styles.links}>
                <Link href="/ophold">Ophold</Link> 
                <Link href="/aktiviteter">Aktiviteter</Link>
                <Link href="/kontakt">Kontakt</Link>
            </div>
        </div>

        {/* 
        
            Basket Dropdown
        
        */}
       {/*  <div className={`${styles.basketDropdown} ${isBasketOpen ? styles.open : ''}`} onClick={() => {setIsBasketOpen(false)}}>
            <Basket></Basket>
        </div>  */}
   
    </div>
}

export default Navigation;