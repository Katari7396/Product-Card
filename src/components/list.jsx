import Card from "./card";
 
const List = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Card key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default List;