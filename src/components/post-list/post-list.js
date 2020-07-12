import React from 'react';
import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';
import PropTypes from 'prop-types';

import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    // eslint-disable-next-line
    const elements = posts.map((item) => {

        if (typeof(item) === "object" && item !== null && Array.isArray(item) === false
        && Object.entries(item).length !== 0) {
            const {id, ...itemProps} = item;
            return (
                <li key={id} className="list-group-item">
                    <PostListItem {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}/>
                </li>
            )
        }
    });
    
    return (
        <ListGroup className="app-list">
            {elements.length ? elements : <p>No twit!</p>}
        </ListGroup>
    )
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggleImportant: PropTypes.func.isRequired,
    onToggleLiked: PropTypes.func.isRequired
}


export default PostList;