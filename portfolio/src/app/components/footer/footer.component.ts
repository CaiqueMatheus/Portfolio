import { Component, OnInit } from '@angular/core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faBehanceSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArtstation } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  facebook = faFacebookSquare;
  instagram = faInstagramSquare;
  linkedin = faLinkedin;
  behance = faBehanceSquare;
  artstation = faArtstation;
  github = faGithub;
  
  constructor() { }

  ngOnInit(): void { 
  }

}
