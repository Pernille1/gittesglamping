import Header from '../common/header/header';
import { getAllReviews } from '../../services/dataservice';
import { zenFont } from '@/utils/fonts';
import Review from './review';
import styles from './reviews.module.css';
import { useState, useEffect } from 'react';


const Reviews = () => {
    
    const [reviewsData, setReviewsData] = useState([]);

    const getReviews = async () => {
        
        getAllReviews().then(data => setReviewsData(data));
            
    }

    useEffect(() => {

        getReviews();
    
    }, []);



    return <div className={styles.reviews}>

        <div className={styles.headline}>
            <h1 className={zenFont.className}>Vores gæster <br/> udtaler</h1>
        </div>

        <div className={styles.reviewbox}> 
            {reviewsData?.length !== 0 ? reviewsData.map((review, index) => <Review key={index} review={review}></Review>) : null}  
        </div>
        
    </div>

};

export default Reviews;