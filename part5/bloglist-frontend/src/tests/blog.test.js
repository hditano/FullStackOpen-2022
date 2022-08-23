import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import RenderData from '../components/RenderData'; 

test('render content', () => {
  const data = {
    data: {
      title: 'Test',
      author: 'Hernan',
      'url' : 'www.google.com',
      'likes': 232,
    }
  }

  render(<RenderData data={data} />);

  const element = screen.getByText(data[0].title);
  expect(element).toBeDefined();

})
