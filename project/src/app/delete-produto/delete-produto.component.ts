import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {

  produto : Produto = new Produto()

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private alerts: AlertasService
  ) { }

  ngOnInit(){
    window.scroll
    let id: number = this.route.snapshot.params['id']
    this.findProdutoById(id)
  }

  findProdutoById(id: number){
    this.produtoService.getProdutoById(id).subscribe((resp: Produto)=>{
      this.produto=resp
    })

  }

  btnSim(){
    this.produtoService.deleteProduto(this.produto.id).subscribe(()=>{
      this.router.navigate(['/cadastroproduto'])
      this.alerts.showAlertSuccess('Produto apagado com sucesso!')
    })
  }

  btnNao(){
    this.router.navigate(['/cadastroproduto'])
  }

}
