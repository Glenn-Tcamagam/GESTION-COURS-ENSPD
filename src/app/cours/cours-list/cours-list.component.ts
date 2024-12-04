import { Component, OnInit } from '@angular/core';
import { Cours } from '../models/cours.model';
import { Observable } from 'rxjs';
import { CoursService } from '../services/cours.service';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.css']
})
export class CoursListComponent  implements OnInit{
  cours$?: Observable<Cours[]> ;


  constructor(private coursService: CoursService){}

  ngOnInit(): void {
    this.cours$ =this.coursService.getAllCours()
  }

}
