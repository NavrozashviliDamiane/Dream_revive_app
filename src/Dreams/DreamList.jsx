import React from "react";

import Card from '../UI/Card';
import classes from './DreamList.module.css'

const DreamList = (props) => {
    return (
        <Card className={classes.dreams}>
            <ul>
                {props.dreams.map((dream) => (
                    <li key={dream.id}>
                        {dream.dream} ({dream.year} years after)
                    </li>
                ))}
            </ul>
        </Card>
    );
};


export default DreamList;