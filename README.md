<h2>개발 기간: 2025-11-26 ~ 2025-12-04

이 프로젝트는 React + Spring Boot 기반의 도서 스크래핑 웹 서비스입니다.
</h2>
<h3>Frontend</h3>
- React
- TypeScript
- Vite
- Node

<h3>Backend</h3>
- Spring Boot
- JPA
- Gradle
- Selenium

<h3>Database</h3>
- Postgresql

<br>

스크래핑 사이트 <br>
https://books.toscrape.com/

<br>


| 필드명         | 타입              | 설명                                   |
| ----------- | --------------- | ------------------------------------ |
| id          | Long            | PK, 자동 증가                            |
| title       | String          | 상품명                                  |
| price       | String          | 가격                                   |
| stock       | String          | 재고                                   |
| description | String          | 상품 설명                                |
| upc         | String          | UPC 코드                               |
| productType | String          | 상품 타입                                |
| currentUrl  | String          | 원본 상품 URL                            |
| thumbNail   | String          | 썸네일 이미지 URL                          |
| bookReply   | List<BookReply> | Book 1:다 Reply 관계                             |
| categories  | List<String>    | 카테고리 문자열 리스트               |


| 필드명          | 타입     | 설명          |
| ------------ | ------ | ----------- |
| id           | Long   | PK          |
| categoryUrl  | String | 카테고리 원본 URL |
| categoryName | String | 카테고리 이름     |


| 필드명     | 타입     | 설명                 |
| ------- | ------ | ------------------ |
| id      | Long   | PK                 |
| content | String | 댓글 내용              |
| book    | Book   | Reply 다:1 Book 관계 |



<center>
  <img src="https://github.com/user-attachments/assets/b3be45c3-1658-427f-8bc9-8605fd2972a0" width="500" />
  <img src="https://github.com/user-attachments/assets/a6d8a1e6-eb74-40ca-bb24-8205458b6ffc" width="500" />
  <img src="https://github.com/user-attachments/assets/03621074-8930-4744-b3a6-c0a4a8e9b25c" width="500" />
  <img src="https://github.com/user-attachments/assets/99b7dcf7-5c25-4e9d-a019-0a52dcd8dd1e" width="500"/>
  <img src="https://github.com/user-attachments/assets/e444ca7d-b298-4fe8-a433-dd2b7e73fc6a" width="500"/><br>
  <img src="https://github.com/user-attachments/assets/3f0f7b67-c21a-4fad-925d-d02be4115dec" width="500"/>
  <img src="https://github.com/user-attachments/assets/e8d430ca-bc2f-4353-90c3-a564400552c9" width="500"/>
  <br><br>
  <span>
  본 프로젝트는 https://books.toscrape.com/ 사이트의
  상품 정보와 카테고리 정보를 Selenium을 이용해 자동 스크래핑하여
  데이터베이스에 CRUD 기능을 중심으로 제작되었습니다.
  스크래핑된 데이터는 다음과 같이 활용됩니다.
    
  <h2>Book 기능</h2>

  Book EndPoint <br>
  /book//findByCategoryName/{categoryName} <br>
  /book/find/{id} <br>
  /book/save <br>
  /book/update/{id} <br>
  /book/delete/{id} <br>
  
  Book 등록
  
  Book 조회
  
  Book 수정
  
  Book 삭제
  
  
  <h2>BookReply 기능</h2>

  BookReply EndPoint <br>
  /bookReply/{id}/save <br>
  /bookReply/list <br>
  /bookReply/{replyId}/update <br>
  /bookReply/delete/{replyId} <br>
  
  댓글 등록
  
  댓글 조회
  
  댓글 수정
  
  댓글 삭제
  
  <h2>BookCategory 기능</h2>

  BookCategory EndPoint <br>
  /bookCategory/findAll <br>
  
  
  카테고리 등록
  
  카테고리 조회
  
  </span>
</center>
