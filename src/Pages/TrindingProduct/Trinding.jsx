import { useQuery } from "@tanstack/react-query";
import Container from "../../Components/Container/Container";
import Title from "../../Components/Title/Tittle";
import './Trending.css'
import axios from "axios";
import TrendingCard from "./TrendingCard";
const Trending = () => {
     const { data, refetch, isLoading } = useQuery({
          queryKey: ['product'],
          queryFn: () => axios.get('https://styleshere-server-site.vercel.app/product')
     })
     
     const Product = data?.data;

     return (
          <div className="  mt-20">
               <Title title={"Trending"} paragraph={"Trends in products can change rapidly, and what might have been trending in 2021 could be outdated by now. To find the most current trending product,"}></Title>


               <Container>

                    <div className=" mt-10">
                         <div className="  grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-5">
                              {
                                   Product?.slice(0,8)?.map(item => <TrendingCard key={item._id} product={item}></TrendingCard>)
                              }
                         </div>
                    </div>


               </Container>
          </div>
     );
};

export default Trending;