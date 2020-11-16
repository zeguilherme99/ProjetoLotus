import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
    produto: Produto = new Produto()
    listaProdutos: Produto[]
  nome: string
  
  
  categoria: Categoria = new Categoria()
    listaCategorias: Categoria[]
    idCategoria: number
    nomeCategoria: string

  constructor(
    private router: Router,
    private alerta: AlertasService,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService

  ) { }

  ngOnInit(){
    window.scroll(0, 0)
    this.findAllProdutos()
    this.findAllCategorias()
    }

    findAllProdutos() {
      this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
        this.listaProdutos = resp
  
      })
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



