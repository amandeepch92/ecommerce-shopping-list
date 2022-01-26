import PropTypes from "prop-types";
import { exclusive, sale } from "locales/en";
import Image from "components/Image";
import "./style.scss";


/**
 *  Product component can be used to display a Product. This component is connected with Styled component
 *  @param {function} item : Item object contains information individual product information
 */
export default function Product(props) {
  const { item, className } = props;
  return (
    <li className={className}>
      <Image src={item.productImage} alt={item.productName} />
      <div>
        {item.isExclusive && <div className="exclusive-tag">{exclusive} </div>}
        {item.isSale && <div className="sale-tag">{sale} </div>}
        <div className="product-description">
          <div className="product-name">{item.productName}</div>
          <div className="product-price">{item.price}</div>
        </div>
      </div>
    </li>
  );
};

Product.propTypes = {
  item: PropTypes.object,
  className: PropTypes.string
};
