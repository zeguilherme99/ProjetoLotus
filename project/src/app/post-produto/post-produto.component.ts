import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-post-produto',
  templateUrl: './post-produto.component.html',
  styleUrls: ['./post-produto.component.css']
})
export class PostProdutoComponent implements OnInit {

  key: 'data'
  reverse = true

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  nome: string

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number
  nomeCategoria: string

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private alerts: AlertasService

  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.findAllProdutos()
    this.findAllCategorias()
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp

    })
  }

  

  publicar() {
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    if (this.produto.nome == null || this.produto.material == null || this.produto.categoria == null) {
      this.alerts.showAlertDanger('Preencha todos os campos antes de publicar!')
    } else {
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
        this.produto = resp
        this.produto = new Produto()
        this.alerts.showAlertSuccess('Postagem de produto realizada com sucesso!')
        this.findAllProdutos()
      })
    }
  }






  findAllCategorias() {

    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }


  findCategoriaById() {
    this.categoriaService.getCategoriaById(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
    })

  }


  findByNomeProduto(){
    if(this.nome === ""){
      this.findAllProdutos()
    } else{
      this.produtoService.getByNomeProduto(this.nome).subscribe((resp: Produto[])=>{
        this.listaProdutos=resp
      })
    }
  }

  findByNomeCategoria(){
    if(this.nomeCategoria === ""){
      this.findAllCategorias()
    }else{
      this.categoriaService.getByNomeCategoria(this.nomeCategoria).subscribe((resp: Categoria[])=>{
        this.listaCategorias = resp
      })
    }
  }
}
