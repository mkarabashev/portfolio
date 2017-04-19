import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import AnimatedBg from './AnimatedBg';
import Transition from '../Transition';

let sandbox;

const transitionProps = {
  from: '#fff',
  to: '#000',
  height: '100px'
};

const jsx = (
  <AnimatedBg>
    <h1>Not a transition</h1>
    <Transition eventKey={1} {...transitionProps} />
    <Transition eventKey={2} {...transitionProps} />
  </AnimatedBg>
);

beforeEach(() => {
  sandbox = sinon.sandbox.create();
});

afterEach(() => {
  sandbox.restore();
})

test('<AnimatedBg> findTransitionsNum should return the num of child transitions', () => {
  const wrapper = mount(jsx);

  const testKeyNum = () => {
    const { keyNum, findTransitionsNum } = wrapper.node;
    findTransitionsNum(wrapper.prop('children'));
    expect(keyNum).toEqual(2)
  };

  testKeyNum();
  testKeyNum();
});

test('<AnimatedBg> findTransitionsNum should trigger on componentWillMount', () => {
  const stub = sandbox.stub(AnimatedBg.prototype, 'findTransitionsNum');
  const wrapper = mount(jsx);
  expect(stub.callCount).toEqual(1);
});

test('<AnimatedBg> childrenWithTransition should trigger on componentWillMount', () => {
  const stub = sandbox.stub(AnimatedBg.prototype, 'childrenWithTransition');
  const wrapper = mount(jsx);
  expect(stub.callCount).toEqual(1);
});

test('<AnimatedBg> findTransitionsNum should trigger on componentWillUpdate', () => {
  const stub = sandbox.stub(AnimatedBg.prototype, 'findTransitionsNum');
  const wrapper = mount(jsx);
  wrapper.setState({ backgroundColor: '#aaa' });
  expect(stub.callCount).toEqual(2);
});

test('<AnimatedBg> childrenWithTransition should trigger on componentWillUpdate if needed', () => {
  const stub = sandbox.stub(AnimatedBg.prototype, 'childrenWithTransition');
  const wrapper = mount(jsx);

  const children = wrapper.prop('children');
  wrapper.setProps({
    children: [
      ...children,
      <Transition {...transitionProps} />
    ]
  });

  expect(stub.callCount).toEqual(2);
});

test('<AnimatedBg> transitions should get injected with a handleTransition cb', () => {
  const wrapper = mount(jsx);

  const result = wrapper
    .find(Transition)
    .nodes
    .map(child => typeof child.props.handleTransition);

  const expected = [ 'function', 'function' ];

  expect(result).toEqual(expected);
});

test('<AnimateBg> transitions should get injected with an index eventKey', () => {
  const wrapper = mount(jsx);

  const result = wrapper
    .find(Transition)
    .nodes
    .map(child => child.props.eventKey);

  const expected = [ 0, 1 ];

  expect(result).toEqual(expected);
})

test('<AnimateBg> should inherit the bg color on setup', () => {
  const wrapper = mount(<AnimatedBg />);
  expect(wrapper.state().backgroundColor).toMatch('transparent');
});

test('<AnimatedBg> should rerender only on new bg color', () => {
  const stub = sandbox.stub(AnimatedBg.prototype, 'render');
  stub.returns(null);
  const wrapper = mount(jsx);

  const testRender = (color, expected) => {
    wrapper.setState({ backgroundColor: color });
    expect(stub.callCount).toEqual(expected);
  };

  testRender('#fff', 2);
  testRender('#fff', 2);
  testRender('#000', 3);
});

test('<AnimatedBg> handleTransition should set the bg to the currently active transition', () => {
  const stub = sandbox.stub();

  const Container = Object.assign(
    AnimatedBg,
    {
      keyNum: 2,
      colors: [],
      setState: stub
    }
  );

  const handleTransition = Container.prototype.handleTransition.bind(Container);

  const testHandleTransition = (status1, status2, outcome, count) => {
    handleTransition(0, 'color', status1);
    handleTransition(1, 'color2', status2);

    const expected = {
      backgroundColor: outcome === 1 ? 'color' : 'color2'
    };

    expect(stub.callCount).toEqual(count);
    expect(stub.lastCall.args[0]).toEqual(expected);
  }

  // if no transition has been reached yet, pick the first transition
  testHandleTransition('pre', 'pre', 1, 1);

  // if second transition has not been reached, pick first
  testHandleTransition('post', 'pre', 1, 2);

  // if second transition has been reached pick second
  testHandleTransition('post', 'current', 2, 3);

  // if all transitions have passed, pick last
  testHandleTransition('post', 'post', 2, 4);
});
