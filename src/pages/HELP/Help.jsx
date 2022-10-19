import React, { useEffect } from 'react'

const Help = () => {
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
        Help
    </div>
  )
}

export default Help