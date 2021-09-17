import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NewsList, Header } from '../components';
import { selectNews } from '../redux/selectors';

const mapStateToProps = (state) => {
  return {
    news: selectNews(state),
  };
};

const Home = ({ news }) => {
  const [searchItem, setSearchItem] = useState('');

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  return (
    <>
      <Header searchNeeded={true} handleChange={handleChange} />

      <NewsList
        news={news.filter((ann) =>
          ann.title.toLowerCase().includes(searchItem.toLowerCase())
        )}
      />
    </>
  );
};

export default connect(mapStateToProps)(Home);
