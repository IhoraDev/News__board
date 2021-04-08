import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { RenderAnnouncement, Header } from '../components';
import { FindSimilar } from '../Announcement_actions';


const mapStateToProps = (state) => {
    return {
        announcements: state
    }
}

const AnnouncementDetailComponent = ({announcements, match }) => {

    const { annId } = match.params;
    const ann = announcements.announcements.find(ann => ann.ID === annId);
    if(!ann) {
        return (
            <h3 class="text-center"> Announcement Not Found :( </h3>
        );
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home"> Go to announcement list! </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active> {ann.title} </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <RenderAnnouncement
                    ann={ann}
                    divClass="col-12 mt-5"
                    cardClass="text-center mt-2"
                    editBtnNeeded={true}
                    fullText={true}
                />

                <div className="mt-5">
                    <Card className="text-center">
                        <CardHeader
                            tag="h3"
                            className="mb-3, text-danger"
                        > Top 3 Similar Announcements </CardHeader>

                        <FindSimilar
                            announcements={announcements.announcements}
                            selectedAnn={ann}
                        />
                    </Card>
                </div>
            </div>
        </>
    );
}

export default connect(mapStateToProps)(AnnouncementDetailComponent);
