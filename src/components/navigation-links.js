import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.text}</span>
      <span className="navigation-links-text1">{props.text3}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text1: 'Features',
  text4: 'Blog',
  text: 'Home',
  text2: 'Pricing',
  text3: 'Prompts',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text1: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
