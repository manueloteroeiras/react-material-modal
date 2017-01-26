import React , { Component } from 'react';


import styles from './styles';

export default class Modal extends Component {
  constructor(props){
    super(props);
    
  }

  renderModal(){
    return(
      <div style={ styles.containerModal }>
        <div>
          <h5>{ this.props.title }</h5>
        </div>
      </div>
    )
  }
  
  render(){
    (this.props.showing) ? this.renderModal() : null
  }
}