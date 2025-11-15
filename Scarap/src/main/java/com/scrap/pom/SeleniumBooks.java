package com.scrap.pom;

import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import org.openqa.selenium.NoSuchElementException;

import org.jsoup.select.Elements;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.scrap.data.BooksData;
import com.scrap.entity.BookCategory;
import com.scrap.entity.Books;

import org.jsoup.nodes.Element;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class SeleniumBooks {
	
	//초기화를 반드시 해줘야 함 
	public void init(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }
	
	@FindBy(css="#content_inner > article > div.row > div.col-sm-6.product_main > h1")
	private WebElement title;
	
	@FindBy(css="#content_inner > article > div.row > div.col-sm-6.product_main > p.price_color")
	private WebElement price;
	
	@FindBy(css="#content_inner > article > div.row > div.col-sm-6.product_main > p.instock.availability")
	private WebElement stock;
	
	@FindBy(css="#content_inner > article > p")
	private WebElement descpription;
	
	@FindBy(xpath = "//table[@class='table table-striped']//th[text()='UPC']/following-sibling::td")
	private WebElement upc;

	@FindBy(xpath = "//table[@class='table table-striped']//th[text()='Product Type']/following-sibling::td")
	private WebElement productType;

	public BooksData booksHref(WebDriver driver, SeleniumBookCategory sbc) {
	    BooksData bookData = new BooksData();

	    List<String> categoryUrls = new ArrayList<>();
	    for (WebElement category : sbc.getCategoryUrls()) {
	        String href = category.getDomProperty("href");
	        categoryUrls.add(href);

	        BookCategory bookCategory = BookCategory.builder()
	            .categoryUrl(href)
	            .build();

	        bookData.getBookCategoryList().add(bookCategory);
	    }
 
	    for (String categoryUrl : categoryUrls) {
	        driver.get(categoryUrl);
	        List<WebElement> hrefs = driver.findElements(
	            By.cssSelector("#default > div > div > div > div > section > div:nth-child(2) > ol > li > article > div.image_container a")
	        );

	        for (WebElement href : hrefs) {
	            String url = href.getDomProperty("href");
	            bookData.getUrls().add(url);
	        }
	    }

	    return bookData;
	}

	public List<Books> booksDetailPage(WebDriver driver, List<String> urls) {
	    List<Books> books = new ArrayList<>();

	    for (String url : urls) {
	        driver.get(url);
	        SeleniumBooks sb = new SeleniumBooks();
	        PageFactory.initElements(driver, sb);

	        Books book = Books.builder()
	            .title(nosuchException(sb.getTitle()))
	            .price(nosuchException(sb.getPrice()))
	            .stock(nosuchException(sb.getStock()))
	            .upc(nosuchException(sb.getUpc()))
	            .productType(nosuchException(sb.getProductType()))
	            .descpription(nosuchException(sb.getDescpription()))
	            .currnetUrl(driver.getCurrentUrl())
	            .build();

	        books.add(book);
	    }

	    return books;
	}
	
	public String nosuchException(WebElement element) {
		String text ="";
		try {
			text = element.getText();
		}catch(NoSuchElementException e){
			System.out.println(e);
		}
		return text;
	}
}
