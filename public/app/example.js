const value = Maybe.of(10)
    .map(value => value + 10)
    .map(value => value + 30)
    .getOrElse(0)
alert(value)

const textToArray = textM => textM.map(text => Array.from(text))
const arrayToText = arrayM => arrayM.map(array => array.join(''))

const transform = pipe(textToArray, arrayToText)
const result = transform(Maybe.of('Example'))
alert(result.getOrElse(''))