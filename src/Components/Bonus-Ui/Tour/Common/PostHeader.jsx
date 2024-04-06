import React, { Fragment } from 'react';
import { H5, H6, Image } from '../../../../AbstractElements';

const PostHeader = ({ h6 }) => {
    return (
        <Fragment>
            <div className="post-header">
                <div className="media">
                    <Image attrImage={{ className: 'img-thumbnail rounded-circle me-3', src: `${require('../../../../assets/images/user/7.jpg')}`, alt: 'Generic placeholder image' }} />
                    <div className="media-body align-self-center"><a href="social-app.html">
                        <h5>Keendroid</h5></a>
                        {/* <H6>Keendroid</H6> */}
                    </div>
                </div>
                <div className="post-setting"><i className="fa fa-ellipsis-h"></i></div>
            </div>
        </Fragment>
    );
};

export default PostHeader;