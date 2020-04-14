import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:Book[];
  currentCategoryId:number;
  searchMode:boolean;
  constructor(private __bookService:BookService ,
    private __activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.__activatedRoute.paramMap.subscribe(()=>{
      this.listBooks();
    })
  }
  listBooks(){
    this.searchMode=this.__activatedRoute.snapshot.paramMap.has('keyword');
    if(this.searchMode){
      this.handleSearchBooks();
    }else{
      this.handleListBooks();
    }
  }

  handleListBooks(){
    const hasCategporyId:boolean =  this.__activatedRoute.snapshot.paramMap.has('id');
    if(hasCategporyId){
      this.currentCategoryId = +this.__activatedRoute.snapshot.paramMap.get('id');
    }else{
      this.currentCategoryId = 1;
    }
    this.__bookService.getBook(this.currentCategoryId).subscribe(
      data=>this.books=data
    )
  }

  handleSearchBooks(){
    const keyword:string = this.__activatedRoute.snapshot.paramMap.get('keyword');
    this.__bookService.searchBooks(keyword).subscribe(
      data=>this.books=data
    )
  }
}
