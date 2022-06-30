import React, { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as songsReducer from '../../store/songsReducer';
import * as commentsReducer from '../../store/commentsReducer';

import EditSongModal from '../EditSongModal';
import DeleteSongModal from '../DeleteSongModal';
import CommentFormModal from '../CommentFormModal';
import DeleteCommentModal from '../DeleteCommentModal';

import { useSong } from '../../context/songContext';

import './singleSong.css';

const SingleSong = ({sessionUser, songs, comments }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { setCurrentSong } = useSong();

    useEffect(() => {
        dispatch(songsReducer.fetchSongs());
        dispatch(commentsReducer.fetchComments());
    }, [dispatch]);

    if (!sessionUser) return <Redirect to="/splash" />;
    const song = Object.values(songs).find(song => song.id === +id);

    const songComments = Object.values(comments).filter(comment => comment.songId === song.id);
    console.log('----s here----', songs);

    if (song.userId === sessionUser.id) {
        console.log('=====sC here-----', songComments);

        return (
          <> 
            <article>
                <div key={song.id} className="song" onClick={()=> setCurrentSong(song.link)}>
                    <img src={song.songPic} alt={song.title} className='songImg'></img>
                    <p className='title_artist' >{song.title} - - - By: {song.artist}</p>
                    <p className='song_username'>{song.User.username}</p>
                    <EditSongModal sessionUser={sessionUser} song={song} />
                    <DeleteSongModal sessionUser={sessionUser} song={song} />
                </div>
                <CommentFormModal sessionUser={sessionUser} song={song} />
                <h1>{Object.values(songComments).length} comments</h1>
                <div>
                    { songComments.length > 0 ? songComments.map((songComment) => {
                        if (songComment.userId === sessionUser.id) {
                            return (
                                <div key={songComment.id}>
                                    <p>{songComment.content}</p>
                                    <DeleteCommentModal sessionUser={sessionUser} songComment={songComment} />
                                </div>
                            );
                        } else { 
                            return (
                                <div key={songComment.id}>
                                    <p>{songComment.content}</p>
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
                <article>
                    <div key={song.id} className="song" onClick={()=> setCurrentSong(song.link)}>
                        <img src={song.songPic} alt={song.title} className='songImg'></img>
                        <p className='title_artist' >{song.title} - - - By: {song.artist}</p>
                        <p className='song_username'>{song.User.username}</p>
                    </div>
                    <CommentFormModal sessionUser={sessionUser} song={song} />
                    <h1>{Object.values(songComments).length} comments</h1>
                    <div>
                    { Object.values(songComments).length > 0 ? Object.values(songComments).map((songComment) => {
                        if (songComment.userId === sessionUser.id) {
                            return (
                                <div key={songComment.id}>
                                    <p>{songComment.content}</p>
                                    <DeleteCommentModal sessionUser={sessionUser} songComment={songComment} />
                                </div>
                            );
                        } else {
                            return (
                            <div key={songComment.id}>
                                <p>{songComment.content}</p>
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