import logo from './logo.svg';
import './App.css';
import ProductsList from './ProductsList';
import UsersList from './UsersList';

function App() {
  return (
    <div className="App">
      <h1>Affichage de l'ensemble des produits et utilisateurs enregistrés</h1><br/>
      <ProductsList />
      <UsersList />
    </div>
  );
}

export default App;
