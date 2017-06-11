import React from 'react'
import { connect } from 'react-redux'
import { userLogin } from '../actions'

let AddTodo = ({ dispatch }) => {
  let uname
  let password

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!uname.value.trim()) {
          return
        }

        dispatch(userLogin(uname.value,password.value))
        uname.value = ''
        password.value = ''
      }}>
        <input ref={node => {
          uname = node
        }} />
        <input ref={node => {
          password = node
        }} type="password"/>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
