import React from 'react';

import { Breadcrumb } from '@quilt/breadcrumb';
export const Row = () => {
  return (
    <Breadcrumb separator=">" separatorColour="#FFA500">
      root
      <a>category 4</a>
      <a>category 2</a>
      <div>category 3</div>
      <p>category 4</p>
      <p>category 5</p>
    </Breadcrumb>
  );
};
