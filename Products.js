import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const Products = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const API_URL = 'https://dummyjson.com/products/category/laptops'; 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setProducts(data.products);
            } catch (err) {
                console.error('Failed to fetch products:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="products-page-section">
            <h1>All Laptops</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <ErrorMessage />
            ) : (
                <div className="products-container">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;