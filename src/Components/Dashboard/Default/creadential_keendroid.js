import React from 'react';
import { H5, LI, P, UL } from '../../../AbstractElements';
import { LatestActivity } from '../../Common/Data/Dashboard';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Card className="latest-update-sec mt-3 " style={{width:"103%"}}>
            <CardHeader>
                <div className="header-top d-sm-flex align-items-centerss">
                    <H5>Keendroid credentials</H5>
                    <div className="center-content">
                        <UL attrUL={{ className: 'week-date flex-row' }}>
                            <LI attrLI={{ className: 'font-primary' }} >Confedential</LI>
                            <LI>not for shared</LI>
                        </UL>
                    </div>
                </div>
            </CardHeader>
            <CardBody>
                <div className="table-responsive">
                    <table className="table table-bordernone m-0">
                        <tbody>
                        
                            {/* {LatestActivity.map((item) => */}
                                {/* <tr key={item.id}> */}
                                <tr>
                                    <th> username:</th>
                                    <td>keendroid</td>
                                    </tr>
                                    <tr>
                                    <th> Password:</th>
                                    <td>123456</td>
                                    </tr>
                                    <tr>
                                    <th> Phone:</th>
                                    <td>8442000088</td>
                                    </tr>
                                    <tr>
                                    <th> Address:</th>
                                    <td>Jaipur</td>
                                    </tr>
                                    <tr>
                                    <th> Pin:</th>
                                    <td>302013</td>
                                    </tr>
                                 
                                    
                                    {/* </th> */}
                                    {/* <td><Link to={`${process.env.PUBLIC_URL}/app/todo`} >Edit</Link></td> */}
                                    {/* <td><Link to={`${process.env.PUBLIC_URL}/app/todo`} >Delete</Link></td> */}
                                {/* </tr> */}
                            {/* )} */}
                            
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default Login;