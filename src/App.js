import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Tittle from './components/Tittle';

class App extends Component {
  state = {
    productos:[
      {name: 'Camisa', price: 100, img: '/productos/camisa.jpg'},
      {name: 'Pantalon', price: 200, img: '/productos/pantalon.jpg'},
      {name: 'Sueter', price: 300, img: '/productos/sueter.jpg'}
    ],
  }
  render () {
    return (
      <div>
        <Navbar />
        <Layout>
          <Tittle />
        <Productos 
        agregarAlCarro={() => console.log('no sirvo pa nada')}
        productos={this.state.productos}
        />
        </Layout>
      </div>
    )
  }
}

export default App;