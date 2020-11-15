import { Component, OnInit } from '@angular/core';
import {faFacebook, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook
  faInstagram = faInstagram
  faLinkedin = faLinkedin
  faGitHub= faGithub

  constructor() { }

  ngOnInit(): void {
  }

}
