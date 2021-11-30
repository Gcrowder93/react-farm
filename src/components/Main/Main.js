import React from 'react'
import './Main.css'
import background from '../../background.png'
import { animals } from '../../data'
import Animal from '../Animal/Animal'

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((animal) => {
        return (
          <Animal
            key={animal.type}
            {...animal}
            // name={animal.name}
            // type={animal.type}
            // says={animal.says}
            // top={animal.top}
            // left={animal.left}
          />
        )
      })}
    </main>
  )
}
