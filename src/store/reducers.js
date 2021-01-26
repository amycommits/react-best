import {combineReducers} from 'redux'

const addInputToFormReducer = (currentForm = {}, info) => {
  // info.type
  // info.payload = {label, name, slug, value}
  if (info.type === 'FORM') {
    currentForm[info.payload.label] = info.payload
  }
 
  return currentForm
}

export default combineReducers({
  form: addInputToFormReducer
})