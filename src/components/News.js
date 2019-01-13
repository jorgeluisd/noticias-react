import React, { Component } from 'react';
import New from './New';

class News extends Component {

    render() { 
        return ( 
            <div className="row">
                {this.props.news.map(data => (
                    <New 
                        key = {data.url}
                        new = {data}
                    />
                ))}
            </div>
        );
    }
}
 
export default News;