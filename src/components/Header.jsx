import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header({ text, bgColor, textColor, textSize }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
    fontSize: textSize,
  }

  return (
    <header style={headerStyle}>
      <div className='container'>
        <Link to='/'>
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0, 0 , 0, 0.4)',
  textColor: '#ff6a95',
  textSize: '22px',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
}

export default Header
