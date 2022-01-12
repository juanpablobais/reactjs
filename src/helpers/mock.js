import DieCastPokeball from '../helpers/assets/DieCastPokeball.jpg'
import DieCastSuperball from '../helpers/assets/DieCastSuperball.jpg'
import FiguraArticuladaDragonite from '../helpers/assets/FiguraArticuladaDragonite.jpg'
import FiguraArticuladaVenusaur from '../helpers/assets/FiguraArticuladaVenusaur.jpg'
import FunkoPopBulbasaurSilver from '../helpers/assets/FunkoPopBulbasaurSilver.jpg'
import FunkoPopCharmander from '../helpers/assets/FunkoPopCharmander.jpg'
import FunkoPopSilverPikachu  from '../helpers/assets/FunkoPopSilverPikachu.jpg'
import FunkoPopSquirtle from '../helpers/assets/FunkoPopSquirtle.jpg'

 const productos = [
    { id: 1, img:DieCastPokeball , nombre: 'Pokeball', descripcion: 'Réplica electrónica de una Pokeball.', stock: 22, precio: 30},
    { id: 2, img: DieCastSuperball, nombre: 'Superball', descripcion: 'Réplica electrónica de una Superball', stock: 20, precio: 32 },
    { id: 3, img: FiguraArticuladaDragonite, nombre: 'Figura Articulada Dragonite', descripcion: 'Figura articulada del pokémon Dragonite', stock: 30, precio: 102},
    { id: 4, img: FiguraArticuladaVenusaur, nombre: 'Figura Articulada Venusaur', descripcion: 'Figura articulada del pokémon Venusaur', stock: 10, precio: 102},
    { id: 5, img: FunkoPopBulbasaurSilver, nombre: 'Funko POP Bulbasaur Silver', descripcion: 'Funko POP versión silver de Bulbasaur', stock: 20, precio: 15},
    { id: 6, img: FunkoPopCharmander, nombre: 'Funko POP Charmander', descripcion: 'Funko POP versión normal de Charmander', stock: 30, precio: 10},
    { id: 7, img: FunkoPopSilverPikachu, nombre: 'Funko POP Pikachu Silver', descripcion: 'Funko POP versión silver de Pikachu', stock: 35, precio: 15},
    { id: 8, img: FunkoPopSquirtle, nombre: 'Funko POP Squirtle', descripcion: 'Funko POP versión normal de Squirtle', stock: 12, precio: 10},
  ]

export const getProd= new Promise ((resolve, reject)=>{
   
    let condicion= true
    if(condicion){
        setTimeout(() => {
            resolve(productos);
          }, 2000);
    }
    else{
        reject('error')
    }
})
