import { Component } from '@angular/core';
import {Router,ActivatedRoute,Params}from '@angular/router';

import { appservice } from '../app/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comercio';
  constructor(
    private appservice:appservice,
  ){
  }
  ngOnInit(){
      //this.mostrar();
      this.appservice.prueba();
  } 
}

