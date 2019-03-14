import { configure, getStorybook, setAddon } from '@storybook/react';
import createPercyAddon from '@percy-io/percy-storybook';
import inPercy from '@percy-io/in-percy';

import mockdate from 'mockdate';

if (inPercy()) {
  mockdate.set('October 21, 2015 04:19:00');
}

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

configure(loadStories, module);

serializeStories(getStorybook);
