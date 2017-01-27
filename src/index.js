import React , { Component } from 'react';
import Fontawesome from 'react-fontawesome';

import styles from './styles';

export default class Modal extends Component {
  constructor(props){
    super(props);
    
  }


  renderHeader(){
    let styleProps = this.props.headerStyle || {};
    return (
      <div style={{ ...styles.modal.header, ...styleProps }}>
        { (this.props.title) ? <h5 style={ styles.modal.title }>{ this.props.title }</h5> : null} 
        <Fontawesome name="times" onClick={ () => this.props.close() } />
      </div>
    )
  }

  renderBody(){
    let styleProps = this.props.bodyStyle || {};
    return(
      <div style={{ ...styles.modal.body, ...styleProps }}>
        { this.props.children }
      </div>
    )
  }

  renderModal(){
    return(
      <div style={ styles.containerModal }>
          <div style={{ ...styles.modal, ...{ width: this.getModalSize() } }}>
            { this.renderHeader() }
            { this.renderBody() }
          </div>
      </div>
    )
  }

  getModalSize(){
    let size = '20vh';
    switch(this.props.size){
      case 'sm' : 
        size = '50vh';
        break;
      case 'md' : 
        size = '80vh';
        break;
      case 'lg' : 
        size = '120vh';
        break
    }
    return size
  }
  
  render(){
    return (this.props.showing) ? this.renderModal() : null
  }
}