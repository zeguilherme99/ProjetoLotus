import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-put-produto',
  templateUrl: './put-produto.component.html',
  styleUrls: ['./put-produto.component.css']
})
export class PutProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  idProd: number
  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit(){

    window.scroll(0,0)
    this.idProd = this.route.snapshot.params['id']
    this.findProdutoById(this.idProd)

    this.findAllCategorias()
  }

  findProdutoById(id:number){
    this.produtoService.getProdutoById(id).subscribe((resp: Produto) =>{
      this.produto=resp
    })
  }


  salvar() {
    this.categoria.id = this.idCategoria
    this.produto.categoria= this.categoria

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      this.router.navigate(['/cadastroproduto'])
      this.alert.showAlertSuccess('Produto alterado com sucesso')
    }, err =>{
      if(err.status=="500"){
        this.alert.showAlertInfo('Preencha todos os campos corretamente antes de enviar!')
      }
    })

  }

  findByIdProduto(id:number){
    this.produtoService.getProdutoById(id).subscribe((resp: Produto) =>{
      this.produto = resp
    })
  }

  findAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[])=>{
      this.listaCategorias = resp
    })

  }

  findCategoriaById(){
    this.categoriaService.getCategoriaById(this.idCategoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }
}

