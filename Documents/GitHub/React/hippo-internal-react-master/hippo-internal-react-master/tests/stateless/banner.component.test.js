// Login-test.js
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Banner from '../../app/stateless/banner/banner.component';

// describe what we are testing
describe('Banner Component', () => {

// make our assertion and what we expect to happen
    it('should render correctly based on image', () => {
        expect(shallow(<Banner />).find('.banner-image').props().className.includes('banner-image')).toBe(true);
        expect(shallow(<Banner image="hello"/>).find('.banner-image').props().style.backgroundImage.includes(`url('hello')`)).toBe(true);
    });

// make our assertion and what we expect to happen
    it('should render correctly based on title', () => {
        expect(shallow(<Banner />).find('.content-title').exists()).toBe(false);
        expect(shallow(<Banner title="hello" />).find('.content-title').exists()).toBe(true);
        expect(shallow(<Banner title="hello" />).find('.content-title').props().children).toBe("hello");
    });

// make our assertion and what we expect to happen
    it('should render correctly based on text', () => {
        expect(shallow(<Banner />).find('.content-text').exists()).toBe(false);
        expect(shallow(<Banner text="hello" />).find('.content-text').exists()).toBe(true);
        expect(shallow(<Banner text="hello" />).find('.content-text').props().children).toBe("hello");
    });

});