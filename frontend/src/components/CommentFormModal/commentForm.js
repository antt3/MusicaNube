import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import * as commentsReducer from "../../store/commentsReducer";

import './CommentOnPost.css';

const CommentForm = ({sessionUser, setShowModal, song}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);
  
    if (!sessionUser) return <Redirect to="/splash" />;
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (content !== "") {
            setErrors([]);
            const comment = {
                content,
                sessionUser,
                song
            };
            const returnedComment = await dispatch(commentsReducer.writeComment(comment));
            
            if (returnedComment) {
                reset();

                setShowModal(false);

                return history.push(`/songs/${returnedComment.postId}`);
            }
            
        }
        return setErrors(['Must write a comment']);
    };

    const reset = () => {
        setContent('');
    };
  
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                Create a comment
                <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CommentForm;