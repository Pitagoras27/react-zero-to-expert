import PropTypes from 'prop-types';

const FirstComponent = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
}

FirstComponent.defaultProps = {
  title: 'Default title'
}

export default FirstComponent;