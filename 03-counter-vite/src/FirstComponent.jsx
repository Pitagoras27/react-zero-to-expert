import PropTypes from 'prop-types';

const FirstComponent = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <span>{subtitle}</span>
    </>
  )
}

FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

FirstComponent.defaultProps = {
  title: 'Default title',
  subtitle: 'My content subtitle by default'
}

export default FirstComponent;