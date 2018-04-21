import ActionTypes from './ActionTypes';
import Dispatcher from '../Dispatcher';

export default {
    add(date, timezone, name) {
        name ? 
        Dispatcher.dispatch({
            type: ActionTypes.ADD,
            date,
            timezone,
            name,
        })
        :
        Dispatcher.dispatch({
            type: ActionTypes.ADD,
            date,
            timezone,
        });
    }
}