import ProductCard from "./ProductCard";
import './App.css';

function App() {
  return (
    <div className="App">
      <ProductCard
        name="Brown Kaftan for Men"
        price={100000}
        image="https://i.pinimg.com/736x/3f/98/e6/3f98e63be65545744d05541acc67e45e.jpg"
        inStock={true}
      />
       <ProductCard
        name="Green Kaftan for Men"
        price={90000}
        image="https://i.pinimg.com/736x/45/74/cf/4574cfa53a3137c783abc620f05e374f.jpg"
        inStock={true}
      />
       <ProductCard
        name="White Kaftan for Men"
        price={190000}
        image="https://i.pinimg.com/1200x/70/72/1a/70721a3eff8bcc45f6a83197eb2b5c94.jpg"
        inStock={false}
      />
    </div>
    
  );
}

export default App
