import PropTypes from "prop-types";

/**
 * Image component can be used to display Images. This component is connected with Styled component
 *  @param {function} Src : Src is mendatory props to display images.
 */

const Image = ({ className, src, placeholderSrc, alt, ref, ...other }) => (
  <img
    className={className}
    src={process.env.PUBLIC_URL+'/images/'+src} 
    alt={alt}
    ref={ref}
    {...other}
  />
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  placeholderSrc: PropTypes.string,
  className: PropTypes.string
};

export default Image;
