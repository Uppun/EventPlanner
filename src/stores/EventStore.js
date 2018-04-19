import {ReduceStore} from 'flux/utils';
import Dispatcher from '../Dispatcher';
import ActionTypes from '../actions/ActionTypes';

class EventStore extends ReduceStore {
    constructor() {
        super(Dispatcher)
    }

    getInitialState() {
        const events = [];
        return events;
    }

    reduce(state, action) {
        switch(action.type) {
            case ActionTypes.ADD: {
                const {date, name} = action;
                const event = name ? {date, name} : {date};
                const events = [...state, event];
                return events;
            }
            default: {
                return state;
            }
        }
    }
}

export default new EventStore();