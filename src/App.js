import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import LongerPost from './components/blog/LongerPost'
import EdProgramPost from './components/blog/EdProgram'
import HealthProgram from './components/blog/HealthProgram'

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
import ContactScreen from './screens/ContactScreen'
import Finance from './screens/health/Finance'
import ProgressScreen from './screens/health/ProgressScreen'
import NextProgress from './screens/health/NextProgress'
import GalleryScreen from './screens/GalleryScreen'
import Dashboard from './screens/hisms/Dashboard'
import Tafsiri from './screens/quran/Tafsiri'
import SideBar from './screens/hisms/Sidebar'



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
          <Route path='/blogu' component={BlogScreen} />{}
          <Route path='/blog/:id' component={BlogDetailsScreen} />{}
          <Route path='/contact-us' component={ContactScreen} />{}
          <Route path='/gallery' component={GalleryScreen} />{}
          <Route path='/longer-post' component={LongerPost} />{}
          <Route path='/ed-program' component={EdProgramPost} />{}
          <Route path='/health-program' component={HealthProgram} />{}
          <Route path='/education/nursery' component={NurseryScreen} />{}
          <Route path='/education/primary' component={PrimaryScreen} />{}
          <Route path='/education/secondary' component={SecondaryScreen} />{}

          <Route path='/health' component={HealthScreen} exact />{}
          <Route path='/health/finance' component={Finance} />{}
          <Route path='/health/progress' component={ProgressScreen} />{}
          <Route path='/health/next' component={NextProgress} />{}

          
        </Container>
          <Route path='/hisms/home' component={SideBar} />{}
          <Route path='/tafsir-quran' component={Tafsiri} />{}
      </main>
      <Footer />
    </Router>
  );
}

export default App;
