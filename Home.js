import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const API_URL = 'https://dummyjson.com/products/category/laptops'; 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setProducts(data.products.slice(0, 4)); // 👈 أول 4 بس
            } catch (err) {
                console.error('Failed to fetch products:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,  // 👈 4 جنب بعض
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // تابلت
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600, // موبايل
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Unbeatable Prices on Top-Tier Laptops.</h1>
                    <p>Discover our selection of cutting-edge technology and find the perfect device for you.</p>
                    <Link to="/products" className="btn">Shop Now</Link>
                </div>
            </section>
            
            <section className="products-section">
                <h2>Featured Laptops</h2>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <ErrorMessage />
                ) : (
                    <Slider {...settings}>
                        {products.map(product => (
                            <div key={product.id}>
                                <ProductCard product={product} addToCart={addToCart} />
                            </div>
                        ))}
                    </Slider>
                )}
            </section>
        </>
    );
};

export default Home;
