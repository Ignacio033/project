// import * as Request from 'superagent';
import * as _ from "lodash";

import 'whatwg-fetch';

import * as ACTIONS from '../constants/actions.constants';
import {Dispatch, State, CreateReducer} from './../services/dispatch.service';

class ConfigReducer {
    initialState = {
        error: {
            active: false,
            message: "No message.",
        }
    };

    actions = {
        // [ACTIONS.SET_MENU]    : this.set,
        [ACTIONS.SHOW_ERROR]: this.showError,
        [ACTIONS.HIDE_ERROR]: this.hideError,
    };

    constructor() {
        // this.loadHome();
    }

    set(action, state) {
        let obj = _.extend({}, {}, action);
        delete obj.type;

        return obj;
    }

    showError(action, state) {
        console.log('showError');
        let error = {
            active: true,
            message: action.message,
        };

        setTimeout(() => Dispatch(ACTIONS.HIDE_ERROR), 3000);

        return {...state, error};
    }

    hideError(action, state) {
        console.log('hideError');
        let error = {...state.error, active: false};

        return {...state, error};
    }
}

export default CreateReducer('Config', new ConfigReducer());