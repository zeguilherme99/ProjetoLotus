import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService

  ) { }

  ngOnInit() {
  }

  sair(){
    this.router.navigate(['/login'])
    localStorage.clear()
  
  }

}

