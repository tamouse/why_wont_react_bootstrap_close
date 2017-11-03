import React from 'react'
import {MenuItem} from 'react-bootstrap'
import PropTypes from 'prop-types'

/*
 * Cannot make this work within the SplitButton
 */

const MenuItemOne = props => {
  return (
    <MenuItem
        id='menu-item-one-1'
        onClick={props.onClick}
    >
      Menu Item One
    </MenuItem>
  )
}

MenuItemOne.propTypes = {
  onClick: PropTypes.func.isRequired,
}
// MenuItemOne.defaultProps = {}

export default MenuItemOne
