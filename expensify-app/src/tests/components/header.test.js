import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const startLogoutAction = jest.fn();
  const wrapper = shallow(<Header startLogoutAction={startLogoutAction} />);
  wrapper.find('button').simulate('click');
  expect(startLogoutAction).toHaveBeenCalled();
});
