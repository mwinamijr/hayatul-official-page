import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import AboutScreen from './screens/AboutScreen'
import ServicesScreen from './screens/ServicesScreen'
import HealthScreen from './screens/HealthScreen'
import BlogScreen from './screens/BlogScreen'
import BlogDetailsScreen from './screens/BlogDetailScreen'
import NurseryScreen from './screens/education/NurseryScreen'
import PrimaryScreen from './screens/education/PrimaryScreen'
import SecondaryScreen from './screens/education/SecondaryScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3 lead">
        <Container>
          <Route path='/' component={HomeScreen} exact /> {}
          <Route path='/login' component={LoginScreen} /> {}
          <Route path='/register' component={RegisterScreen} /> {}
          <Route path='/about' component={AboutScreen} /> {}
          <Route path='/services' component={ServicesScreen} /> {}
          <Route path='/health' component={HealthScreen} />{}
          <Route path='/blog' component={BlogScreen} />{}
          <Route path='/blog/:id' component={BlogDetailsScreen} />{}
          <Route path='/education/nursery' component={NurseryScreen} />{}
          <Route path='/education/primary' component={PrimaryScreen} />{}
          <Route path='/education/secondary' component={SecondaryScreen} />{}
          
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
