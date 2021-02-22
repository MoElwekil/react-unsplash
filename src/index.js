import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// import search form 
import SearchForm from './component/searchForm'

// BOOTSTRAP
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    // call back the search term from the search form component

    getSearchTerm(term){
        
    }
    render(){
        return(
            <div>
                <SearchForm onSubmit={this.getSearchTerm} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))