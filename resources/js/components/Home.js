import React from 'react';
import ReactDom from 'react-dom';
import '../style.css';

function Home(){
    return(
        <div>
            <div className="container">
                <div>
                    <center>
                        <h3 className="text-primary">Dashbord</h3>
                    </center>
                </div>
                {/* Total Cost Card */}
                <div className="row">
                    <div className="col-sm-4">
                        {/* Empty Left Row */}
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <text className="text-danger"> Total Cost </text>
                            12586522 
                        </div>
                    </div>
                    <div className="col-sm-4">
                        {/* Empty Right Row */}
                    </div>
                </div>

                <br/>
                <div className="row">
                    {/* University Cost */}
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <div className="card">
                            <text className="text-info">University Cost</text>
                            125966355
                        </div>
                    </div>

                    {/* Monthly Cost */}
                    <div className="col-sm-4">
                        <div className="card">
                            <text className="text-warning">Monthly Cost</text>
                            5236699
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>

                <br/>

                <div className="row">
                    {/* University Cost */}
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <div className="card">
                            <text className="text-success">Father's Cost</text>
                            125966355
                        </div>
                    </div>

                    {/* Monthly Cost */}
                    <div className="col-sm-4">
                        <div className="card">
                            <text className="text-secondary">Others Cost</text>
                            5236699
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        </div>
    )
}
export default Home