package com.scrap.data;

import java.util.ArrayList;
import java.util.List;

import com.scrap.entity.BookCategory;
import com.scrap.entity.Books;

import lombok.Getter;

@Getter 
public class BooksData {
	
	List<Books> bookList=new ArrayList<>();
	
	List<BookCategory> bookCategoryList=new ArrayList<>();
	
	List<String> urls = new ArrayList<>();
	
}
