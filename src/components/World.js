import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      keyword: "",
      serverResponse: "",
    };
  }

  componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=world&language=en&apiKey=8f876b30a67c4bb6bb9079b83568ab6b";
    axios
      .get(url)
      .then((response) => {
        this.setState({
          articles: response.data.articles,
        });
      })
      .catch(() => {
        console.log("in catch component did mount now");
        this.setState({
          serverResponse: "error",
        });
      });
  }

  processKeyword = (obj) => {
    this.setState({
      keyword: obj.target.value,
    });
  };

  searchKeyword = () => {
    let key = this.state.keyword;
    if (key === "") {
      document.getElementById("emptyKeyword").innerText =
        "please enter something to search......!";
    } else {
      document.getElementById("emptyKeyword").innerText = "";
      let url = `https://newsapi.org/v2/everything?q=${key}&language=en&apiKey=8f876b30a67c4bb6bb9079b83568ab6b`;
      axios
        .get(url)
        .then((response) => {
          this.setState({
            articles: response.data.articles,
          });
        })
        .catch(() => {
          console.log("in catch search now");
          this.setState({
            serverResponse: "error",
          });
        });
    }
  };

  render() {
      
    if (this.state.serverResponse === "error") {
      return (
        <div id="errorDisplay" className='text-center'>
          <img src='network.gif' className='img-fluid' />
        </div>
      );
    } else {
      return (
        <div>
          <div className="container m-3">
            <div className="row">
              <div className="col-7">
                <h2 id="h1heading"> Welcome to news center {">>>>>>"} </h2>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search a keyword"
                  onChange={this.processKeyword}
                  value={this.state.keyword}
                />
              </div>
              <div className="col-1">
                <button
                  className="btn btn-primary"
                  onClick={this.searchKeyword}
                >
                  {" "}
                  Search
                </button>
              </div>
            </div>
          </div>
          <p id="emptyKeyword" className="text-danger text-center"></p>

          <div className="container">
            {this.state.articles.map((xarticle, index) => {
              return (
                <div className="row m-4 new-row bg-light" key={index}>
                  <div className="col-4">
                    <img
                      src={xarticle.urlToImage}
                      className="img-fluid img-rounded m-2"
                      alt=" failed to load"
                    />
                    <p className="bg-light text-center text-info">
                      {xarticle.source.name}
                    </p>
                  </div>
                  <div className="col-8 ">
                    <h3 className="text-dark">{xarticle.title}</h3>
                    <p className="m-1 text-muted">{xarticle.description}</p>
                    <p>
                      <span>{xarticle.publishedAt}</span>
                      <span className="ml-5">
                        <a href={xarticle.url} target="_blank">
                          Click to read full article
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default Home;
