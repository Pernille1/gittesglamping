import Image from 'next/image'
import styles from './headers.module.css'
import {zenFont, nanumFont} from '@/utils/fonts'

const Headers = ({subtitle, title, img})=> {
    
    return(
      <div className={styles.header}>

      <div className={styles.headerText}>

        <h1 className={zenFont.className}>{title}</h1>
        <h3 className={zenFont.className}>{subtitle}</h3>
        <button className={zenFont.className}>Book nu</button>

      </div>
      
      <Image className={styles.img}
      src={img}
      width={1000}
      height={1000}
      alt="Front Picture"
     />

     </div>
    )
  } 

  export default Headers