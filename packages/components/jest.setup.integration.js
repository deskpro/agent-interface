require("jest-dom/extend-expect");
require("react-testing-library/cleanup-after-each");
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

enzyme.configure({ adapter: new Adapter() });
