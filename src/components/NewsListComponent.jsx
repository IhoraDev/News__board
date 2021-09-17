import React from 'react';
import { AddNews } from '../News_board';
import { RenderNews } from '../components';

const NewsList = (props) => {
  const rendered_anns = props.news.map((ann) => {
    return (
      <div className='col-6' key={ann.ID}>
        <RenderNews
          ann={ann}
          divClass='col-12 mt-5'
          cardClass='text-center'
          deleteBtnNeeded={true}
          fullText={false}
        />
      </div>
    );
  });

  return (
    <div className='container'>
      <AddNews />
      <div className='row'>{rendered_anns}</div>
    </div>
  );
};

export default NewsList;
