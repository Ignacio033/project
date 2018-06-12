import {store} from './../app';
import {Dispatch} from "services/dispatch.service";

import * as ACTIONS from 'constants/actions.constants';
import * as CONFIG from "constants/config.constants";

export const API = {
    loadPageByVanity: (vanityUrl) => {
        return Query(`/pages/vanity-url/${vanityUrl}`);
    },
    loadConfig: (vanityUrl) => {
        return Query(`/config`);
    },
};

const Query = async (url) => {
    return (await fetch(`${CONFIG.API}${url}`).then(res => {
        if (res.ok) {
            return res.json()
                .then(data => data)
                .catch(error => {
                    console.log('catch error', error);
                    Dispatch({type: ACTIONS.SHOW_ERROR, message: `JSON response formatted badly for: ${CONFIG.API}${url}` });
                    return false;
                });
        } else {
            console.log('show error', res);
            Dispatch({type: ACTIONS.SHOW_ERROR, message: `Couldn't load request for: ${CONFIG.API}${url}`});
            return false;
        }
    }));
};