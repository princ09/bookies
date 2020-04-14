import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';
import { BookCategory } from '../common/book-category';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl="http://localhost:8080/api/v1/books/";
  //Step 1
  private categoryUrl="http://localhost:8080/api/v1/book-category/"
  constructor(private httpClient:HttpClient) { }
  getBook(theCategoryId:number):Observable<Book[]>{
    const searchUrl = `${this.baseUrl}/search/categoryId?id=${theCategoryId}`;
    return this.getBooksList(searchUrl);
  }

  private getBooksList(searchUrl: string): Observable<Book[]> {
    return this.httpClient.get<GetResponseBooks>(searchUrl).pipe(map(response => response._embedded.books));
  }

  getBookCategories():Observable<BookCategory[]>{
    return this.httpClient.get<GetResponseBookCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.bookCategory)
    );
  }

  get(bookId:number):Observable<Book>{
    const bookDetailsUrl = `${this.baseUrl}/${bookId}`;
    return this.httpClient.get<Book>(bookDetailsUrl);
  }

  searchBooks(keyword:string):Observable<Book[]>{
    const searchUrl = `${this.baseUrl}/search/searchByKeyword?name=${keyword}`;
    return this.getBooksList(searchUrl);
  }

}
interface GetResponseBooks{
  _embedded:{
    books:Book[];
  }
}
//step2
interface GetResponseBookCategory{
  _embedded:{
    bookCategory:BookCategory[];
  }
}