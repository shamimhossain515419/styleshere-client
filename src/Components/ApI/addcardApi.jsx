import { useContext } from "react";
import { AuthContact } from "../../Route/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const addcardApi = () => {

     const { user } = useContext(AuthContact);

     const { data, refetch, isLoading } = useQuery({
          queryKey: [`${user?.email}`],
          queryFn: () => axios.get(`https://styleshere-server-site.vercel.app/addcard/${user?.email}`)
     })


     const Product = data?.data;
     return [Product, refetch, isLoading]
};

export default addcardApi;