// Import css
import 'semantic-ui-css/semantic.min.css';
import './App.css';

// Import components
import Header from '../../components/Header';
import Main from '../../containers/Main';
import Footer from '../../components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
