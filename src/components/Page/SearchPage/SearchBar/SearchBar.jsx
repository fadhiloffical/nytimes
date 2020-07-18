import React, { Component } from 'react';

import Loader from '../../../Loader/Loader';

class Search extends Component {
    token = null;
    state = {
      query: "",
      searchResult: [],
      loading: true,
    };
  
    onChange = e => {
      const { value } = e.target;
      this.setState({
        query: value
      });
  
      this.search(value);
    };

    

  
    search = query => {
      this.setState({
        loading: true,
      });
      const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=8QyTvir2Cdybf9fNXIkKci0Q2CAjTYHw`;

        // console.log(url)
      fetch(url)
        .then(results => results.json())
        .then(data => {
            this.setState({ searchResult: data.response.docs, loading: false });
            // console.log('This is your datas', data.response.docs)
        });
    };
  
    componentDidMount() {
      this.search("");
    }
  
    render() {
        const { datas, loading} = this.state;
      return (
          <>
        <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            className="search-box"
            placeholder="Search for..."
            onChange={this.onChange}
          />
            {/* <input type="submit" value="Submit" /> */}
            
        </form>
        {loading ? <> <Loader/> </>:
        <> 
        {this.state.searchResult.map((data, i) => (
                <div className="mynewsContent" key={i}>
            <div className='normal'>
            <div className='module module1'>
            
                <div className="searchWrapper">
                <div className=''>
                {/* <div className="category">{data.section} -[{data.subsection}]</div> */}
                <h1 className='title'>{data.headline.main} </h1>
                {/* <h2 className='sub-title'>{data.byline}</h2> */}
                <div className="description">{data.abstract}</div>
                <div className="meta">
                    <span className="timestamp">
                    <i className='fa fa-clock-o'></i>{data.pub_date}
                    </span>
                </div>
                {/* <button >Read More</button> */}
                </div>
                </div>
            </div>
            </div>
            </div>
          ))}
        </>}
        
        </>
            
          
          
      );
    }
}
 
export default Search;
