import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagNaoEncontradaComponent } from './pag-nao-encontrada/pag-nao-encontrada.component';


const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  {path: '', redirectTo: "produtos", pathMatch: "full"},
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  {path: '**', component: PagNaoEncontradaComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
