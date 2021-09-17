import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { deleteNews } from '../redux/ActionCreators';

const DeleteNews = ({ dispatch, annId }) => {
  const onDelete = (annId) => {
    dispatch(deleteNews(annId));
  };

  return (
    <Button
      className='float-right ml-1'
      outline
      color='danger'
      onClick={() => onDelete(annId)}
    >
      <span className='fa fa-trash' />
    </Button>
  );
};

export default connect()(DeleteNews);
