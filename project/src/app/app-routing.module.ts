import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostCategoriaComponent } from './post-categoria/post-categoria.component';
import { PostProdutoComponent } from './post-produto/post-produto.component';
import { ProdutoComponent } from './produto/produto.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { PutProdutoComponent } from './put-produto/put-produto.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';



const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'quemsomos', component: QuemsomosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  {path: 'produto', component: ProdutoComponent},
  {path:'cadastroproduto', component: PostProdutoComponent},
  {path:'cadastrocategoria', component: PostCategoriaComponent},
  {path:'edita-produto/:id', component: PutProdutoComponent},
  {path:'delete-produto/:id', component: DeleteProdutoComponent},
  {path:'edita-categoria/:id', component:PutCategoriaComponent},
  {path:'delete-categoria/:id', component:DeleteCategoriaComponent}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
