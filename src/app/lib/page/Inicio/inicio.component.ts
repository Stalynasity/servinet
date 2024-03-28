import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ListPlanes } from '../../interface/plane.interface';
import { HttpPLanesService } from '../../services/plans.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  constructor (private router: Router,
              private httpgetPlanes : HttpPLanesService
    ) {}

  ListaPlanes: ListPlanes[] = [];

  cargaPlanes(){
    this.httpgetPlanes.readProducts().subscribe( listPlans => {
      this.ListaPlanes = listPlans;
    });
  }

  ngOnInit(): void {
    this.cargaPlanes();
  }

}
