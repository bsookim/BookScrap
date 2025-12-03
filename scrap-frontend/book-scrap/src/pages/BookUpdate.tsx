import React, { useState } from "react";
import axios from "axios";
import { useLocation,useParams,useNavigate  } from "react-router-dom";

const BookUpdate: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const [title, setTitle] = useState(location.state?.title || "");

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:8080/book/update/${id}`, {title});
            navigate(`/detail/${id}`)
        } catch (error) {
            console.error("에러", error);
        }
    };

    return (
        <div>
            <center>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목"
                />
                <button onClick={handleUpdate}> 수정 </button>
            </center>
        </div>
    );
};

export default BookUpdate;
