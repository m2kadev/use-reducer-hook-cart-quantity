import './App.css';
import Cart from './Cart';
import Products from './Products';
import { ShopProvider } from './ShopContext';

function App() {
  return (
      <ShopProvider>
        <div className="App">
          <h3>useReducer Hook</h3>
          <Products />

          <Cart />
        </div>

      </ShopProvider>
  );
}

export default App;
