import React from 'react'
import {useTimer} from 'react-timer-hook';
import "./CountDown.style.scss";

function MyTimer({expiryTimestamp}: any) {
    const {
        seconds,
        minutes,
        hours,
        days
    } = useTimer({expiryTimestamp, onExpire: () => console.warn('Expired')});

    return (
        <div style={{textAlign: 'center'}}>

            <div className="section__timer">
                <span className="p-3 py-2 timer m-0">{days}</span>:<span className="p-3 py-2 timer">{hours}</span>:<span
                className="p-3 py-2 timer">{minutes}</span>:<span className="p-3 py-2 timer">{seconds}</span>
            </div>
        </div>
    );
}

interface ICountDown {
    timeCustom: number
}

const CountDown: React.FC<ICountDown> = ({timeCustom}) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + timeCustom);
    return (
        <MyTimer expiryTimestamp={time}/>
    )
}

export default CountDown
