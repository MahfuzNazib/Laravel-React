import React from 'react';
import ReactDom from 'react-dom';

function Accounts(){
    return(
        <div className="container border-line">
            <br/>
            <center>
                <h4 className="text-success">Accounts Section</h4>
            </center>

            <div className="row">
                <div className="col-sm-5">
                    <div class="card">
                        <div class="card-header alert alert-primary">
                            <center>
                                Add New Transection
                            </center>
                        </div>
                        <div class="card-body">Content</div>
                        <div class="card-footer">Footer</div>
                    </div>
                </div>

                <div className="col-sm-7">
                    <h1>Transection Table</h1>

                </div>
            </div>
        </div>
    )
}
export default Accounts