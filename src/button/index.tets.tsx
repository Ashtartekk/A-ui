import React from 'react'
import { render,screen } from '@testing-library/react'
import Button from './index'

test('renders Button',()=>{
    render(<Button>Click me</Button>)
    const linkElement = screen.getByText(/click me/)
    expect(linkElement).toBeInTheDocument()
})