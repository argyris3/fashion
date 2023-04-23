import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import Products from '../components/Products';
import ProductsCard from '../components/ProductsCard';

function Home() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  // console.log(data);
  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
}
export default Home;
