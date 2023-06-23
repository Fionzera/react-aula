import { useState } from 'react';
import './Card.css'

const Card = ({text, bgColor}) => {
    const [myState, setMyState] = useState(0);

    const handleClick = () => {
        setMyState(myState + 1)
    }
    return (
        <div className='cardContainer' style={{backgroundColor: bgColor}}>
            <p>{text}</p>
            <button onClick={handleClick}>{myState}</button>
        </div>
    );
}

export default Card;