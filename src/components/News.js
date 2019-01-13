import React, { Component } from 'react';
import New from './New';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class News extends Component {

    render() { 
        return ( 
            <div className="row">
                <TransitionGroup>
                    {this.props.news.map(data => (
                        <CSSTransition
                            key = {data.url}
                            classNames="fade"
                            timeout={500}
                        >
                            <New new = {data} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        );
    }
}

News.propTypes = {
    news: PropTypes.array.isRequired
}
 
export default News;