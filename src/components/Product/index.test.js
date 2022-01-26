import { shallow } from 'enzyme';
import Product from './index';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
const { configure } = require("enzyme");
configure({ adapter: new Adapter() });

const props = {
    item: {
      index: 0,
      isSale: true,
      isExclusive: false,
      price: "$18.88",
      productImage: "product-1.jpg",
      productName: "Striped shirt",
      size: ["S", "L", "XL"]
    }
  };
  
  describe("Product Component", () => {
    test("should render correctly", () => {
      const product = shallow(<Product {...props} />);
      expect(product).toMatchSnapshot();
    });
  });
  