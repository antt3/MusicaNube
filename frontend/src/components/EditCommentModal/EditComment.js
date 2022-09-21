import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import * as commentsReducer from "../../store/commentsReducer";

import './EditComment.css';

const CommentForm = ({sessionUser, setShowModal, song, comment}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);
  
    if (!sessionUser) return <Redirect to="/splash" />;
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        const userId = sessionUser.id;
        const songId = song.id;
        if (content === "") {
            return setErrors(['Must write a comment.']);
        } else if (content.length > 255) {
            return setErrors(['Comment must be less than 255 characters long.'])
        } else {
            setErrors([]);
            const comment = {
                content,
                userId,
                songId
            };

            const returnedComment = await dispatch(commentsReducer.updateComment(comment));

            if (returnedComment) {
                reset();
                setShowModal(false);
                return history.push(`/songs/${returnedComment.songId}`);
            };
        };
    };

    const reset = () => {
        setContent('');
    };
  
    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
                    Edit your comment
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CommentForm;