import React, { ReactNode } from 'react'
import classNames from 'classnames'
import './button.css'

interface buttonProps{
    className?:string;  //问号代表不是必传的意思
    type?:'normal'|'primary'| 'dashed' | 'link' | 'text';
    children?:ReactNode,
    style?:React.CSSProperties
}

const Button = (props:buttonProps) =>{
    const { className,type='normal',children,style } = props
    const cls = classNames({
        'ant-btn':true,
        [`ant-btn-${type}`]:type,
        [className as string]:!!className
    })
    return <button className={cls} style={style}>{children}</button>
}

export default Button