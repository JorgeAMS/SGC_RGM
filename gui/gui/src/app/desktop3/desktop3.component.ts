import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '.././user-service.service'; // Importamos nuestro servicio
import 'rxjs/add/operator/map'; // Libreria para mapear los resultados a JSON

@Component({
  selector: 'app-desktop3',
  templateUrl: './desktop3.component.html',
  styleUrls: ['./desktop3.component.css']
})
export class Desktop3Component implements OnInit {

  constructor(private crudProducto: UserServiceService) {
     /*  this.crudProducto
         .listar()
         .map(response => response.json())
         .subscribe(data => {
           alert('exito');
         });*/
  }

  ngOnInit() {
  }

}
