import { AuthService } from './../../services/auth.service';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../../interface/LoginRequest.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

@Input() val: string = '';

  errorDeInicioDeSesion?: string = '';

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService

  ) { }

  login() {
    const loginRequest: LoginRequest = this.miFormulario.value;
    this.authService.login(loginRequest).subscribe(
      response => {
        console.log(response);
        if (response.statusCode === 200) {
          switch (response.data?.rolId) {
            case 1:
              this.router.navigateByUrl('auth/gestor');
              break;
            case 2:
              this.router.navigateByUrl('auth/cajero');
              break;
            default:
          }

        } else {
          this.errorDeInicioDeSesion = response.message;
        }
      },


    );
  }
}
