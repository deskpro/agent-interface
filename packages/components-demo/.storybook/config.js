import { configure, getStorybook, setAddon } from '@storybook/react';
import createPercyAddon from '@percy-io/percy-storybook';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

serializeStories(getStorybook);
