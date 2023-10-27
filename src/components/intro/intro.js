import Image from 'next/image';
import styles from './intro.module.css';
import { nanumFont, zenFont } from '@/utils/fonts';

const Intro = () => {
    return(
        <div className={styles.intro}>
            <div className={styles.content}>
            <div className={styles.introText}>
                <h1 className={zenFont.className}>Kom og prøv <br/> glamping hos Gitte!</h1>
                <p>Vi er stolte af at byde dig velkommen til Gittes Glamping, hvor hjertevarme og omsorg møder naturens skønhed og eventyr. Vores dedikerede team, anført af Gitte selv, er her for at skabe den perfekte ramme om din luksuriøse udendørsoplevelse. Vi stræber efter at skabe minder og fordybelse, uanset om du besøger os som par, familie eller soloeventyrer. Vi tilbyder en bred vifte af aktiviteter og arrangementer, der passer til alle aldre og interesser. Udforsk naturen, slap af ved bålet, del historier med nye venner, eller find indre ro med vores wellnessaktiviteter.</p>
                
            </div>
            
            <Image className={styles.img}
                src={'/gitte.jpg'}
                width={400}
                height={700}
                alt="Gitte"
                />
            </div>
            <button className={`${styles.button} ${zenFont.className}`}>se vores ophold</button>
            
        </div>

    )


}

export default Intro;