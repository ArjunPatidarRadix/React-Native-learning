import React from 'react';
import renderer from 'react-test-renderer';
import HomeDetail from '../src/screens/HomeDetail';

jest.useFakeTimers()

it('Home Detail', () => {
    const rendered = renderer.create(<HomeDetail />).toJSON();
    expect(rendered).toBeTruthy();
});