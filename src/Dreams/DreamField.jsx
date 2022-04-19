
import React, { useState } from "react";

import Button from "../UI/Button";
import Card from '../UI/Card';
import classes from './DreamField.module.css';
import ErrorNotice from "../UI/ErrorNotice";

const DreamField = (props) => {
    const[enteredDream, setEnteredDream] = useState('');
    const[enteredTime, setEnteredTime] = useState('');
    const [error, setError] = useState();

    const DreamFieldHandler = (event) => {
        event.preventDefault();
        if (enteredDream.trim().length  === 0 || enteredTime.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid Dream :))',
            });
            return;
        }
        if (+enteredTime < 1) {
            setError ({
                title: 'invalid Time',
                message: 'please entere a valid Time for your dreams',
            });
            return;
        }

        props.onAddDream(enteredDream, enteredTime);
        setEnteredDream('');
        setEnteredTime('');

    };

    const dreamChangerHandler = (event) => {
        setEnteredDream(event.target.value);
    };

    const timeChangerHandler = (event) => {
        setEnteredTime(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <ErrorNotice title={error.title} message={error.message} onConfirm={errorHandler} />
            )}
        <Card className={classes.input}>
        <form onSubmit={DreamFieldHandler}>
            <label htmlFor="Your Dream">Your Dream</label>
            <input id="Your Dream" type="text" value={enteredDream} onChange={dreamChangerHandler} />
            <label htmlFor="Time"> When (Years)</label>
            <input id="Time" type="number" value={enteredTime} onChange={timeChangerHandler}/>
            <Button type='submit'> Revive </Button>
        </form>
        </Card>
        </div>
    );
};



export default DreamField;