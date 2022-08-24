import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {prettyDOM, fireEvent} from '@testing-library/dom';
import RenderData from '../components/RenderData'; 
import LoginServices from '../services/Login';

describe('<RenderData />', () => {

  let component;
  let data = [
    '1',
    {
      author: 'Hernancito',
      likes: 9001,
      title: 'El mismosimo',
      url: 'www.google.com',
      _id: 23232323232
    },
  ];

  let mockHandler = jest.fn();
  let mockHandlerLikes = jest.fn();

  LoginServices.updateBlog = jest.fn().mockImplementation(() => {
    return Promise.resolve({"sucess": true});
  })
  

  beforeEach(() => {
    component = render(<RenderData data={data} handleLikes={mockHandlerLikes} />);
  });

  test('..renders title and author properly', () => {
    const title = component.container.querySelector('#title');
    const author = component.container.querySelector('#author');
    expect(title).toHaveTextContent(data[1].title);
    expect(author).toHaveTextContent(data[1].author);

  }),
  test('..checks that url and likes are shown when button show details is clicked', () => {
    const button = screen.getByText('Like');
    const url = component.container.querySelector('#url');
    const likes = component.container.querySelector('#likes');
    fireEvent.click(button);

    expect(url).toHaveTextContent(data[1].url);
    expect(likes).toHaveTextContent(data[1].likes);
    expect(mockHandlerLikes.mock.calls).toHaveLength(1);
  }),
  test('..checks if like like button is pressed twice, component receives two event handlers', () => {
    const button = screen.getByText('Like');
    fireEvent.click(button);
    fireEvent.click(button);

    expect(mockHandlerLikes.mock.calls).toHaveLength(2);
  })
})
