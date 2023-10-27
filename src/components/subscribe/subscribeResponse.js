
import {zenFont} from '@/utils/fonts';
import styles from './subscribe.module.css';
import Link from 'next/link';


const SubscribeResponseView = ({name}) => {
    return (
        <div className={styles.response }>
            
            <div className={zenFont.className}>

                <h1 className={`${styles.headline}`}> Hej {name},</h1>
                <p>Tak for din besked! <br/> Du hører fra os snarest. </p>

                <button className={zenFont.className}><Link href="/" className={styles.btn}>Tilbage</Link></button>


            </div>

        </div>
    )
}


export default SubscribeResponseView;