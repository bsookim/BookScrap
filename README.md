상품 정보 읽기 

개발 기간 2025-11-15 ~ 2025-11-16

Table 정보  

BookCategory  
id : 	자동증가 값  
categoryUrl  : 카테고리 URL 정보 

Table 정보 
Books
id : 자동증가 값  
title : 제목  
price : 가격  
stock : 재고  
descpription : 상세내용  
upc : UPC  
productType : 상품유형  
currnetUrl : 상품 상세정보의 URL  


PROCESS 

1.상품 카테고리 URL 정보 조회 
2.카테고리 URL 이동
3.상품의 페이지가 2페이지 이상 ? 상품 URL정보 조회 후 페이지 이동 모든 페이지 이동 시 카테고리 이동 : 상품 정보조회 카테고리 이동 
4.BooksData에 bookList,bookCategoryList 정보 addAll후
5.BooksRepository에 bookList saveAll BookCategory에 bookCategoryList saveAll 

정보 저장 시 regx는 사용하지 않았습니다.
웹사이트 정보 그대로 저장했습니다.

끝.
