import React, { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div style={{
      textAlign: 'center',
      height: '450px',
      marginTop: '200px',
      fontSize: '100px'
  }}>
      Contacts
  </div>
  )
}

export default Contact