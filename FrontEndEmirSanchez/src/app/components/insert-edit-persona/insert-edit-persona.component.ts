import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Person } from 'src/app/interfaces/person';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-insert-edit-persona',
  templateUrl: './insert-edit-persona.component.html',
  styleUrls: ['./insert-edit-persona.component.css']
})
export class InsertEditPersonaComponent implements OnInit {

  loading: boolean = false;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _service: PersonaService,
    private _snackBar: MatSnackBar,
    private router: Router
    ) {
    this.form = this.fb.group({
      names: ['', Validators.required],
      surename: ['', Validators.required],
      secondSurename: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      birthDate: ['', Validators.required],
      status: ['', [Validators.required, Validators.maxLength(1)]]
    });
  }

  ngOnInit(): void {
  }

  agregar(){
    // console.log(this.form.value);
    let fechaSeleccionada = this.form.value.birthDate;
    fechaSeleccionada = moment(fechaSeleccionada).format('YYYY-MM-DD');
    // console.log(fechaSeleccionada);

    const persona: Person = {
      nombres: this.form.value.names,
      primerApellido: this.form.value.surename,
      segundoApellido: this.form.value.secondSurename,
      dni: this.form.value.dni.toString(),
      fechaNacimiento: fechaSeleccionada,
      estado: this.form.value.status.toUpperCase()
    }

    this._service.insertarPersona(persona).subscribe(
      (data) => {
        console.log(data);
        this.mensajeExito();
        this.router.navigate(['/personas']);
      }
    );

    console.log(persona);
    //http://localhost:5230/api/Persona/Insertar

  }

  mensajeExito(){
    this._snackBar.open('Persona agregada', 'Cerrar', {
      duration: 2000,
    });
  }

}
