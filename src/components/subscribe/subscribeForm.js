import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import styles from './subscribe.module.css';
import { nanumFont, quickFont, zenFont } from '@/utils/fonts';

const SubscribeForm = ({setFormSubmitted, setSubscriberName}) => {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('* Du skal skrive et navn'),
        email: Yup.string().required('* Du skal skrive en email').email('* Skal være en korrekt email'),
        message: Yup.string().required('* Vær venlig at skrive en besked'),
        subject: Yup.string().required('* Vælg venligst et emne'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm(
        {
            resolver: yupResolver(validationSchema),
        }
      );

    const onSubmit = (data) => {

        let dataToSend = {
            'name' : data.name,
            'email' : data.email,
            'message': data.message,
            'subject': data.subject || 'question'
        }

        fetch(`https://glamping.webmcdm.dk/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),

        }).then(res => res.json()).then(result => {

            
            setSubscriberName(result.data.name)
            setFormSubmitted(true);

        });
            
    };


    return (

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>  
                
            <label>
                <p className={`${zenFont.className} ${styles.headline}`}>Navn</p>
                <input {...register('name')} className={`${nanumFont.className} ${errors.name?.message ? styles.formError : ''} `}/>
                {errors.name?.message && <p>{errors.name?.message}</p>}
            </label>

            <label>
                <p className={`${zenFont.className} ${styles.headline}`}>Email</p>
                <input {...register('email')} className={`${nanumFont.className} ${errors.name?.message ? styles.formError : ''} `}/>
                {errors.email?.message && <p>{errors.email?.message}</p>}
            </label>

            <label>
                <p className={`${zenFont.className} ${styles.headline}`}>Hvad drejer henvendelsen sig om?</p>
                <select {...register('subject')} className={`${nanumFont.className} ${errors.name?.message ? styles.formError : ''} `}>
                    <option value="booking">Booking</option>
                    <option value="question">Spørgsmål</option>
                    </select>
            </label>

            <label>
                <p className={`${zenFont.className} ${styles.headline}`}>Besked (Skriv dato’er, hvis det drejer sig om en booking)</p>
                <textarea {...register('message')} className={`${nanumFont.className} ${errors.name?.message ? styles.formError : ''} `}/>
                {errors.message?.message && <p>{errors.message?.message}</p>}
            </label>

            <button className={zenFont.className}>Indsend</button>
                
        </form>
    )
}

export default SubscribeForm;