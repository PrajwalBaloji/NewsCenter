import axios from 'axios';
import React, { Component } from 'react';

class TopIndia extends Component {
    constructor(props) {
        super(props);
        this.state={
            articlesTop:[]
        }
    }

    componentDidMount(){
        let url='https://newsapi.org/v2/top-headlines?country=in&pageSize=100&apiKey=8f876b30a67c4bb6bb9079b83568ab6b'
        axios.get(url).then(response=>{
            this.setState({
                articlesTop:response.data.articles
            });
        })
    }
    
    render() {
        
        return (
            <div>
                <h1 id='h1heading'>top headlines from india {'>'}{'>'}{'>'}{'>'}</h1>
                <div className='container'>
                    {
                        this.state.articlesTop.map((xarticle,index)=>{
                            return(
                                <div className='row m-4 new-row bg-light' key={index}>
                                    <div className='col-4'>
                                        <img src={xarticle.urlToImage} className='img-fluid m-2' alt='image failed to load'/>
                                        <p className='bg-light text-center text-info'>{xarticle.source.name}</p>
                                    </div>
                                    <div className='col-8 '>
                                        <h3 className='text-dark'>{xarticle.title}</h3>
                                        <p className='m-1 text-muted'>{xarticle.description}</p>
                                        <p><span>{xarticle.publishedAt}</span><span className='ml-5'><a href={xarticle.url} target='_blank'>Click to read full article</a></span></p>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default TopIndia;