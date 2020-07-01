import React from 'react'
import Typical from 'react-typical'

const steps = [
  'Hey', 2000,
  "I'm Ryan", 2000,
  "I'm a developer", 3000,
  'This is my site', 2000,
  'Take a look', 7000
];

export default class Typing extends React.Component {
  render () {
    return (
      <div>
        <Typical wrapper="span" steps={steps} loop={3} className={'typing'} />
      </div>
    )
  }
}