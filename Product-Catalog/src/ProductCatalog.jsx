import { useState } from "react";
import "./App.css";

function ProductCatalog() {
  const products = [
    { name: "Laptop", price: 450000, inStock: true, category: "Electronics" },
    { name: "Phone", price: 150000, inStock: false, category: "Electronics" },
    { name: "T-Shirt", price: 5000, inStock: true, category: "Clothing" },
    { name: "Jeans", price: 12000, inStock: true, category: "Clothing" },
    { name: "Jollof Rice", price: 1500, inStock: true, category: "Food" },
    { name: "Pizza", price: 4000, inStock: false, category: "Food" },
  ];

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("none");

  const filteredProducts = products
    .filter((p) => filter === "All" || p.category === filter)
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="product-catalog">
      <h1> Product Catalog</h1>

      <div className="filters">
        <div className="category-filter">
          <span>Filter:</span>
          {["All", "Electronics", "Clothing", "Food"].map((cat) => (
            <button
              key={cat}
              className={filter === cat ? "active" : ""}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="sort-filter">
          <span>Sort by Price:</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="none">None</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </div>

      <ul className="product-list">
        {filteredProducts.map((product, index) => (
          <li
            key={index}
            className={product.inStock ? "in-stock" : "out-of-stock"}
          >
            <span>
              {product.name} - ₦{product.price.toLocaleString()}
            </span>
            {product.inStock ? (
              <button className="addCartBtn">Add to Cart</button>
            ) : (
              <span className="label">OUT OF STOCK</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCatalog;
