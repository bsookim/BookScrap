package com.scrap.service;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.scrap.data.BooksData;
import com.scrap.dto.BookDto;
import com.scrap.entity.Book;
import com.scrap.entity.BookCategory;
import com.scrap.pom.SeleniumBookCategory;
import com.scrap.pom.SeleniumBook;
import com.scrap.repository.BookCategoryRepository;
import com.scrap.repository.BookRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class BookService {

	private final BookRepository bookRepository; 
	
	private final BookCategoryRepository bookCategoryRepository;
	
	//전체 세이브
	public void bookSave(String currentUrl) {
	    WebDriver driver = new ChromeDriver();

	    try {
	        driver.get(currentUrl);
	        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(2));
	        WebElement body = driver.findElement(By.cssSelector("body"));
	        wait.until(ExpectedConditions.visibilityOf(body));

	        SeleniumBookCategory sbc = new SeleniumBookCategory(driver);
	        SeleniumBook sb = new SeleniumBook();

	        BooksData bookData = sb.booksHref(driver, sbc);
	        List<Book> books = sb.booksDetailPage(driver, bookData.getUrls(),wait);

	        bookData.getBookList().addAll(books);
	        
	        saveAll(bookData.getBookCategoryList(),bookData.getBookList());
	    } finally {
	        driver.quit();
	    }
	}
	
	private void saveAll(List<BookCategory> bookCategoryList, List<Book> bookList) {
		bookCategoryRepository.saveAll(bookCategoryList);
        bookRepository.saveAll(bookList);
   
	}
	
	//단일 조회
	@Transactional(readOnly = true)
	public BookDto bookFindById(Long id) {
		Book book= bookRepository.findByIdWithReplies(id);
		BookDto bookDto= BookDto.findByBookId(book);
		return bookDto;
			
	}
	
	//전체 조회
	@Transactional(readOnly = true)
	public Page<BookDto> bookFindAll(String categoryName,Pageable pageable) {
	    Page<Book> bookPage = bookRepository.findByCategoryName(categoryName,pageable);

	    List<BookDto> bookDtoList = new ArrayList<>();
	    for (Book book : bookPage.getContent()) {
	        bookDtoList.add(BookDto.fromEntity(book));
	    }

	    return new PageImpl<>(bookDtoList, pageable, bookPage.getTotalElements());
	}
	
	//JpaRepository에는 update메서드가 없다. 
	//JPA는 DB에 가기전 영속성 컨텍스트에 데이터가 있는지 먼저 조회한다.
	//조회 후 데이터가 변경된 값이 있으면 그 데이터의 상태를 업데이트 함. 이게 더티체킹 (변경감지라한다)
	//그래서 repository.save를 해도 insert가 아닌 update가 나가게 된다. 
	//개념을 모르면 수정이 안됨
	public void bookUpdate(Long id,String title) {
		Book book= bookRepository.findById(id).orElseThrow();
		book.titleUpdate(title); //변경 감지
		bookRepository.save(book);
	}
	
	public void bookDeleteById(Long id) {
		bookRepository.deleteById(id);
	}

}
