import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Heading', module)
  .add('Normal', () => <Heading>Hello </Heading>)
  .add('big', () => <Heading big>Hello </Heading>);
