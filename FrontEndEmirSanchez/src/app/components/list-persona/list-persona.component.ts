import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'src/app/interfaces/person';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.css']
})
export class ListPersonaComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['names', 'surname', 'secondSurname', 'dni', 'birthDate', 'status', 'acciones'];
  dataSource = new MatTableDataSource<Person>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _service: PersonaService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Registros por página';
  }

  ngOnInit(): void {
    this.ListarPersonas();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ListarPersonas() {
    this.loading = true;
    this._service.getPersonas().subscribe(
      (data) => {
        this.dataSource.data = data;
        // imprimir en consola
        console.log(data);
        this.loading = false;
      }, (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

}
