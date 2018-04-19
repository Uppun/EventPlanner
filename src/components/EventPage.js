import React from 'react';
import DatePicker from 'react-datepicker'
import moment from 'moment';
import 'moment-timezone';
import {Container} from 'flux/utils';
import EventActions from '../actions/EventActions'
import EventStore from '../stores/EventStore'

import 'react-datepicker/dist/react-datepicker.css';
import '../css/main.css'

moment.locale('en');
moment.updateLocale('en', {
    calendar: {
        lastDay: '[Yesterday at] LT',
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        lastWeek: '[last] dddd [at] LT',
        nextWeek: 'dddd [at] LT',
        sameElse: 'MMMM Do [at] LT'
    }
});

class EventPage extends React.Component {
    constructor () {
        super()
        this.state = {
            selectedDate: moment(),
            events: [],
        };

        this.handleChange =  this.handleChange.bind(this);
    }
    
    name = '';
    timezone = '';

    static getStores() {
        return [EventStore];
    }
    
    static calculateState(prevState) {
        const events = EventStore.getState();
        return {events, selectedDate: moment()};
    }

    handleChange(date) {
        this.setState({
            selectedDate: date
        });
    }

    handleClick = () => {
        const date = this.state.selectedDate.format('YYYY-MM-DDTHH:mm');
        const convertedDate = moment.tz(date, this.timezone.value);
        EventActions.add(convertedDate, this.name.value);
        this.name.value = '';
    }

    render() {
        return(
            <div>
                <div className='events'>
                    {this.state.events.map((event, index) => { return (
                        <div className='event' key={index}>
                            <div className='eventName'>
                                {event.name ? event.name : ''}
                            </div>
                            <div className='eventDate'>
                                {moment.tz(event.date, moment.tz.guess()).calendar()}
                            </div>
                        </div>
                    )})}
                </div>
                <div className="input">
                    <input type='text' className='name' placeholder="Enter event name" ref={node => {this.name = node;}}/>
                    <DatePicker
                        selected={this.state.selectedDate}
                        onChange={this.handleChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={1}
                        dateFormat="LLL"
                        timeCaption="time"
                        className="date"
                        />
                    <select defaultValue={moment.tz.guess()} className="timezone" ref={node => {this.timezone = node;}}>
                        {moment.tz.names().map((timezone, index) => { return (
                            <option key={index} value={timezone}>{timezone}</option>
                        )})}
                    </select>
                    <button className="submit" onClick={this.handleClick}>Add</button>
                </div>
            </div>
        )
    }
}

export default Container.create(EventPage);