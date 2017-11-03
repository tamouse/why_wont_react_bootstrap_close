import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Modal, Button} from 'react-bootstrap'
class ModalTwo extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      showModal: false,
    }

    this.confirmed = this.confirmed.bind(this)
    this.cancelled = this.cancelled.bind(this)
  }

  confirmed() {
    this.setState({showModal: false})
    console.log("ModalTwo was confirmed")
    this.props.onComplete( )
  }

  cancelled() {
    this.setState({showModal: false})
    console.log("ModalTwo was cancelled")
    this.props.onComplete()
  }

  componentWillUpdate(nextProps, _nextState, _nextContext) {
    if (nextProps.confirm !== this.props.confirm) {
      this.setState({showModal: nextProps.confirm})
    }
  }

  render() {
    return (
      <Modal show={this.state.showModal}>
        <Modal.Header>
          <Modal.Title>Choose!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Pick one or the other</Modal.Body>
        <Modal.Footer>
          <Button onClick={this.cancelled} bsStyle='default'>Cancel</Button>
          <Button onClick={this.confirmed} bsStyle='success'>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ModalTwo.propTypes = {
  confirm: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
};
//ModalTwo.defaultProps = {};

export default ModalTwo;
