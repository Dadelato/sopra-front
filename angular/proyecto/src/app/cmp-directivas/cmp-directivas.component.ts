import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  aplicaLetraAzul: boolean = true;
  miFondo: string = "black";
  colores: Array<string> = ["green", "yellow", "red", "blue"];
  pelicula = {
    titulo: "Peli 1",
    descripcion: "Descripcion 1"
  }

  constructor() { }

  ngOnInit() {
  }

}
