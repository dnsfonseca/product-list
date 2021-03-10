import React , {Component} from 'react'
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native'
import Footer from './src/components/Footer'
import Header from './src/components/Header'
import Pessoa from './src/components/Produto'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      produto:[
        { id: '1',nome: 'Coca-Cola',valor: 5,marca: 'Coca-Cola',quantidade: 25,referencia: '001', desconto: '10%', promocao: 'Leve 3 pague 2'},
        { id: '2',nome: 'Creme Dental',valor: 1.59,marca: 'Colgate',quantidade: 75,referencia: '002', desconto: '5%', promocao: 'Leve 9 pague 8' },
        { id: '3',nome: 'Leite Integral',valor: 3.99,marca: 'Italac',quantidade: 100,referencia: '003', desconto: '15%', promocao: 'Leve 12 pague 10' },
        { id: '4',nome: 'Suco em pó',valor: 0.99,marca: 'Tang',quantidade: 120,referencia: '004', desconto: '5%', promocao: 'Leve 4 pague 3' },
        { id: '5',nome: 'Biscoito',valor: 1.99,marca: 'Mabel',quantidade: 100,referencia: '005', desconto: '25%', promocao: 'Leve 2 pague 1' },
        { id: '6',nome: 'Achocolatado',valor: 5.99,marca: 'Toddy',quantidade: 77,referencia: '006', desconto: '30%', promocao: 'Leve 2 pague 1' },
        { id: '7',nome: 'Achocolatado',valor: 6.99,marca: 'Nescau',quantidade: 52,referencia: '007', desconto: '30%', promocao: 'Leve 2 pague 1' },
      ]
    }
  }
  render(){
    return(
      <>
      <Header />
    
      <View style={styles.container}>
       <Text style={styles.titulo}>Lista de Produtos</Text>
        <View>
          
          <FlatList 
            data={this.state.produto}
            keyExtractor={(item)=> item.id}
            renderItem={({item})=> 
              <Pessoa 
                nome={item.nome}  
                valor={item.valor}  
                marca={item.marca}  
                quantidade={item.quantidade}  
                desconto={item.desconto}
                promocao={item.promocao}  
                referencia={item.referencia}  
                
              />}
              showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    
      <Footer />
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  titulo:{
    fontSize: 30,
    color: '#1DA1F2',
    fontWeight: 'bold',
    margin: 5
  }

})

export default App