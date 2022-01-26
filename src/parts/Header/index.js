import PropTypes from "prop-types";
import { heading } from "locales/en";
import Dropdown from "components/Dropdown";
import { filterSizes } from "constants/index";
import "./style.scss";
/**
 *  Header component can be used to display the List of products.
 *  @param {function} filterProducts : is a callback function, which mutate the productData to be displayed;
 *  @param {string} className :  className is string , which is returned by styled components;
 */

export default function Header(props) {
  const { filterProducts, className } = props;
  return (
    <div className={className}>
      <h2>{heading}</h2>
      <Dropdown
        options={filterSizes}
        onSelect={selected => filterProducts(selected)}
        className="filter"
      />
    </div>
  );
}

Header.propTypes = {
  filterProducts: PropTypes.func.isRequired,
  className: PropTypes.string
};

