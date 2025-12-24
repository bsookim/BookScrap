<h1>김병수 지원자 스킬 인벤토리 추가</h1>

### Backend

**Java**

- Java 17 기반 객체지향 설계 및 개발 경험
- 프로젝트에는 없지만 자바 컬렉션(List,Set,Map등), 스트림 API 활용 가능
- 유지보수성을 고려한 코드 작성 및 리팩토링 경험

**Spring Boot**

- Spring Boot 기반 개발 경험
- MVC 구조 이해 및 적용
- JPA/Hibernate를 활용한 데이터베이스 연동
- Exception Handling, Validation 처리 경험
- 환경별 설정 분리 및 프로파일 관리 경험

### Build / Dependency Management

**Gradle**

- Gradle 기반 Spring Boot 프로젝트 빌드 및 실행 경험
- 빌드 그래들을 통한 의존성 추가 및 버전 관리
- 환경에 따라 설정 값 수정 및 플러그인 설정 경험

### Automation

**Selenium**

- Selenium을 활용한 동적 웹 자동화 테스트 및 크롤링 경험
- 동적 요소 처리 및 예외 상황 대응 경험 (명시적 대기 사용)

### Jsoup

- Jsoup을 활용한 HTML 파싱 및 데이터 크롤링
- CSS Selector를 이용한 원하는 데이터 추출 Selector를 느슨하게 연결해 데이터 가져오기
- 정적 웹 페이지 대상 크롤링 로직 구현
- Selenium과 병행하여 사용 (동적 페이지 접근 후 HTML 파싱 명시적 대기 사용)

## JPA (Java Persistence API)

- JPA를 활용한 **객체–관계 매핑(ORM)** 기반 데이터 접근 로직 구현
- Entity,Repository,Service 구조를 활용한 **도메인 중심 설계**
- Spring Data JPA를 사용한 **CRUD 및 기본 쿼리 처리**
- OneToMany,ManyToOne,OneToOne,양방향 매핑 등 **연관관계 매핑 경험**
- *지연 로딩(Lazy Loading)**과 즉시 로딩(Eager Loading)의 차이 이해 및 적용
- 트랜잭션 어노테이션을 활용한 **트랜잭션 관리**
- JPQL,QueryDsl을 활용한 **커스텀 조회 로직 구현 (Qtype 생성)**
- N+1 문제에 대한 기본적인 이해 및 Fetch Join 활용 경험

### MyBatis

- SQL 기반 데이터 접근 프레임워크(MyBatis) 사용 경험
- XML Mapper를 활용한 SQL 작성 및 관리
- 동적 SQL(<if>, <choose>, <foreach> 등)을 활용한 조건별 쿼리 처리
- Parameter/Result 매핑을 통한 객체 ↔ SQL 데이터 변환
- 복잡한 쿼리(조인, 서브쿼리) 작성 및 유지보수 경험

**React (초급)**

- React 기반 프론트엔드 화면 개발 경험
- 함수형 컴포넌트(Function Component) 사용
- useState, useEffect 등 기본 Hook 활용 가능
- Axios를 이용한 백엔드 API 연동 경험
- 간단한 CRUD 화면 구현 경험
- props를 이용한 컴포넌트 간 데이터 전달
- 조건부 렌더링 및 리스트 렌더링 구현
- 기본적인 폼 처리 및 이벤트 핸들링 가능
- CSS / 간단한 UI 라이브러리(Material UI, Ant Design 등) 사용 경험

<h2>개발 기간: 2025-11-26 ~ 2025-12-04

이 프로젝트는 React + Spring Boot 기반의 도서 스크래핑 웹 서비스입니다.
</h2>


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
