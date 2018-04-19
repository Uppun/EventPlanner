import ActionTypes from './ActionTypes';
import Dispatcher from '../Dispatcher';

export default {
    add(date, name) {
        name ? 
        Dispatcher.dispatch({
            type: ActionTypes.ADD,
            date,
            name,
        })
        :
        Dispatcher.dispatch({
            type: ActionTypes.ADD,
            date,
        });
    }
}