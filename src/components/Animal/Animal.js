import React from 'react'
import './Animal.css'
// import data from '../../data'

export default function Animal(props) {
  return (
    <>
      <div className="animal" style={{ top: props.top, left: props.left }}>
        <img height="100" src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
        <span className="name">{props.name}</span>
        <span>{props.says}</span>
      </div>
    </>
  )
}
//notice how below, you can put the elements youre calling, top, left, etc., instead of calling it props. Which then takes away all the props. |||
// export default function Animal(top, left, name, type, says ) {
//   return (
//     <>
//       <div className="animal" style={{ top:.top, left:left }}>
//         <img height="100" src={`${process.env.PUBLIC_URL}/animals/${type}.svg`} />
//         <span className="name">{name}</span>
//         <span>{says}</span>
//       </div>
//     </>
//   )
// }
