import React from 'react';
import moment from 'moment';
import 'moment-timezone';

import '../css/main.css'

const EventSingle = () => {
    const event = window.location.pathname;
    const parts = event.split("&");

    return(
        <div className='registered'>
            {parts.length > 3 ? parts[3] : ''} <br />
            Original Time: {moment.tz(parts[1], parts[2]).calendar()} {parts[2]} <br />
            Your Time: {moment.tz(parts[1], moment.tz.guess()).calendar()} {moment.tz.guess()}
        </div>
    )
}

export default EventSingle;