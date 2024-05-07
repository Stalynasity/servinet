import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PropertiesItem } from '../../interface/menuitem.interface';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,OnDestroy {

  @Input() elementosMenu!: PropertiesItem[];

  constructor(private authService: AuthService, private route:Router) { }


  elementosMenuRol: PropertiesItem[] = [];
  private userRoleSubscription!: Subscription;
  rolId: number | null = null;


  get usuarioMenu() {
    return this.authService.usuarioMenu
  }


  ngOnInit(): void {
    this.filtrarElementosMenu();
    console.log("inicio")
  }

  ngOnDestroy(): void {
    if (this.userRoleSubscription) {
      this.userRoleSubscription.unsubscribe();
    }
  }

  private filtrarElementosMenu(): void {
    this.userRoleSubscription = this.authService.userRole$.subscribe(rolID =>{
      this.rolId = rolID;
      this.elementosMenu.forEach((elementoMenu) => {
        if (elementoMenu.idrol === this.rolId) {
          this.elementosMenuRol.push(elementoMenu);
        }
      });
    })
  }


  logout(): void {
    // Implementa el método de cierre de sesión en AuthService si es necesario
    this.route.navigateByUrl('/auth/login');
    this.authService.logout();
    this.toggleNav();
  }



  public Navisual = true;

  toggleNav(){
    this.Navisual = false;
  }

}
