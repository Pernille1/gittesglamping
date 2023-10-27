import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { zenFont } from '@/utils/fonts';

const Footer = () => {

    return <div className={styles.footer}>
         
         <div>   

            <div className={styles.social}>
                
                <Link href="/#"><FaFacebookSquare className={styles.icon} /></Link>
                <Link href="/#"><FaInstagramSquare className={styles.icon} /></Link>

            </div>  


            <div className={styles.address}>
            <div className={styles.logo}>
                <Link href="/"><Image src="/logo.png"
                    alt={'Gittes Glamping logo'}
                    width={4989}
                    height={1349}
                    className={styles.image}></Image>
                </Link>
            </div>
             <p className={zenFont.className}> Gittes Glamping</p> 

            </div>

               

            
            
        </div>


    </div>
}

export default Footer;