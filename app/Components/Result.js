
var React = require("react");

class Result extends React.Component{
    constructor(){
        super();

    }


    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Result</h3>
                </div>
                <div className="panel-body">

                    {this.props.results.map(({_id, lead_paragraph, web_url, headline}) => (
                        <div className="info" key= {_id}>
                            <div className="col">
                                <h2>{headline.main}</h2>
                                <p>{lead_paragraph}</p>
                                <a href={web_url} target="_blank">{web_url}</a>
                            </div>
                            <button className="btn btn-default">Save</button>
                        </div>
                    ))}

                </div>
            </div>
        );
    }
}

module.exports = Result;