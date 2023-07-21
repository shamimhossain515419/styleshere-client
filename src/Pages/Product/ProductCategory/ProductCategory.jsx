

import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';
 import axios from 'axios'
import TrendingCard from '../../TrindingProduct/TrendingCard';
const ProductCategory = () => {
     const contacts  = useLoaderData();
     const { data, refetch, isLoading } = useQuery({
          queryKey: ['product'],
          queryFn: () => axios.get('http://localhost:5000/product')
     })
     
     const Product = data?.data;
     console.log(Product);
     console.log(contacts);
     return (
          <div>
               {
                     contacts ?<div> {contacts?.map(item=> <TrendingCard key={item._id} product={item}></TrendingCard>)} </div> : <div> {Product?.map(item=> <TrendingCard key={item._id} product={item}></TrendingCard>)} </div> 
               }
              
          </div>
     );
};

export default ProductCategory;