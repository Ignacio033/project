// Login-test.js
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import CardFeature from '../../app/stateless/card-feature/card-feature.component';

// describe what we are testing
describe('Card Feature Component', () => {

// Updated test case with a Link to a different address
    it('should render correctly', () => {
        expect(shallow(<CardFeature/>).find('[component="card-feature"]').exists()).toBe(true);
        expect(shallow(<CardFeature/>).find('.card-image').is('Link')).toBe(true);
    });

// make our assertion and what we expect to happen
    it('should render correctly based on direction', () => {
        expect(shallow(<CardFeature/>).find('.feature-container').hasClass('flex-row')).toBe(false);
        expect(shallow(<CardFeature direction="vertical"/>).find('.feature-container').hasClass('flex-row')).toBe(false);
        expect(shallow(<CardFeature direction="horizontal"/>).find('.feature-container').hasClass('flex-row')).toBe(true);
    });

// make our assertion and what we expect to happen
    it('should render correctly based on title', () => {
        expect(shallow(<CardFeature />).find('.card-title').exists()).toBe(false);
        expect(shallow(<CardFeature title="hello" />).find('.card-title').exists()).toBe(true);
        expect(shallow(<CardFeature title="hello" />).find('.card-title').props().children).toBe("hello");
    });

// make our assertion and what we expect to happen
    it('should render correctly based on text', () => {
        expect(shallow(<CardFeature />).find('.card-title-text').exists()).toBe(false);
        expect(shallow(<CardFeature text="hello" />).find('.card-title-text').exists()).toBe(true);
        expect(shallow(<CardFeature text="hello" />).find('.card-title-text').props().children).toBe("hello");
    });

// make our assertion and what we expect to happen
    it('should render correctly based on link', () => {
        expect(shallow(<CardFeature />).find('.card-image').props().to).toBe("#");
        expect(shallow(<CardFeature title="hello"/>).find('.card-title').props().to).toBe("#");
        expect(shallow(<CardFeature link="google.com" />).find('.card-image').props().to).toBe("google.com");
    });

// make our assertion and what we expect to happen
    it('should render correctly based on large', () => {
        expect(shallow(<CardFeature />).find('.card-image').props().className.includes('card-image-large')).toBe(false);
        expect(shallow(<CardFeature large={true}/>).find('.card-image').props().className.includes('card-image-large')).toBe(true);
    });

// make our assertion and what we expect to happen
    it('should render correctly based on image', () => {
        expect(shallow(<CardFeature />).find('.card-image').props().className.includes('card-image-large')).toBe(false);
        expect(shallow(<CardFeature image="hello"/>).find('.card-image').props().style.backgroundImage.includes(`url('hello')`)).toBe(true);
    });

});