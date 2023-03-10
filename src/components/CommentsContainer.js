import React, { useState, useEffect } from 'react';
import { COMMENTS_API_DATA } from '../utils/apiData';

const Comment = ({ comment }) => {
    return (
        <>
            <p className='text-sm text-gray-500 mb-1'>{comment.name}</p>
            <p className="text-sm">{comment.body}</p>
        </>
    )
}

const CommentsList = ({ comments }) => {
    let a = null;
    return comments.map((comment) => (
        <div key={comment.id}>
            <Comment comment={comment} />
            <hr className='my-3 border-t-slate-50' />
            <div className='pl-3 border-l border-slate-100'>
                { comment.replies ? <CommentsList comments={comment.replies} /> : null}
            </div>

        </div>
    )
    )
}

const CommentsContainer = () => {

    const [commentsData, setCommentsData] = useState(COMMENTS_API_DATA);

    return (
        <div className="mt-8">
            <h1 className="text-2xl mb-4 font-bold">Comments: </h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}
export default CommentsContainer;