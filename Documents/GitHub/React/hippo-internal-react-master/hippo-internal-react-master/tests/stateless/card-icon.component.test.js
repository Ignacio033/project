// Login-test.js
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import CardIcon from '../../app/stateless/card-icon/card-icon.component';

// describe what we are testing
describe('Card Icon Component', () => {

    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
        expect(shallow(<CardIcon/>).find('.card-icon').exists()).toBe(true);
    });

      // make our assertion and what we expect to happen
 	it('should render with the correct content', () => {
        expect(shallow(<CardIcon icon="icon"/>).find('i').hasClass('icon')).toEqual(true);
    });

    
     // make our assertion and what we expect to happen
    it('should render with the correct content', () => {
        expect(shallow(<CardIcon text="hello"/>).find('.card-icon-title').text()).toEqual('hello');
    });

});