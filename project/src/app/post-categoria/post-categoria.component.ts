import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-post-categoria',
  templateUrl: './post-categoria.component.html',
  styleUrls: ['./post-categoria.component.css']
})
export class PostCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]

  constructor(
    private categoriaService: CategoriaService,
    private router : Router,
    private alerts: AlertasService
  ) { }

  ngOnInit() {
    this.findAllCategorias()
  }


  findAllCategorias() {

    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }


  findCategoriaById() {
    this.categoriaService.getCategoriaById(this.categoria.id).subscribe((resp: Categoria) => {
      this.categoria = resp;
    })
  }

  cadastrar(){
    if(this.categoria.descricao == null){
this.alerts.showAlertDanger('Preencha o campo de Categoria corretamente!')
    }else{
this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
  this.categoria = resp
  this.router.navigate(['/cadastroproduto'])
  this.alerts.showAlertSuccess('Categoria cadastrada com sucesso!')
  
})
    }
  }

}
