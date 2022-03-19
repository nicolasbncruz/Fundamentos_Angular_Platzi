import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'my-store';
  widthImg = 10;
  name = 'Nicolas';
  age = 18;
  img = 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2015/12/29/14514053708446.jpg';
  btnDisabled = true;
  register = {
    name: '',
    email: '',
    password: ''
  };

  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2015/12/29/14514053708446.jpg'
  }

  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.webp',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.webp'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/books.webp'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/album.webp'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.webp'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.webp'
    }
  ];
  toggleButton(){
    //alert('asfasfsa');
    this.btnDisabled = !this.btnDisabled;
  }
  incrementAge(){
    this.person.age ++;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    //console.log(element.value);
    this.person.name = element.value;
  }

  addNameArray(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index);
  }

  onRegister(){
    console.log(this.register);
  }

  //editor: https://stackblitz.com/edit/angular-kty17p?file=src/app/app.component.html
  //aplication: https://angular-kty17p.stackblitz.io
  //produccion: https://yarnstore-81ab3.web.app/

}
