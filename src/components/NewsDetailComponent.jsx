import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { RenderNews, Header } from '.';
import { FindSimilar } from '../News_board';

const mapStateToProps = (state) => {
  return {
    announcements: state,
  };
};

const NewsDetailComponent = ({ news, match }) => {
  const { annId } = match.params;
  const ann = news.news.find((ann) => ann.ID === annId);
  if (!ann) {
    return <h3 className='text-center'> News Not Found :( </h3>;
  }

  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/home'> Go to announcement list! </Link>
            </BreadcrumbItem>
            <BreadcrumbItem active> {ann.title} </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <RenderNews
          ann={ann}
          divClass='col-12 mt-5'
          cardClass='text-center mt-2'
          editBtnNeeded={true}
          fullText={true}
        />

        <div className='mt-5'>
          <Card className='text-center'>
            <CardHeader tag='h3' className='mb-3, text-danger'>
              {' '}
              Top 3 Similar News{' '}
            </CardHeader>

            <FindSimilar news={news.news} selectedAnn={ann} />
          </Card>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps)(NewsDetailComponent);
