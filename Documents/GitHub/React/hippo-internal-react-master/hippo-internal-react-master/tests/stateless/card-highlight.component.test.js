// Login-test.js
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import CardHighlight from '../../app/stateless/card-highlight/card-highlight.component';

// describe what we are testing
describe('Card Highlight Component', () => {

    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
        expect(shallow(<CardHighlight/>).find('.card-highlight').exists()).toBe(true);
    });

    // make our assertion and what we expect to happen
    it('should render with the correct content', () => {
        expect(shallow(<CardHighlight text="hello"/>).find('.card-highlight').text()).toEqual('hello');
    });
});