import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios'
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {

    const dispatch = useDispatch()

    const products = useSelector((state) => {
        return state
    })

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch(error => {
            console.log("Error", error)
        })
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    console.log('products: ', products)

    return (

        <div className="ui grid container">
            <ProductComponent />
        </div>

    )
}

export default ProductListing
