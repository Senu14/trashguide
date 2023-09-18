import Header from "./Components/Partials/Header/Header";
import Footer from "./Components/Partials/Footer/Footer";
import AppRouter from "./Components/App/AppRouter/AppRouter";


function App() {
  return (
    <div className="App">
        <Header />  
        <AppRouter />
        <Footer />  
    </div>
  );
}

export default App;
