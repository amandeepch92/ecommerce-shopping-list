import { shallow } from 'enzyme';
import ProductList from './index';
const { configure } = require("enzyme");
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

const props = {
    productData: [
      {
        index: 0,
        isSale: true,
        isExclusive: false,
        price: "$18.88",
        productImage: "product-1.jpg",
        productName: "Striped shirt",
        size: ["S", "L", "XL"]
      },
      {
        index: 1,
        isSale: false,
        isExclusive: false,
        price: "$25.44",
        productImage: "product-2.jpg",
        productName: "Denim shirt",
        size: ["XS", "S"]
      }
    ]
  };
  
  describe("ProductList Component", () => {
    test("should render correctly", () => {
      const productlisting = shallow(<ProductList items={props.productData} />);
      expect(productlisting).toMatchSnapshot();
    });
  });
  