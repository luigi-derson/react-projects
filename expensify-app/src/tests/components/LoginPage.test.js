import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should correctly render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const startLoginAction = jest.fn();
  const wrapper = shallow(<LoginPage startLoginAction={startLoginAction} />);
  wrapper.find('button').simulate('click');
  expect(startLoginAction).toHaveBeenCalled();
});
