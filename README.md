이 프로젝트는 React + Spring Boot 기반의 도서 관리 스크래핑 웹 서비스입니다.

<h3>Frontend</h3>
- React
- TypeScript
- Vite
- Node

<h3>Backend</h3>
- Spring Boot
- JPA
- Gradle

<h3>Database</h3>
- Postgresql

<be>

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
| bookReply   | List<BookReply> | 댓글 엔티티(1:N, Cascade + orphanRemoval) |
| categories  | List<String>    | 카테고리 문자열 리스트(값 타입 컬렉션)               |


| 필드명          | 타입     | 설명          |
| ------------ | ------ | ----------- |
| id           | Long   | PK          |
| categoryUrl  | String | 카테고리 원본 URL |
| categoryName | String | 카테고리 이름     |


| 필드명     | 타입     | 설명                 |
| ------- | ------ | ------------------ |
| id      | Long   | PK                 |
| content | String | 댓글 내용              |
| book    | Book   | Book과 다대일 관계 (N:1) |



<center>
  <img src="https://github.com/user-attachments/assets/b3be45c3-1658-427f-8bc9-8605fd2972a0" width="500" />
  <img src="https://github.com/user-attachments/assets/a6d8a1e6-eb74-40ca-bb24-8205458b6ffc" width="500" />
  <img src="https://github.com/user-attachments/assets/03621074-8930-4744-b3a6-c0a4a8e9b25c" width="500" />
  <img src="https://github.com/user-attachments/assets/99b7dcf7-5c25-4e9d-a019-0a52dcd8dd1e" width="500"/>
  <img src="https://github.com/user-attachments/assets/e444ca7d-b298-4fe8-a433-dd2b7e73fc6a" width="500"/><br>
  <img src="https://github.com/user-attachments/assets/3f0f7b67-c21a-4fad-925d-d02be4115dec" width="500"/>
  <img src="https://github.com/user-attachments/assets/e8d430ca-bc2f-4353-90c3-a564400552c9" width="500"/>
</center>
