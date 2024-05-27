import React from 'react'

export const FormValidation = (email,password) => {

  const emailMessage =/\S+@\S+\.\S+/.test(email)
  const passwordMessage=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
  if(!emailMessage) return "Email is not a valid"
  if(!passwordMessage) return "Password is not a valid"
  return null

}
