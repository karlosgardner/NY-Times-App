

var React = require("react");


var Search = require("./Search");
var Result = require("./Result");
var Saved = require("./Saved");


class Main extends React.Component{
    constructor(){
        super();

        this.state = {
            topic:'',
            startYear: 0,
            endYear:'',
            data: []
        };
        this.setParent = this.setParent.bind(this);
    }

    setParent(data){
        this.setState({data: data});
        console.log(this.state.data);

        // var result = this.state.data;
        //
        // console.log(result);

        // result.map(function (el, index) {
        //     console.log(el);
        // });
    }


    render(){
        return(
            <div>
                <div className="jumbotron">
                    <h1>New York Times Article Scraper</h1>
                    <hr/>
                    <p>Search for articles </p>
                </div>

                <Search setParent = {this.setParent}/>
                <Result results = {this.state.data}/>
                <Saved />

            </div>
        );
    }
}


module.exports = Main;