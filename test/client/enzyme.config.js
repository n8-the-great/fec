import Enzyme from 'enzyme';
// import {configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
// import 'jest-enzyme';

// configure({adapter: new Adapter()});