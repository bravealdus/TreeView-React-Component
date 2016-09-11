import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './TreeView.css'

export default class TreeView extends Component {

  state = {
    children: [],
    isOpen: true
  }

  componentWillMount() {
    this.handleToggle = this.handleToggle.bind(this)
    this.randomKey = this.randomKey.bind(this)
    this.bgColor = this.bgColor.bind(this)
  }

  componentDidMount() {
    if(this.props.data.items !== undefined){
      this.setState({children: this.props.data.items})
    }
  }

  handleToggle() {
    this.setState({children: this.state.isOpen ? [] : this.props.data.items})
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    let style = {
      node: {
        backgroundColor: 'rgb('+this.bgColor()+')',
        paddingLeft: 20,
        marginBottom: 1,
        borderRadius: 3
      }
    }

    let children = this.state.children.map((child) => {
     return <TreeView data={child} depth={(this.props.depth||1)+1} key={this.randomKey()} />
    })

    return(
      <div className="tree-node" style={style.node} >
        <div className="label" onClick={this.handleToggle} >
          {this.props.data.label}
        </div>
        <ReactCSSTransitionGroup
          transitionName="opacity-animation"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {children}
        </ReactCSSTransitionGroup>
      </div>
    )
  }

  // ---------------------- HELPER RENDER METHODS ------------------------
  // TODO move to utils file?
  randomKey() {
    let text = ''
    let possible = 'abcdefghijklmnopqrstuvwxyz0123456789'
    for(var i=0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    return text
  }

  bgColor() {
    let number = this.props.depth * 15
    let r, g, b = 0

    if (number < 50) { // green to yellow
      r = Math.floor(255 * (number / 50))
      g = 255
    } else { // yellow to red
      r = 255
      g = Math.floor(255 * ((50-number%50) / 50))
    }
    return `${r},${g},${b}`
  }
  // ----------------------------------------------------------------

}
