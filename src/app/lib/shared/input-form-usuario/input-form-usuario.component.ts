import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserReques } from '../../interface/UsuarioRequest';

@Component({
  selector: 'app-input-form-usuario',
  templateUrl: './input-form-usuario.component.html',
  styleUrl: './input-form-usuario.component.css'
})
export class InputFormUsuarioComponent implements OnInit {

  UsuaForm!: FormGroup;

  roles = [
    { label: 'gestor', value: '1' },
    { label: 'cajero', value: '2' }
  ];

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }


  onSubmitClientData() {
    const formValues = this.UsuaForm.value;
    const usuaRequest: UserReques = {
      Username: formValues.usarname,
      Email: formValues.email,
      Password: formValues.pass,
      RolRolid: formValues.rol
    };

    this.authService.InsertUsuarioService(usuaRequest).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.router.navigateByUrl('/auth/gestor')
        }
      },
    );
  }



  ngOnInit(): void {
    this.UsuaForm = this.formBuilder.group({
      usarname: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,30}$/)]],
      rol: ['', Validators.required]
    });
  }
}

