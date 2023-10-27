import { zenFont } from '@/utils/fonts'
import styles from './header.module.css'
import Image from 'next/image'
const Header = ({title, img }) => {

    return <div className={styles.header}>

        <div className={styles.headerText}>
            <h1 className={zenFont.className}>{title}</h1>
       </div>
       
        <Image className={styles.img}
            src={img}
            width={1000}
            height={1000}
            alt="Front Picture"/>    
    </div>


}


export default Header
