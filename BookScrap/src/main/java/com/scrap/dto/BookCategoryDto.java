package com.scrap.dto;

import java.util.ArrayList;
import java.util.List;

import com.scrap.entity.BookCategory;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class BookCategoryDto {
	
	private Long id;
	
	private String categoryUrl;
	
	private String categoryName;
	
	public static List<BookCategoryDto> findAll(List<BookCategory> bookCategory) {
		List<BookCategoryDto> list= new ArrayList<>();
		for(BookCategory category:bookCategory) {
			BookCategoryDto dto= new BookCategoryDto();
			dto.id=category.getId();
			dto.categoryName =category.getCategoryName();
			dto.categoryUrl=category.getCategoryUrl();
			list.add(dto);
		}
		return list;
	}
}
