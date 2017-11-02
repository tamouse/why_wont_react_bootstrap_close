import React, {Component} from 'react';
import {
  SplitButton, MenuItem, ButtonGroup
} from 'react-bootstrap'
import PropTypes from 'prop-types';

class EditDropdown extends Component {
  render() {
    return (
        <ButtonGroup>
          <SplitButton
              id='pick-button'
              title='Pick Me'
              onSelect={(k,e)=>(e.target.blur())}
          >
            <MenuItem id='one-1' key='1' onClick={ ()=> true }>One</MenuItem>
            <MenuItem id='two-2' key='2' onClick={ ()=> true }>Two</MenuItem>
            <MenuItem id='three-3' key='3' onClick={ ()=> true }>Three</MenuItem>
          </SplitButton>
        </ButtonGroup>
    );
  }
}

EditDropdown.propTypes = {};
EditDropdown.defaultProps = {};

export default EditDropdown;
