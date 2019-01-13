import React, { Component } from 'react';
import Header from './components/Header';
import News from './components/News';
import NewsForm from './components/NewsForm';

class App extends Component {

  state = {
    news: []
  }

  componentDidMount() {
    this.getNews()
  }

  getNews = (category = 'general') => {
    var url = 'https://newsapi.org/v2/top-headlines?' +
            'country=ve&' +
            `category=${category}&` +
            'apiKey=c0d13cd705fd4158b67f79ff8ddafbeb';

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then (news => {
          this.setState({
            news: news.articles
          })
        })
  }

  render() {
    return (
      <div className="contenedor-app">
          <Header 
            title = "Noticias"
          />

          <div className="container white contenedor-noticias">
            <NewsForm 
              getNews = {this.getNews}
            />

            <News 
              news = {this.state.news}
            />
          </div>
      </div>
    );
  }
}

export default App;
