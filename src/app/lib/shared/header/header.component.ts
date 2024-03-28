import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  get usuarioMenu(){
    return this.authService.usuarioMenu
  }

  constructor(private authService: AuthService) { }
}
