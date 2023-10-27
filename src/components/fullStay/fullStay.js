import Image from 'next/image'
import styles from './fullStay.module.css'
import { zenFont } from '@/utils/fonts'

const FullStay = ({stay}) => {

    console.log('Stay', stay)

    const render = () => {

        return <div className={styles.fullStay}>

            <div className={styles.header}>
                <div className={styles.headerText}>
                <h1 className={zenFont.className}>{stay.title}</h1>
                </div>
                <Image className={styles.img} src={stay.image} alt={stay.title} width={1000} height={1000}/>
            </div>

            <div className={styles.body}>
                <div className={styles.bodyText}>
                <h2 className={zenFont.className}>Tag væk en weekend, med én du holder af</h2>
                <p className={styles.description}>{stay.description}</p>
                <p className={styles.line}>Med i pakken, er der inkluderet:</p>
                <p className={styles.includes}>{stay.includes} </p>
                <h6 className={zenFont.className}>Pris {stay.price},-</h6>
                <button className={zenFont.className}>Book nu</button>
                </div>
            </div>

        </div>

    }

    return(

        stay._id ? render() : null
        
    )
}

export default FullStay;