import React from 'react';
import ReactDom from 'react-dom';
import '../style.css';

function Home(){
    return(
        <div>
            <div className="container bg card">
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
                    <div class="card">
                        <div class="card-header alert alert-primary">
                            <center>
                                <h5>Total Cost</h5>
                            </center>
                        </div>
                        <div class="card-body txt">
                            <center>
                                158222255
                            </center>
                        </div>
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
                    <div class="card">
                        <div class="card-header alert alert-success">
                            <center>
                                <h5>University Cost</h5>
                            </center>
                        </div>
                            <div class="card-body txt">
                                <center>
                                    158222255
                                </center>
                            </div>
                        </div>
                    </div>

                    {/* Monthly Cost */}
                    <div className="col-sm-4">
                        <div class="card">
                            <div class="card-header alert alert-warning">
                                <center>
                                    <h5>Housing Fee</h5>
                                </center>
                            </div>
                            <div class="card-body txt">
                                <center>
                                    158222255
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>

                <br/>

                <div className="row">
                    {/* University Cost */}
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <div class="card">
                            <div class="card-header alert alert-info">
                                <center>
                                    <h5>Father's Cost</h5>
                                </center>
                            </div>
                            <div class="card-body txt">
                                <center>
                                    158222255
                                </center>
                            </div>
                        </div>
                    </div>

                    {/* Monthly Cost */}
                    <div className="col-sm-4">
                        <div class="card">
                            <div class="card-header alert alert-secondary">
                                <center>
                                    <h5>Other's Cost</h5>
                                </center>
                            </div>
                            <div class="card-body txt">
                                <center>
                                    158222255
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                    
                </div>
                <br/><br/>
            </div>
        </div>
    )
}
export default Home