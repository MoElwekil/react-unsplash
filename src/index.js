import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import unsplash from './api/unsplash';

// import search form 
import SearchForm from './component/searchForm'
// import images list
import ImagesList from './component/imagesList'

// BOOTSTRAP
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// custom style
import './styles/app.scss'

class App extends Component {
    state = {imagesCount: null, images: []}

    // call back the search term from the search form component
    getSearchTerm = async(term) => {
        const response = await unsplash.get('/search/photos',{
            params: {query: term}
        })

        this.setState({images: response.data.results, imagesCount: response.data.results.length})
        console.log(response);
    }
    render(){
        return(
            <div>
                <SearchForm onSubmit={this.getSearchTerm} />
                <ImagesList imageCount={this.state.imagesCount} imageList={this.state.images}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))