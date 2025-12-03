package com.scrap.pom;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SeleniumBookCategory {
	 
	public SeleniumBookCategory(WebDriver driver) {
        PageFactory.initElements(driver, this); 
    }

	@FindBy(css="ul.nav.nav-list a")
	private List<WebElement> categoryUrls;
	
	@FindBy(css="ul.nav.nav-list a")
	private List<WebElement> categoryName;
	
		
	
}
