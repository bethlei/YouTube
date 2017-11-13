import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './../App.css'
import { fetchCategoriesAndVideos } from './../actions'
import { VideoFeaturedList, VideoFilteredList } from './VideoList'
import { SelectedVideo } from './SelectedVideo'
import NoMatch from './../components/NoMatch'

class App extends Component {
  state = {
    fetchCatAndVid: true
  }

  componentDidMount() {
    if (this.state.fetchCatAndVid) {
      this.props.getCatAndVid()
      this.setState({
        fetchCatAndVid: false
      })
    }
  }

  render() {
    return (
      <Router>
        <div className="app">
          <header><h1><Link className="header" to="/">Discovery YouTube</Link></h1></header>
          <main>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <VideoFeaturedList {...props} />
                )}
              />
              <Route
                exact
                path="/videoCategory/:category?"
                render={props => (
                  <VideoFilteredList {...props} />
                )}
              />
              <Route
                exact
                path="/video/:video?"
                render={props => (
                  <SelectedVideo {...props} />
                )}
              />
              <Route render={props => (
                <NoMatch {...props} />
              )}
              />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  state,
})

const mapDispatchToProps = {
  getCatAndVid: fetchCategoriesAndVideos,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
