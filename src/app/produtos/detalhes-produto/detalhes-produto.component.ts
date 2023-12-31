import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { NotificacaoService } from 'src/app/service/notificacao.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
   private produtoService: ProdutoService,
   private route: ActivatedRoute,
   private notificacaoService: NotificacaoService,
   private carrinhoService: CarrinhoService
  ){ }

  ngOnInit(): void{
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number (routeParams.get("id"));
    this.produto = this.produtoService.getOne(produtoId);
  }

  adicionarAoCarrinho(){
    this.notificacaoService.notificar("Produto adicionado ao carrinho");
    const produto: IProdutoCarrinho = {
      ...this.produto!,
     quantidade: this.quantidade

    }
    this.carrinhoService.adicionarAoCarrinho(produto);
  }

}
