import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';
import styles from  './styles';

describe('(components) Navbar', () => {
  let wrapper;
  const props = {
    className: 'testClass',
    children: 'testChild',
    onClick: Function.prototype
  };

  beforeEach(() => {
    wrapperEmpty = shallow(<Navbar/>);
    wrapperWithProps = shallow(<Navbar {...props}/>);
  });

  it('should contain an empty styled div element when given no props', () => {
    expect(wrapperEmpty.contains(
      <div className={`${styles.navbar}`}/>
    )).to.be.true;
  });

  it('should allow parent component to include its own props', () => {
    const element = wrapperWithProps.find(`.${styles.navbar}`);
    expect(element.exists()).to.be.true;
    expect(element.prop('className')).to.match(new RegExp(props.className));
    expect(element.prop('onClick')).to.equal(props.onClick);
    expect(element.prop('children')).to.equal(props.children);
  });
});
