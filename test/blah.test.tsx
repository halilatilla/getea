import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Thing } from '../stories/GetEmptyAvatar.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const svg = document.createElement('svg');
    ReactDOM.render(<Thing />, svg);
    ReactDOM.unmountComponentAtNode(svg);
  });
});
