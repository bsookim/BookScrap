import React, { useEffect, useState } from "react";
import { useParams, Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { BookResponse } from "../model/Book";
import "../css/Detail.css";

const BookList: React.FC = () => {
    const { id } = useParams();
    const [book, setBook] = useState<BookResponse | null>(null);
    const [newReply, setNewReply] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const deleteBook = async () => {
        axios
            .delete(`http://localhost:8080/book/delete/${id}`)
            .then(() => {
                navigate('/books/Books')
            })
            .catch((err) => console.error(err));
    };

    const detailBookDetail = async () => {
        axios
            .get(`http://localhost:8080/book/find/${id}`)
            .then((res) => {
                setBook(res.data);
            })
            .catch((err) => console.error(err));
    };

    const saveBookReply = () => {
        if (!newReply.trim()) return;
        axios
            .post(`http://localhost:8080/bookReply/${id}/save`, { content: newReply })
            .then((res) => {
                const savedReply = res.data;
                setBook((prev) =>
                    prev ? { ...prev, reply: [...prev.reply, savedReply] } : prev
                );
                setNewReply("");
            })
            .catch((err) => console.error(err));
    };

    const deleteBookReply = (replyId: number) => {
        axios
            .delete(`http://localhost:8080/bookReply/delete/${replyId}`)
            .then(() => {
                setBook((prev) =>
                    prev ? { ...prev, reply: prev.reply.filter((r) => r.id !== replyId) } : prev
                );
            })
            .catch((err) => console.error(err));
    };

    const startEditBookReply = (replyId: number, currentContent: string) => {
        setEditingId(replyId);
        setContent(currentContent);
    };

    const editBookReply = (replyId: number) => {
        axios
            .put(`http://localhost:8080/bookReply/${replyId}/update`, { content: content })
            .then(() => {
                setBook((prev) =>
                    prev
                        ? {
                            ...prev,
                            reply: prev.reply.map((r) =>
                                r.id === replyId ? { ...r, content: content } : r
                            ),
                        }
                        : prev
                );
                setEditingId(null);
                setContent("");
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        detailBookDetail();
    }, []);

    if (!book) return <div>로딩중...</div>;

    return (
        <div className="detail-container">
            <div className="detail-image-box">
                <img src={book.thumbNail} className="detail-image" />
            </div>

            <div className="detail-info">
                <div className="detail-title">{book.title}</div>
                <div className="detail-price">{book.price}원</div>
                <div className="detail-stock">재고: {book.stock}</div>
                <div className="detail-description">{book.description}</div>
                <div style={{ marginTop: "12px" }}>
                    <Link to={`/update/${book.id}`} state={ {title:book.title}}><button >게시글 수정</button></Link>
                    <button onClick={deleteBook}>게시글 삭제</button>
                </div>
                <div className="reply-box">
                    <div className="reply-title">댓글</div>

                    {book.reply?.map((r) => (
                        <div key={r.id} className="reply-item">
                            {editingId === r.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                    />
                                    <button onClick={() => editBookReply(r.id)}>저장</button>
                                    <button onClick={() => setEditingId(null)}>취소</button>
                                </>
                            ) : (
                                <>
                                    {r.content}
                                    <button onClick={() => startEditBookReply(r.id, r.content)}>수정</button>
                                    <button onClick={() => deleteBookReply(r.id)}>삭제</button>
                                </>
                            )}
                        </div>
                    ))}

                    <div style={{ marginTop: "12px" }}>
                        <input
                            type="text"
                            value={newReply}
                            placeholder="댓글 작성"
                            onChange={(e) => setNewReply(e.target.value)}
                        />
                        <button onClick={saveBookReply}>작성</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookList;
