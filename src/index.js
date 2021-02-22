import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Unsplash from './api/unsplash'

// import search form 
import SearchForm from './component/searchForm'

// BOOTSTRAP
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import unsplash from './api/unsplash';

class App extends Component {
    state = {imagesCount: null}

    // call back the search term from the search form component
    getSearchTerm = async(term) => {
        const response = await unsplash.get('/search/photos',{
            params: {query: term}
        })

        console.log(response.data.results.length)
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