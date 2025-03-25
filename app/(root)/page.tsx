import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/products.actions";

const Homepage = async () => {
  const latestProduts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProduts} title="Newest Arrivals" />
    </>
  );
};

export default Homepage;
