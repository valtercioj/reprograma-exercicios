import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'
import { postTweet } from '../../service/tweets'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      novoTweet: '',
      tweets: [],
    }
  }

  adicionaTweet = (event) => {
    event.preventDefault();

    const postNewTweet = {
      conteudo: this.state.novoTweet,
    }

    postTweet(postNewTweet, localStorage.getItem('TOKEN'))
    .then(resposta => {
      this.setState(prevState => ({
        tweets: [resposta.data, ...prevState.tweets],
        novoTweet: ''
      }))
    })
  }

  render() {
    const { tweets, novoTweet } = this.state
    return (
      <Fragment>
        <Cabecalho>
          <NavMenu usuario={localStorage.getItem('USUARIO')} />
        </Cabecalho>
        <div className="container">
          <Dashboard>
            <Widget>
              <form className="novoTweet" onSubmit={this.adicionaTweet}>
                <div className="novoTweet__editorArea">
                  <span className={`${novoTweet.length > 140 ? 'novoTweet__status novoTweet__status--invalido' : 'novoTweet__status'}`}>
                    {novoTweet.length}/{140 - novoTweet.length}
                  </span>
                  <textarea
                    className="novoTweet__editor"
                    value={novoTweet}
                    placeholder="O que está acontecendo?"
                    onChange={(event) => this.setState({ novoTweet: event.target.value })}>
                  </textarea>
                </div>
                <button
                  type="submit"
                  className="novoTweet__envia"
                  disabled={novoTweet.length > 140}
                >
                  Tweetar
                </button>
              </form>
            </Widget>
            <Widget>
              <TrendsArea />
            </Widget>
          </Dashboard>
          <Dashboard posicao="centro">
            <Widget>
              <div className="tweetsArea">
                {
                  tweets.length > 0 ? 
                  tweets.map((item, index) => ( <Tweet {...item} key={index} /> )) :
                  <p>Compartilhe seu primeiro tweet!</p>
                }
              </div>
            </Widget>
          </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default Home;
