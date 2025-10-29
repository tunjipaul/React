import { useState } from "react";
import "./NameTag.css";

function NameTag() {
  const [name, setName] = useState("Busayo");
  const [title, setTitle] = useState("Web3 Researcher");
  const [company, setCompany] = useState("Amazon");
  function handleName(e) {
    const nameInput = e.target.value;
    setName(nameInput);
  }
  function handleTitle(e) {
    const titleInput = e.target.value;
    setTitle(titleInput);
  }
  function handleCompany(e) {
    const companyInput = e.target.value;
    setCompany(companyInput);
  }

  return (
    <div className="nameTagGenerator">
   
      <div className="inputGroup">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={handleName}
          placeholder="enter your name"
        />
        <label htmlFor="">Title:</label>
        <input
          type="text"
          value={title}
          onChange={handleTitle}
          placeholder="what's your job description"
        />
        <label htmlFor="">Company:</label>
        <input
          type="text"
          value={company}
          onChange={handleCompany}
          placeholder="Describe your Company..."
        />
      </div>
      <div className="nameTagOutput">
        <h4>Generated Form Output</h4>
        <p>Name: <span>{name}</span></p>
        <p>Title: <span>{title}</span></p>
        <p>Company: <span>{company}</span></p>
      </div>
    </div>
  );
}

export default NameTag;
