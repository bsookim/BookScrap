import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/books/save', { url });
    } catch (error) {
      console.error('저장 실패:', error);
    }
  };

  return (
    <div>
      <h1>스크래핑 테스트 데이터 저장</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="저장할 URL 입력"
        />
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default Home;