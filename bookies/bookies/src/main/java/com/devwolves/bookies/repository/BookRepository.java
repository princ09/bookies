package com.devwolves.bookies.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.devwolves.bookies.entity.Book;
public interface BookRepository extends JpaRepository<Book, Long> {
	
}