import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import{OrderModule} from 'ngx-order-pipe'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { ContatoComponent } from './contato/contato.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{ModalModule} from 'ngx-bootstrap/modal'
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {FileUploadModule} from 'ng2-file-upload';
import { ProdutoComponent } from './produto/produto.component';
import { BackgroundComponent } from './background/background.component';
import { PostProdutoComponent } from './post-produto/post-produto.component';
import { PostCategoriaComponent } from './post-categoria/post-categoria.component';
import { PutProdutoComponent } from './put-produto/put-produto.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { AlertasComponent } from './alertas/alertas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    QuemsomosComponent,
    ContatoComponent,
    LoginComponent,
    CadastroComponent,
    ProdutoComponent,
    BackgroundComponent,
    PostProdutoComponent,
    PostCategoriaComponent,
    PutProdutoComponent,
    PutCategoriaComponent,
    DeleteProdutoComponent,
    DeleteCategoriaComponent,
    AlertasComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule ,
    OrderModule,
    ModalModule.forRoot(),
    FileUploadModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
