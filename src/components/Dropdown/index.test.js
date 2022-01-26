import { shallow } from 'enzyme';
import Dropdown from './index';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
const { configure } = require("enzyme");
configure({ adapter: new Adapter() });


const props = {
    options: [
      {
        label: "Filter By Size",
        value: ""
      },
      {
        label: "XS",
        value: "XS"
      }
    ],
    selected: "S"
  };
  
  describe("Dropdown Component", () => {
    test("should render correctly", () => {
      const selectbox = shallow(<Dropdown {...props} />);
      expect(selectbox).toMatchSnapshot();
    });
  
    test("should call onChange", () => {
      const selectbox = shallow(<Dropdown {...props} />);
      const event = {
        target: { value: "X" }
      };
      selectbox.find("select").simulate("change", event);
      expect(selectbox.state().value).toBe("X");
    });
  });