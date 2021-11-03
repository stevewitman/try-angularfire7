import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) {
    this.dataService.getPosts().subscribe(res => {
      console.log(res);
      
    })
  }

  ngOnInit(): void {
  }

}
