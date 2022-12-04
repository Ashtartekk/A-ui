import React, { ReactNode } from 'react'
import classNames from 'classnames'
import './button.css'

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement>{
    className?:string;  //问号代表不是必传的意思
    size?: 'mini' |'small' | 'medium' | 'large';
    type?:'normal'|'primary'| 'dashed' | 'link' | 'text';
    children?:ReactNode;
    style?:React.CSSProperties;
    onClick?:React.MouseEventHandler<HTMLButtonElement>;
    onBlur?:React.FocusEventHandler<HTMLButtonElement>;
}

const Button = (props:buttonProps) =>{
    const { className,type='normal',size='medium',children,style,onClick,onBlur,...others} = props
    const cls = classNames({
        'ant-btn':true,
        [`ant-btn-${type}`]:type,
        [`ant-btn-${size}`]:size,
        [className as string]:!!className
    })
    return <button className={cls} style={style} onClick={onClick} onBlur={onBlur} {...others}>{children}</button>
}

export default Button