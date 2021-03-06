import React from 'react';
import { RenderNews } from '../components';

const FindSimilar = ({ news, selectedAnn }) => {
  let all_words_count = new Map();

  news.map((ann) => {
    let title_word_count = 0;
    let desc_words_count = 0;

    if (selectedAnn.ID !== ann.ID) {
      for (let i = 0; i < selectedAnn.title.split(' ').length; i++) {
        for (let j = 0; j < ann.title.split(' ').length; j++) {
          if (selectedAnn.title.split(' ')[i] === ann.title.split(' ')[j]) {
            title_word_count++;
          }
        }
      }
      for (let i = 0; i < selectedAnn.description.split(' ').length; i++) {
        for (let j = 0; j < ann.description.split(' ').length; j++) {
          if (
            selectedAnn.description.split(' ')[i] ===
            ann.description.split(' ')[j]
          ) {
            desc_words_count++;
          }
        }
      }
      all_words_count.set(ann.ID, title_word_count + desc_words_count);
    }
    return null;
  });

  let annID_list = [];
  let sorted_map = new Map(
    [...all_words_count.entries()].sort((a, b) => b[1] - a[1])
  );
  for (let [key, value] of sorted_map.entries()) {
    if (value > 1) {
      annID_list.push(key);
      sorted_map.delete(key);
    }
  }
  annID_list.length = Math.min(annID_list.length, 3);

  if (annID_list.length > 0) {
    return annID_list.map((ID) => {
      const ann = news.find((ann) => ann.ID === ID);
      return (
        <div key={ann.ID} className='col-12'>
          <RenderNews
            ann={ann}
            divClass='mt-3'
            cardClass='text-center mt-2'
            fullText={false}
          />
        </div>
      );
    });
  }
  return <h3 class='text-center'> No Similar Announcements Were Found :( </h3>;
  // }
};

export default FindSimilar;
