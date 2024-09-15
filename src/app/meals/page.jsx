
import Meals from '@/components/Meals';
import React from 'react';
import styles from './styles.module.css'

const MealsPage = () => {
    return (
        <div className='p-12'>
            <h1 className={`text-4xl font-bold ${styles.font_tomato} ${styles.text_large}`}>Choose Your Meals</h1>
            <p className={styles.font_tomato}>Chose Your Meals By Searching</p>
            <Meals />
        </div>
    );
};

export default MealsPage;