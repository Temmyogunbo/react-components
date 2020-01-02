import React from 'react';
import { storiesOf } from '@storybook/react'

import { Column } from '../components/Column/column';


storiesOf('Column', module).add('with text', () => (
  <Column xs={2} sm={1} md={4} lg={3}><div>Say hello</div></Column>
))