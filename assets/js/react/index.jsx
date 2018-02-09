import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Formality from './Formality/Formality';

const getRenderFunc = app => {
  return () => {
      render(app.component, app.element, app.name);
  }
};

const render = (Component, element, name) => {
    ReactDOM.render(
        <AppContainer name={name}>
            {Component}
        </AppContainer>,
        element
    )
};

let apps = [
    {element: document.getElementById('formality-container'), component: <Formality formConfig={{
            formName: 'testForm',
            formEndpoint: '/testEndpoint',
            formMethod: 'post',
            formAction: '/testAction',
            pages: [
                {
                    name: 'Basic Info',
                    sections: [
                        {
                            name: 'Personal Details',
                            elements: [
                                {
                                    type: 'select',
                                    name: 'title'
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Payment Details',
                    sections: [
                        {
                            name: 'Credit Card',
                            elements: [
                                {
                                    type: 'select',
                                    name: 'title'
                                }
                            ]
                        }
                    ]
                }

            ]
        }}/>, file: './Formality/Formality', name: 'Formality'}
];

for (let a of apps) {
    a.element ? getRenderFunc(a)() : null;
    module.hot ? module.hot.accept(getRenderFunc(a)()) : null;
}