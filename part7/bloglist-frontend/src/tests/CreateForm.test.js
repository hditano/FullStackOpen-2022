import React from 'react';
import '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import {prettyDOM, fireEvent} from '@testing-library/dom';
import CreateForm from '../components/CreateForm';


describe('<CreateForm />', () => {
 
  let component;
  let data = [
    '1',
    {
      title: 'La saraza',
      author: 'Hernancito',
      url: 'www.google.com',
      likes: 9001
    },
    ];

    let mockHandlerSubmit = jest.fn();

    beforeEach(() => {

    component = render(<CreateForm handleBlog={mockHandlerSubmit}/>);
    })

    test('...checks if CreateBlog handles all the info properly after firing up', () => {
    const submit = component.container.querySelector('form');
    const title = component.container.querySelector('#title')
    const author = component.container.querySelector('#author');
    const url = component.container.querySelector('#url');

    fireEvent.change(title,{
      target: {value: 'My Title'}
    });

    fireEvent.change(author, {
      target: {value: 'My Author'}
    });

    fireEvent.change(url, {
      target: {value: 'My url'}
    });

    fireEvent.submit(form)

    
    expect(mockHandlerSubmit.mock.calls).toHaveLength(1);
    expect(mockHandlerSubmit.mock.calls[0][0]).toStrictEqual({"author": "My Author", "likes": "", "title": "My Title", "url": "My url"});

  })
})
