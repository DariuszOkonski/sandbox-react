import React from 'react'
import { PropTypes } from 'prop-types';

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn `}>
        { children }
    </button>
  )
}

export default Button