import { shallow } from 'enzyme';
import Image from './index';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
const { configure } = require("enzyme");
configure({ adapter: new Adapter() });


describe('Image', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Image />);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
  });