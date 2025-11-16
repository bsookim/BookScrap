package com.scrap.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scrap.entity.Books;

public interface BooksRepository extends JpaRepository<Books, Long>{

}
 