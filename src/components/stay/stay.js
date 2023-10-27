import Image from 'next/image';
import styles from './stay.module.css';
import { zenFont } from '@/utils/fonts';
import Link from 'next/link';


const Stay = ({stay, addToBasket, removeFromBasket}) => {

    return (
      <div className={`${styles.product} `}>
        

        <div className={`${styles.header} ${zenFont.className}`}>

          <h2 className={styles.title}>{stay.title}</h2>
          <div className={styles.price}>Fra {stay.price},-</div>
          <div className={styles.persons}>{stay.numberOfPersons} personer</div>
         
        </div>
      <Image src={stay?.image} alt={stay?.title} width={300} height={300}/>
          

          <div className={styles.footer}>

            <div>

              <button className={zenFont.className}>
                <Link href={`/ophold/${stay._id}`}>læs mere</Link>
              </button>

            </div>

          </div>

        
      </div>
    )
  
}

export default Stay;

