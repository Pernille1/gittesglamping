import { zenFont } from '@/utils/fonts';
import styles from './reviews.module.css';

const Review = ({review}) => {
    return <div className={styles.review}>

        <div className={styles.body} dangerouslySetInnerHTML={{__html : review.description}}></div>

        <div className={`${styles.author} ${styles.sm}`}>
            <h3 className={`${styles.name} ${zenFont.className}`}> {review.name}, {review.age} <br/> Har været på {review.stay} </h3>
            <p>{review.review}</p>
    
        </div>
    </div>
}

export default Review;