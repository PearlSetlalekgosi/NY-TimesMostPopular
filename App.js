import React, { Component } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
class App extends Component {

  constructor(props)
  {
    super(props);

   this.state = {
      items:[]
     
   }
  }

  componentDidMount() {
     fetch('http://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=o87218MP4PbN1vZ5u92IVJ2GfcC2UFzA')
     .then(res=>res.json()).then(i=>{this.setState({items:i.results})});
  }

  render(){
      return (
        <div className="App">
       <h1>NY Times most popular Articles</h1>
        <table class="table table-striped">
          <tbody>
            <tr>
              <th>Title</th>
              
              <th>Section</th>
              <th>Sub section</th>
              <th>Author</th>
              <th>Published date</th>
            </tr>
            {
              this.state.items.map(item=>(
                <tr  key={item.uri}>
                  <td><a href={item.url} target='_blank' rel='noreferrer'>{item.title}</a></td>
                 
                  <td>{item.section}</td>
                  <td>{item.subsection}</td>
                  <td>{item.byline}</td>
                  <td>{item.published_date}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        </div>
      );
    }
}


export default App;
