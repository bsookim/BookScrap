package com.scrap.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scrap.entity.BookReply;
import com.scrap.request.BookReplyRequest;

public interface BookReplyRepository extends JpaRepository<BookReply, Long>{



}
