import React, { useEffect, useState } from "react";
import './Dialog.css'

export function Dialog(props: { children: React.ReactNode }) {
    const { children } = props
    const [visible, setVisible] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setVisible(false)
        }, 2000)
    }, [])

    return (
        <div className={`dialog__container ${visible ? 'fadeIn' : 'fadeOut'}`}>
            { children }
        </div>
    )
}