package com.devwolves.bookies.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;

import com.devwolves.bookies.entity.Book;
public interface BookRepository extends JpaRepository<Book, Long> {
	//Step 1 , step 2 App.module.ts
	//https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods
	//https://docs.spring.io/spring-data/rest/docs/current/reference/html/#reference
	@RestResource(path="categoryId")
	Page<Book> findByCategoryId(@Param("id") Long Id, Pageable pageable);
}
