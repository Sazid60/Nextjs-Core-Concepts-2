
import Meals from '@/components/Meals';
import React from 'react';

const MealsPage = () => {
    return (
        <div className='p-12'>
            <h1 className='text-4xl font bold'>Choose Your Meals</h1>
            <p>Chose Your Meals By Searching</p>
            <Meals />
        </div>
    );
};

export default MealsPage;