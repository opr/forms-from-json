import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import {findDOMNode} from 'react-dom';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {TextField} from '../react/Formality/TextField';

describe('TextField', () => {
  const textField = shallow(<TextField name={'test-field'} placeholder={'placeholder-text'}/>);

  it('makes a text field', () => {
    expect(textField.find('input')).to.have.length(1);//.querySelectorAll('input').length).to.equal(1);
  });

  it('makes a text field with the correct name and placeholder', () => {
    expect(textField.find('input').at(0).props().name).to.equal('test-field');
    expect(textField.find('input').at(0).props().placeholder).to.equal('placeholder-text');
  });
});
