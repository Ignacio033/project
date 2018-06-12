// import * as Request from 'superagent';
import * as _ from "lodash";

import 'whatwg-fetch';

import * as ACTIONS from '../constants/actions.constants';
import {Dispatch, State, CreateReducer} from './../services/dispatch.service';

class MenuReducer {
    initialState = {
        visible: false
    };

    actions = {
        // [ACTIONS.SET_MENU]    : this.set,
        [ACTIONS.TOGGLE_MENU]: this.toggleMenu,
    };

    constructor() {
        // this.loadHome();
    }

    set(action, state) {
        let obj = _.extend({}, {}, action);
        delete obj.type;

        return obj;
    }

    toggleMenu(action, state) {
        return {...state, visible: !state.visible};
    }
}

export default CreateReducer('Menu', new MenuReducer());