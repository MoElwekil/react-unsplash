import React, { Component } from 'react'

class ImagesList extends Component {

    render(){
        const image = this.props.imageList.map(({id, urls,description}) => {
            return <li className="list-group-item"><img src={urls.full} alt={description} key={id} /></li>
        })

        return(

            <div className="col-12">
                <div className="mt-5 col-10 m-auto">
                    <ul className="list-group">
                        {image}
                    </ul>
                </div>
            </div>
        )
    }
}
export default ImagesList