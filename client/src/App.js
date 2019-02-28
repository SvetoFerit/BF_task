import React, { Component } from 'react';
import Categories from './components/Categories/Categories'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Slider from './components/Slider/Slider'
import Footer from './components/Footer'

class App extends Component {

  render() {
    return (
    <div>
      <NavBar siteTitle='Kenaz'/>
      <Banner />
      <Slider />
      <Categories />
      <Banner className="banner2"/>
      <Footer />
    </div>
    )
  }
}

export default App;
