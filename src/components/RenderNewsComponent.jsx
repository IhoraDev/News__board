import React from 'react';
import { Card, CardHeader, CardText, CardBody, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { EditNews, DeleteNews } from '../News_board';

const RenderNews = (props) => {
  return (
    <div className={props.divClass}>
      <Card
        className={props.cardClass}
        style={{
          borderRadius: '40px',
          border: '2px solid blue',
        }}
      >
        <CardHeader tag='h3'>
          {props.deleteBtnNeeded ? <DeleteNews annId={props.ann.ID} /> : null}
          {props.editBtnNeeded ? <EditNews ann={props.ann} /> : null}
          <Link to={`/news/${props.ann.ID}`} style={{ textDecoration: 'none' }}>
            {props.ann.title}
          </Link>
        </CardHeader>
        <Link to={`/news/${props.ann.ID}`} style={{ textDecoration: 'none' }}>
          <CardBody>
            <CardText>
              {props.fullText
                ? props.ann.description
                : props.ann.description.substring(0, 150) + ' ...'}
            </CardText>
          </CardBody>
          <CardFooter className='text-muted text-right'>
            {props.ann.edited ? (
              <i className='text-danger'> Edited on: &nbsp; </i>
            ) : (
              <i className='text-info'> Posted on: &nbsp; </i>
            )}
            <b>{props.ann.date}</b>
          </CardFooter>
        </Link>
      </Card>
    </div>
  );
};
export default RenderNews;
