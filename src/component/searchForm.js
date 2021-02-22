// import react
import React, {Component} from 'react'

class SearchForm extends Component {
    state = {searchTerm: ''}

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.searchTerm)
    }

    render(){
        return(
            <div className="col-12">
                <div className="col-4 m-auto mt-4">
                    <h1>Unsplash API</h1>
                    <p>You could use the search box below to get some photos from Unsplash.com website</p>

                    <form className="mt-5" onSubmit={this.onFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Image Search</label>
                            <input type="search" className="form-control" id="exampleFormControlInput1" placeholder="Image Category Name" value={this.state.searchTerm} 
                            onChange={(e) => this.setState({searchTerm: e.target.value}) }/>
                        </div>

                        <div className="col-12">
                            <input type="submit" value="Search" className="btn btn-primary col-12" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchForm