import { Component, OnInit } from '@angular/core';
import { BookCategory } from 'src/app/common/book-category';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-boot-category',
  templateUrl: './boot-category.component.html',
  styleUrls: ['./boot-category.component.css']
})
export class BootCategoryComponent implements OnInit {
  bookCategory:BookCategory[];
  constructor(private __bookService:BookService) { }

  ngOnInit(): void {
    this.listBookCategories();
  }

  listBookCategories(){
    
    this.__bookService.getBookCategories().subscribe(
      data=>this.bookCategory=data
    )
  }
}
