import React from 'react';
import Countdown from 'react-countdown';
import Counter from './Counter';
import { formatter } from './helpers/converter';


// Random component
const Completionist = () => <span className="text-danger">Event has Started</span>;

const CountDown = ({ date, time }) => {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <div className="row bg-light text-primary py-2 px-1 text-center" style={{ fontSize: "0.7em" }}>
                    <div className="col-2 text-center">
                        <strong>{days}</strong>
                        <h6>Days</h6>
                    </div>:
                    <div className="col-2 text-center">
                        <strong>{hours}</strong>
                        <h6>Hrs</h6>
                    </div>:
                    <div className="col-2 text-center">
                        <strong>{minutes}</strong>
                        <h6>Mins</h6>
                    </div>:
                    <div className="col-2 text-center">
                        <strong>{seconds}</strong>
                        <h6>Secs</h6>
                    </div>
                </div>
            )





            //  <span>days {days}:hours {hours}:minutes {minutes}:seconds {seconds}</span>;

            // <div>
            //     <div>days {days}</div>:
            //     <div>hours {hours}</div>:
            //     <div>minutes {minutes}</div>:
            //     <div>seconds {seconds}</div>
            // </div>;
        }
    };


    return (

        <Countdown date={new Date(formatter.addTimeToDate(date, time))}
            renderer={renderer}>
            <Completionist />
        </Countdown>

    );

}
export default CountDown;
