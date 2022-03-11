import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  produtos = [
    {id:0, nome: 'Hot dog', preco: 5.00, qtcomprados:0 },
    {id:1, nome: 'Bala', preco: 0.25, qtcomprados:0 },
    {id:2, nome: 'Refri', preco: 3.50, qtcomprados: 0 },
    {id:3, nome: 'Chocolate', preco: 2.00, qtcomprados:0 },
  ];

  total = '';

  constructor() {}

  subTrairProduto(produto) {
    this.produtos[produto.id].qtcomprados -= 1;
  }

  adicionarProduto(produto) {
    this.produtos[produto.id].qtcomprados += 1;
  }

  calcular() {
    this.total = 'R$ '+this.produtos.reduce((a,b) => a += b.preco * b.qtcomprados, 0).toFixed(2).replace('.', '.');
  }
}
