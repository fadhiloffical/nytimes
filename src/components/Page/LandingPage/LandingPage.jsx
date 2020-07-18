import React, { Component } from 'react';

import './LandingPage.css';

import Loader from '../../Loader/Loader'


class LandingPage extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          datas: [],
          img:[],
          loading: true,
          single_datas:1,
        };
      }
     
      componentDidMount() {
        this.setState({
            loading: true,
          });
        fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=8QyTvir2Cdybf9fNXIkKci0Q2CAjTYHw')
          .then(response => response.json())
          .then(datas => 
            this.setState({
              datas: datas.results,
              loading: false,
            })
            // console.log('This is your datas', datas.results[1].multimedia[3].url)
            )
          .catch(error => console.log('Error:', error));
          
      }
      
    fetchData = (i) => {
        this.setState({
            loading: true,
          });
        const showResults = false;
        fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=8QyTvir2Cdybf9fNXIkKci0Q2CAjTYHw')
          .then(response => response.json())
          .then(single_datas =>  
            this.setState({
            single_datas: single_datas.results[i],
            loading: false,
            showResults:true,
          }),
            // console.log('This is your datas', single_datas.results[i].des_facet)
          )
          .catch(error => console.log('Error:', error));
      }
      fetchAllData= () => {
        this.setState({
            showResults:false
          })
      }
      
    render() { 
        const { datas, loading, single_datas,showResults, image} = this.state;
        return ( 
            <>
                <div className="fd-masonry-grid">

                <div className="myContainer" >
                {loading ? 
                <>
                 <Loader/>
                </> :
                <>

                { showResults ? <> 

               {loading ? <> <Loader/></>:
               <>
                <div className="singlePage">
                <div className="clearfix"></div>
                <div className="eskimo-page-title">
                    <h1><span>{single_datas.title}</span></h1>
                    <div className="eskimo-page-title-meta">
                        <div className="eskimo-cat-meta">
                            In {single_datas.section} &nbsp;
                        </div>
                        <div className="eskimo-date-meta">&nbsp;{single_datas.subsection} &nbsp;</div>
                        <div className="eskimo-date-meta"> &nbsp;{single_datas.published_date} &nbsp;</div>
                    </div>
                </div>
                
                <div className="eskimo-featured-img">
                    <img src={single_datas.multimedia[0].url} alt=""/>
                </div>
                <div className="eskimo-page-content">
                    <p className="sub-title">{single_datas.byline}</p>
                    <p>{single_datas.abstract}</p>
                    <p>Type: {single_datas.item_type}</p>
                    <p>Section: {single_datas.section}</p>
                    <p>Section: {single_datas.des_facet[1]}, {single_datas.des_facet[2]}</p>
                    <div className="clearfix"></div>
                    <div className="button">
                        <a ><button onClick={() => this.fetchAllData()}>Back Home</button></a>
                        <a  className="readMore" href={single_datas.url} target="_blank" rel="noopener noreferrer" ><button>Read More </button></a>
                    </div>
                </div>
                </div>
               </>}
                            
                </> : <>

                                {datas.map((data,i) => (

            <a onClick={() => this.fetchData(i)} target="_blank" rel="noopener noreferrer" key={i}>

                <div className="mynewsContent" key={i}>
            <div className='normal'>
            <div className='module module2'>
                <div className='content'>
                <div className="category">{data.section} -[{data.subsection}]</div>
                <h1 className='title'>{data.title} </h1>
                <h2 className='sub-title'>{data.byline}</h2>
                {/* <div className="description">{data.abstract}</div> */}
                <div className="meta">
                    <span className="timestamp">
                    <i className='fa fa-clock-o'></i>{data.published_date}
                    </span>
                </div>
                {/* <button >Read More</button> */}
                </div>
            </div>
            </div>
            </div>
           </a>
            ))}
                </> }
                
                </>}
                     <div>
                         
                     </div> 
                        
                    </div>
                </div>
                
            </>
         );
    }
}
 
export default LandingPage;

// const LandingPage = () => {
    
//     return ( 
//         <>
//         <div className="eskimo-masonry-grid">

//         </div>
//         </>
//      );
// }
 
// export default LandingPage;