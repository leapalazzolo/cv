export const translateId = (id, intl) => {
  return intl.formatMessage({ id: id })
}
export const translateObject = (objectName, keys, intl) => {
  return keys.reduce((json, value, key) => {
    json[value] = translateId(`${objectName}.${value}`, intl)
    return json
  }, {})
}
export const translateObjectList = (objectName, keys, intl, length) => {
  return [...Array(length).keys()].map(i => {
    return keys.reduce((json, value, key) => {
      json[value] = translateId(`${objectName}.${i}.${value}`, intl)
      return json
    }, {})
  })
}
