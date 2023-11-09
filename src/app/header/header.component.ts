import { Component } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
     public carrinhoService: CarrinhoService
  ) {}

}
