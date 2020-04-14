import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private __router:Router) { }

  ngOnInit(): void {
  }

  searchBooks(keyword:string){
    this.__router.navigateByUrl('/search/'+keyword);
  }

}
