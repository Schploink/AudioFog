import React from 'react'
import { SoundIndexItem } from './sound-index-item'

const SoundIndex = ({sounds}) => {
  return (
    <div>
      <p>Sounds </p>
      {sounds.map(sound => (
        <SoundIndexItem
          sound={sound}
          key={sound.id}
        />
      ))}
    </div>
  )
}

export default SoundIndex