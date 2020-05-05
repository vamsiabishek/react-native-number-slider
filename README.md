# react-native-number-slider
Number slider component created in React Native

# Demo
<image src='demo/demo.gif' width='200'/>


## Installation

`$ npm install react-native-number-slider --save`


 width: PropTypes.number,
  displayValues: PropTypes.arrayOf(PropTypes.number),
  value: PropTypes.number,
  fontSize: PropTypes.number,
  containerBackground: PropTypes.string,
  selectedBackground: PropTypes.string,
  onValueChange: PropTypes.func.isRequired,

## How to use

### Common Props

| Prop | Type | Default | Description |
|---|---|---|---|
|**`width`**|Number|300|Width of the component.|
|**`displayValues`**|Array|[1,2,3,4,5]|Array of inputs that needs to be displayed.|
|**`value`**|Number|1|Selected value of the slider. This value will be applied to the Slider and change it's state on every render. Use this prop if you want a [Controlled Component](https://facebook.github.io/react/docs/forms.html#controlled-components).|
|**`onValueChange`**|Function||The method that gives you the value of selected number every time it is changed.|
|**`fontSize`**|Number|15|Font size style property for the display numbers.|
|**`containerBackground`**|String|'#F1F2F6'|The background color of unselected area of the slider.|
|**`selectedBackground`**|String|#FA8072''|The background color of the selected area of the slider.|


## Example

See [Example.js](examples/Example.js) file.

Follow those steps to run the example:

1. Clone the repo `git clone https://github.com/vamsiabishek/react-native-number-slider.git && cd react-native-number-slider/examples`
2. Install dependencies `npm install``
3. Follow [official instructions](https://facebook.github.io/react-native/docs/getting-started.html) to run the example project in a simulator or device.


```js
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
```

## Licence
[MIT](http://opensource.org/licenses/mit-license.html)

