import DieCastPokeball from '../helpers/assets/DieCastPokeball.jpg'
import DieCastSuperball from '../helpers/assets/DieCastSuperball.jpg'
import FiguraArticuladaDragonite from '../helpers/assets/FiguraArticuladaDragonite.jpg'
import FiguraArticuladaVenusaur from '../helpers/assets/FiguraArticuladaVenusaur.jpg'
import FunkoPopBulbasaurSilver from '../helpers/assets/FunkoPopBulbasaurSilver.jpg'
import FunkoPopCharmander from '../helpers/assets/FunkoPopCharmander.jpg'
import FunkoPopSilverPikachu  from '../helpers/assets/FunkoPopSilverPikachu.jpg'
import FunkoPopSquirtle from '../helpers/assets/FunkoPopSquirtle.jpg'
import Sobre1 from '../helpers/assets/Sobre1.jpg'
import Sobre2 from '../helpers/assets/Sobre2.jpg'
import Sobre3 from '../helpers/assets/Sobre3.jpg'
import Sobre4 from '../helpers/assets/Sobre4.jpg'

 const products = [
    { id: 1, image: DieCastPokeball , name: 'Pokeball', detail: 'Réplica electrónica de una Pokeball.', category: "Toys", stock: 22, price: 30},
    { id: 2, image: DieCastSuperball, name: 'Superball', detail: 'Réplica electrónica de una Superball', category: "Toys", stock: 20, price: 32 },
    { id: 3, image: FiguraArticuladaDragonite, name: 'Figura Articulada Dragonite', detail: 'Figura articulada del pokémon Dragonite', category: "Toys", stock: 30, price: 102},
    { id: 4, image: FiguraArticuladaVenusaur, name: 'Figura Articulada Venusaur', detail: 'Figura articulada del pokémon Venusaur', category: "Toys", stock: 10, price: 102},
    { id: 5, image: FunkoPopBulbasaurSilver, name: 'Funko POP Bulbasaur Silver', detail: 'Funko POP versión silver de Bulbasaur', category: "Funko", stock: 20, price: 15},
    { id: 6, image: FunkoPopCharmander, name: 'Funko POP Charmander', detail: 'Funko POP versión normal de Charmander', category: "Funko", stock: 30, price: 10},
    { id: 7, image: FunkoPopSilverPikachu, name: 'Funko POP Pikachu Silver', detail: 'Funko POP versión silver de Pikachu', category: "Funko", stock: 35, price: 15},
    { id: 8, image: FunkoPopSquirtle, name: 'Funko POP Squirtle', detail: 'Funko POP versión normal de Squirtle', category: "Funko", stock: 12, price: 10},
    { id: 9, image: Sobre1, name: 'Pokémon TCG: Sun & Moon-Ultra Prism', detail: '¡Mejora tu mazo con la expansión Pokémon TCG: Sun & Moon-Ultra Prism y las nuevas cartas Prism Star que cambiarán tu forma de jugar! Estas cartas Prism Star son tan poderosas que puedes tener solo una de cada una en tu mazo, y para asegurarte de que solo puedes usarlas una vez, van a la Zona Perdida en lugar de a la pila de descarte, ¡nunca más vuelven!', category: "Cards", stock: 20, price: 150},
    { id: 10, image: Sobre2, name: 'Pokémon TCG - SWSH08 - Sword and Shield - Fusion Strike ', detail: 'El camino que se abre en el horizonte revela el potencial infinito de la expansión Espada y Escudo-Golpe Fusión de JCC Pokémon, que da oportunidades a Entrenadores y Pokémon para que alcancen nuevas metas. La expansión más reciente introduce el tercer y último estilo de combate: Golpe Fusión. El estilo Golpe Fusión se une a los estilos Golpe Fluido y Golpe Brusco, y da prioridad al trabajo en equipo y a la capacidad de adaptación para asestar poderosos ataques. ¡Explora el poder del trabajo en equipo con Espada y Escudo-Golpe Fusión de JCC Pokémon! Nuevas e increíbles cartas de Entrenador ayudan a complementar el poder y el equilibrio del estilo Golpe Fusión. Usa estratégicamente cartas como la carta de Objeto Cambiador Cruzado para mantener a los rivales desconcertados y asegurarte de que tus Pokémon Activos y en Banca estén exactamente donde los necesitas. También puedes usar la carta de Objeto Caramelo Energético para maximizar los ataques de Golpe Fusión infligiendo daño adicional. ¡Y la carta de Herramienta Pokémon Guantes Esponjosos exprime al máximo el daño contra ciertos tipos de Pokémon!', category: "Cards", stock: 30, price: 100},
    { id: 11, image: Sobre3, name: 'Pokémon TCG – Celebrations – Dragapult Prime Collection', detail: '¡Celebra la llegada de Dragapult Prime! ¡A velocidad supersónica, Dragapult se precipita en picado sobre tu colección como un impactante Pokémon Prime! En esta poderosa colección, encontrarás paquetes de mejora de Celebraciones de JCC Pokémon, junto al sigiloso y fantasmal Dragapult Prime. ¿Podrás golpear justo en el momento adecuado? Si te crees capaz, indaga un poco más, ¡y hallarás un álbum de cartas, entre otras sorpresas adicionales!', category: "Cards", stock: 35, price: 120},
    { id: 12, image: Sobre4, name: 'Pokémon TCG – Celebrations – Lance’s Charizards V y Dark Sylveon V Collection', detail: '¡Enciende el Lanzallamas o sigue la voz misteriosa! ¡Conmemora el buen trabajo en equipo de Charizard y su Entrenador Lance, o rinde un homenaje al lado más oscuro de Sylveon con esta insólita imagen del Pokémon Vínculo! Con la mecánica de juego clásica de JCC Pokémon, estas dos colecciones incluyen paquetes de mejora especiales de Celebraciones de JCC Pokémon, además del Pokémon V estrella en una carta de gran tamaño y en una carta holográfica de promoción con la que jugar. ¡Indaga un poco más y hallarás sorpresas adicionales en otros dos paquetes de mejora de JCC Pokémon!', category: "Cards", stock: 12, price: 175},
  ]

export const getMock= new Promise ((resolve, reject)=>{
   
    let condicion= true
    if(condicion){
        setTimeout(() => {
            resolve(products);
          }, 2000);
    }
    else{
        reject('error')
    }
})
