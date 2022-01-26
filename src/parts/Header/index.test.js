import { shallow } from 'enzyme';
import Header from './index';
const { configure } = require("enzyme");
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });


const props = {
    filterProducts: jest.fn()
  };
  
  describe("Header Component", () => {
    test("should render correctly", () => {
      const header = shallow(<Header {...props} />);
      expect(header).toMatchSnapshot();
    });
  });
  