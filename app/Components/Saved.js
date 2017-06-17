
var React = require("react");

class Saved extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Saved Articles</h3>
                </div>
                <div className="panel-body">
                    <div className="info">
                        <p>Alien Invade Paris</p>
                        <p>Date Saved: 10/14/15</p>
                        <button className="btn btn-default">Save</button>
                    </div>
                    <p className="note"><strong>Notes:</strong> What a wonderful achievement for mankind</p>

                    <div className="info">
                        <p>Obama Gives Commencement</p>
                        <p>Date Saved: 10/14/15</p>
                        <button className="btn btn-default">Save</button>
                    </div>
                    <p className="note"><strong>Notes:</strong> What a wonderful achievement for mankind</p>

                    <div className="info">
                        <p>Trump Steals Nuclear Codes</p>
                        <p>Date Saved: 10/14/15</p>
                        <button className="btn btn-default">Save</button>
                    </div>
                    <p className="note"><strong>Notes:</strong> What a wonderful achievement for mankind</p>
                </div>
            </div>
        );
    }
}

module.exports = Saved;