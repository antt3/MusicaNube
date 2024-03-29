import React, { useEffect } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as songsReducer from '../../store/songsReducer';
import * as commentsReducer from '../../store/commentsReducer';

import EditSongModal from '../EditSongModal';
import DeleteSongModal from '../DeleteSongModal';
import CommentFormModal from '../CommentFormModal';
import DeleteCommentModal from '../DeleteCommentModal';
import EditCommentModal from '../EditCommentModal';

import { useSong } from '../../context/songContext';

import './singleSong.css';

const SingleSong = ({sessionUser, songs, comments }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const { setCurrentSong } = useSong();

    useEffect(() => {
        dispatch(songsReducer.fetchSongs());
        dispatch(commentsReducer.fetchComments());
    }, [dispatch]);

    const onClick = (e, song) => {
        e.stopPropagation();

        history.push(`/profiles/${song.userId}`)
    };

    const onClick2 = (e, comment) => {
        e.stopPropagation();

        history.push(`/profiles/${comment.userId}`)
    };

    if (!sessionUser) return <Redirect to="/splash" />;
    const song = Object.values(songs).find(song => song.id === +id);

    if (song === undefined || sessionUser.id === undefined) {
        return (
            <></>
        );
    };

    const songComments = Object.values(comments).filter(comment => comment.songId === song.id);

    if (song.userId === sessionUser.id) {

        return (
          <> 
            <article className='song_article'>
                <div key={song.id} className="single_song" onClick={()=> setCurrentSong([song.link])}>
                    <img src={song.songPic} alt={song.title} className='single_img'></img>
                    <p className='single_title' >{song.title} - - - By: {song.artist}</p>
                    {!!song.User ? <p className='single_username' onClick={(e)=> onClick(e, song)}>{song.User.username}</p> : <p></p>}
                    <EditSongModal sessionUser={sessionUser} song={song} onClick={(e)=> e.stopPropagation()} />
                    <DeleteSongModal sessionUser={sessionUser} song={song} onClick={(e)=> e.stopPropagation()} />
                </div>
                <CommentFormModal sessionUser={sessionUser} song={song} />
                {songComments.length === 1 ? <h1>1 comment</h1> : <h1>{songComments.length} comments</h1>}
                <div>
                    { songComments.length > 0 ? songComments.map((songComment) => {
                        if (songComment.userId === sessionUser.id) {
                            return (
                                <div className='single_comment' key={songComment.id}>
                                    <p className='comment_content'>{songComment.content}</p>
                                    {!!songComment.User ? <p className='comment_username' onClick={(e)=> onClick2(e,songComment)}>{songComment.User.username}</p> : <p></p>}
                                    <DeleteCommentModal sessionUser={sessionUser} songComment={songComment} />
                                    <EditCommentModal sessionUser={sessionUser} comment={songComment} song={song} />
                                </div>
                            );
                        } else { 
                            return (
                                <div className='single_comment' key={songComment.id}>
                                    <p className='comment_content'>{songComment.content}</p>
                                    {!!songComment.User ? <p className='comment_username' onClick={(e)=> onClick2(e,songComment)}>{songComment.User.username}</p> : <p></p>}
                                </div>
                            )}
                    }) : <p>There are no comments yet...</p>}
                </div>
            </article>
          </>
        );
    } else {
        return (
            <>
                <article className='song_article'>
                    <div key={song.id} className="single_song" onClick={()=> setCurrentSong([song.link])}>
                        <img src={song.songPic} alt={song.title} className='single_img'></img>
                        <p className='single_title' >{song.title} - - - By: {song.artist}</p>
                        {!!song.User ? <p className='single_username' onClick={(e)=> onClick(e, song)}>{song.User.username}</p> : <p></p>}
                    </div>
                    <CommentFormModal sessionUser={sessionUser} song={song} />
                    <h1>{songComments.length} comments</h1>
                    <div>
                    { songComments.length > 0 ? songComments.map((songComment) => {
                        if (songComment.userId === sessionUser.id) {
                            return (
                                <div className='single_comment' key={songComment.id}>
                                    <p className='comment_content'>{songComment.content}</p>
                                    {!!songComment.User ? <p className='comment_username' onClick={(e)=> onClick2(e,songComment)}>{songComment.User.username}</p> : <p></p>}
                                    <DeleteCommentModal sessionUser={sessionUser} songComment={songComment} />
                                    <EditCommentModal sessionUser={sessionUser} comment={songComment} song={song} />
                                </div>
                            );
                        } else {
                            return (
                            <div className='single_comment' key={songComment.id}>
                                <p className='comment_content'>{songComment.content}</p>
                                {!!songComment.User ? <p className='comment_username' onClick={(e)=> onClick2(e,songComment)}>{songComment.User.username}</p> : <p></p>}
                            </div>
                        )}
                    }) : <p>There are no comments yet...</p>}
                    </div>
                </article>
            </>
        );  
    }
};

export default SingleSong;