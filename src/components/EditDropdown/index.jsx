import React, {Component} from 'react';
import {
  SplitButton, MenuItem, ButtonGroup
} from 'react-bootstrap'
//import PropTypes from 'prop-types';

//import MenuItemOne from './MenuItemOne'
import ModalTwo from './ModalTwo'

/*
 * The behaviour I was hoping for was that MenuItemOne would close the
 * drop down menu, but it isn't.
 */

class EditDropdown extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      dropdownActive: false,
      showModalTwo: false,
    }

    this.pickClicked = this.pickClicked.bind(this)
    this.clicker = this.clicker.bind(this)
    this.selector = this.selector.bind(this)
  }

  pickClicked(event) {
    console.log("pickClicked: ", event)
  }

  clicker(event) {
    console.log("clicker:", event.target)
  }

  selector(key, event) {
    console.log("selector: ", key, event.target, event.target.id)
    this.setState({dropdownActive: false})
    this.setState({showModalTwo: (event.target.id === 'two-2')})
  }

  render() {
    return (
        <ButtonGroup>
          <SplitButton
              id='pick-button'
              title='Pick Me'
              onClick={this.pickClicked}
              onSelect={this.selector}
              onToggle={(e)=>{
                console.log("onToggle: ", e)
              }}
          >
            {/*<MenuItemOne onClick={this.clicker}/> this does not fire onSelect */}
            <MenuItem id='two-2' key='2' onClick={this.clicker}>Two</MenuItem>
            <MenuItem id='three-3' key='3' onClick={this.clicker}>Three</MenuItem>
          </SplitButton>
          <ModalTwo confirm={this.state.showModalTwo} onComplete={()=>(this.setState({showModalTwo: false}))}/>
        </ButtonGroup>
    );
  }
}

//EditDropdown.propTypes = {};
//EditDropdown.defaultProps = {};

export default EditDropdown;

