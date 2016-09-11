import React, { Component } from 'react'
import TreeView  from './component/tree-view'

export default class App extends Component {
  state = {
    tree: {
          label: 'Node Label',
          items: [
              {
                label: 'Child Node Label',
                items: [
                    {
                        label: 'Child Node Label',
                        items: [
                            {
                                label: 'Child Node Label',
                                items: []
                            },
                            {
                                label: 'Child Node Label',
                            },
                            {
                                label: 'Leaf Node Label'
                            }
                        ]
                    }
                ]
              },
              {
                label: 'Leaf Node Label'
              }
          ]
      }
  }

  render() {
    let style = {
      tree: {
        maxWidth: '400px',
        margin: 'auto'
      }
    }
    return (
      <div style={style.tree}>
        <TreeView data={this.state.tree} />
      </div>
    )
  }
}
