import React from 'react';
import { storiesOf } from '@storybook/react'

import { Row } from '../components/Row/row';
import {  Column} from '../components/Column/column';


storiesOf('Row', module).add('with children', () => (
  <Row>
    <Column xs={1} sm={1} md={1} lg={1}>first child</Column>
    <Column xs={2} sm={2} md={2} lg={2}>seccond child</Column>
    <Column xs={3} sm={3} md={3} lg={3}>Third child</Column>
    <Column xs={4} sm={4} md={4} lg={4}>Third child</Column>

  </Row>
))