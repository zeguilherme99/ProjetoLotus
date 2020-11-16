import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-delete-categoria',
  templateUrl: './delete-categoria.component.html',
  styleUrls: ['./delete-categoria.component.css']
})
export class DeleteCategoriaComponent implements OnInit {
  categoria: Categoria = new Categoria


  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    let id: number = this.route.snapshot.params["id"]
    this.findCategoriaById(id)
  }

  findCategoriaById(id:number){
    this.categoriaService.getCategoriaById(id).subscribe((resp: Categoria)=>{
      this.categoria = resp
    }, err =>{
      console.log(`Erro cod: ${err.status}`)
    })
  }


  btnSim(){
    this.categoriaService.deleteCategoria(this.categoria.id).subscribe(()=>{
      this.router.navigate(["/cadastrocategoria"])
      this.alert.showAlertSuccess("Categoria apagada com sucesso")
    })
  }

  btnNao(){
    this.router.navigate(["/cadastrocategoria"])
  }
}


