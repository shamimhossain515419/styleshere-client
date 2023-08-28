
import { useLoaderData } from 'react-router-dom';
import CategoryProductCard from './CategoryProductCard';
import Loading from '../../../Components/Loading/Loading';

const ProductCategory = () => {
     const contacts = useLoaderData();


     console.log(contacts);
     return (
          <div className=' my-10'>

               {
                    contacts?.length > 0 ? <>  {
                         contacts && <div className=' grid md:grid-cols-3 gap-5 '> {contacts?.map(item => <CategoryProductCard key={item._id} product={item}></CategoryProductCard>)} </div>
                    }
                    </> : <> <Loading></Loading></>
               }



               <div>

               </div>

          </div>
     );
};

export default ProductCategory;