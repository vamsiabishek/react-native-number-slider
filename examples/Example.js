import React, {useState} from 'react'
import NumberSlider from 'react-native-number-slider'

export default () => {
  const [value, setValue] = useState(1)
  onValueChange = (value) => {
    setValue(value)
  }
  return (
    <NumberSlider 
      onValueChange={onValueChange} 
      value={value} 
      width={300}
      displayValues= {[1, 2, 3, 4, 5]}
      fontSize={15}
      containerBackground='#f1f2f6'
      selectedBackground='#FA8072'
    />
  )
}