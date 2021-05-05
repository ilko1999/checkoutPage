import React from 'react'
import Forms from '../components/Forms/Forms'
import Products from '../components/Products/Products'
import '../App.css'

function PageWithData() {
    return (
        <div className="wrapper">
            <Products />
            <Forms />
        </div>
    )
}

export default PageWithData
