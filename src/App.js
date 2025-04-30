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
    carro: [],
  }

agregarAlCarro = (producto) => {
  const { carro } = this.state
  if (carro.find(x => x.name === producto.name)) {
    const newCarro = carro.map(x => x.name === producto.name
    ?  ({
      ...x,
      cantidad: x.cantidad + 1
      })
      : x)
      return this.setState({carro: newCarro})
  }
  return this.setState({
    carro: this.state.carro.concat({
      ...producto,
      cantidad: 1
    })
  })
}

  render () {

    return (
      <div>
        <Navbar  carro={this.state.carro}/>
        <Layout>
          <Tittle />
        <Productos 
        agregarAlCarro={this.agregarAlCarro}
        productos={this.state.productos}
        />
        </Layout>
      </div>
    )
  }
}

export default App;