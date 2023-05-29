import React, { useEffect, useState } from 'react'
import './Dialog.css'

export function Dialog (props: { children: React.ReactNode }) {
  const { children } = props
  const [visible, setVisible] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 6000)
  }, [])

  return (
        <div className={`dialog__container ${!visible ? 'hidden' : ''}`}>
            <div
              className='dialog__actions'
              onClick={() => { setVisible(false) }}
            >x</div>
            <div className='dialog__content'>
              { children }
            </div>
        </div>
  )
}
