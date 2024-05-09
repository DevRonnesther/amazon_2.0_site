import React, { useState, useEffect } from 'react';
import Currency from "react-currency-formatter";
import { IoStarSharp } from "react-icons/io5";
import prime from "../../assets/download.png" 
import mini_banner from "../../assets/MD_2024_276_Landing_DealsBanner_Deals_1500x150.jpg"

const MAX_RATING = 1;
const MIN_RATING = 5;

function ProductFeed() {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  
  const [hasPrime] = useState(Math.random() < 0.5);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Products</h1>

      <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 '>
        {products
        // .slice(4, 5)
        .map(product => (
            <div key={product.id} className='relative flex flex-col m-5 bg-white x-30 p-10 items-center' >
                <p className='absolute top-2 right-2 text-xs text-gray-400'>{product.category}</p>

                <img src={product.image} width={200} height={100} alt=""  className="object-contain" />
                
                <h4 className='my-3'>{product.title}</h4>

                <div className="flex">
                  {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <IoStarSharp className="h-5 text-yellow-500" />
                  ))}
                </div>

                <p className="text-xs my-2 line-clamp-2">{product.description}</p>

                <div className='mb-5'>
                  <Currency quantity={product.price} currency='GBP' />
                </div>

                {hasPrime && (
                  <div  className="flex items-center space-x-2 -mt-5">
                    <img width={80} src={prime} alt="" />
                    <p className="text-xs text-gray-500">Free Next-day Delivery</p>
                  </div>
                )}

                <button className="mt-auto w-full p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500">Add to Basket</button>
            </div>
        ))
        }

        <img 
        className="md:col-span-full h-[70px] w-full md:h-[200px]" 
        src={mini_banner} alt="" 
        />
        <div className="md:col-span-2">
        {products
        .slice(4, 5)
        .map(product => (
            <div key={product.id} className='relative flex flex-col m-5 bg-white x-30 p-10 items-center' >
                <p className='absolute top-2 right-2 text-xs text-gray-400'>{product.category}</p>

                <img src={product.image} width={200} height={100} alt=""  className="object-contain" />
                
                <h4 className='my-3'>{product.title}</h4>

                <div className="flex">
                  {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <IoStarSharp className="h-5 text-yellow-500" />
                  ))}
                </div>

                <p className="text-xs my-2 line-clamp-2">{product.description}</p>

                <div className='mb-5'>
                  <Currency quantity={product.price} currency='GBP' />
                </div>

                {hasPrime && (
                  <div  className="flex items-center space-x-2 -mt-5">
                    <img width={80} src={prime} alt="" />
                    <p className="text-xs text-gray-500">Free Next-day Delivery</p>
                  </div>
                )}

                <button className="mt-auto w-full p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500">Add to Basket</button>
            </div>
        ))
        }

        </div>
        {products
        .slice(5, products.length)
        .map(product => (
            <div key={product.id} className='relative flex flex-col m-5 bg-white x-30 p-10 items-center' >
                <p className='absolute top-2 right-2 text-xs text-gray-400'>{product.category}</p>

                <img src={product.image} width={200} height={100} alt=""  className="object-contain" />
                
                <h4 className='my-3'>{product.title}</h4>

                <div className="flex">
                  {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <IoStarSharp className="h-5 text-yellow-500" />
                  ))}
                </div>

                <p className="text-xs my-2 line-clamp-2">{product.description}</p>

                <div className='mb-5'>
                  <Currency quantity={product.price} currency='GBP' />
                </div>

                {hasPrime && (
                  <div  className="flex items-center space-x-2 -mt-5">
                    <img width={80} src={prime} alt="" />
                    <p className="text-xs text-gray-500">Free Next-day Delivery</p>
                  </div>
                )}

                <button className="mt-auto w-full p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500">Add to Basket</button>
            </div>
        ))
        
      }
      </div>
    </div>
  );
}

export default ProductFeed;
// git remote add origin https://github.com/DevRonnesther/amazon_2.0_site.git
