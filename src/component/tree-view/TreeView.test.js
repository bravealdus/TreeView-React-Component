import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import TreeView from './'

let exampleTree = {
  label: '1 Node Label',
  items: [{
      label: '2 Child Node Label',
      items: [
        {
          label: '3 Child Node Label',
          items: [
              {label: '4 Child Node Label', items: [] },
              {label: '5 Child Node Label'},
              {label: '6 Leaf Node Label'}
            ]
        }
      ]
    },
    { label: '7 Leaf Node Label' }
  ]
}

it('renders an empty object without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TreeView data={{}} />, div)
})

it('renders a tree without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TreeView data={exampleTree} />, div)
})

it('renders only level 1', () => {
  const wrapper = shallow(<TreeView data={exampleTree} />)
  const node1 = <div className="label">1 Node Label</div>
  const node2 = <div className="label">2 Child Node Label</div>
  const node3 = <div className="label">3 Child Node Label</div>
  const node4 = <div className="label">4 Child Node Label</div>
  const node5 = <div className="label">5 Child Node Label</div>
  const node6 = <div className="label">6 Leaf Node Label</div>
  const node7 = <div className="label">7 Leaf Node Label</div>

  expect(wrapper.contains(node1)).toEqual(true)
  expect(wrapper.contains(node7)).toEqual(false)
  expect(wrapper.contains(node3)).toEqual(false)
  expect(wrapper.contains(node4)).toEqual(false)
  expect(wrapper.contains(node5)).toEqual(false)
  expect(wrapper.contains(node6)).toEqual(false)
  expect(wrapper.contains(node7)).toEqual(false)
});
