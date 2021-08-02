import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/ui/Header";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  

  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default App;
