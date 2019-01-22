import React, { Component } from 'react';
import './AboutPage.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export default class AboutPage extends Component {
    render() {
        return (
            <section className="about-page">
                <h1>About <FontAwesomeIcon icon={faFilm} /><span className="logo">Movie Search</span></h1>
                <h2>
                    Welcome to
                    &nbsp;
                    <FontAwesomeIcon icon={faFilm} />
                    <span className="logo">Movie Search!</span>
                    <br />
                    The online platform that enables you to search for information on your favorite movies.
                    <br />
                    Based on <a href="http://omdbapi.com/" target="_blank" rel="noopener noreferrer">OMDb's API</a>, you can find information on the movie's cast, debuts, reviews and more.
                    <br />
                    It's simple to use, and has all the information you might need on movies.
                    <br />
                    Just type in your movie's name inside the textarea on top.
                    </h2>
                <br />
                <h1>About Me</h1>
                <h2>
                    Hi, I'm Bar Peled and I'm a fan of the Marvel Universe.
                        <br />
                    My professional time is normally spent developing advanced Full Stack progressive web applications.
                        <br />
                    I specialize developing in HTML5, CSS3, Sass, JavaScript, React, Vue, Angular and jQuery.
                        <br />
                    I also develop using Node.JS, MongoDB, MySQL and GraphQL.
                        <br />
                    My free time, on the other hand, is usually spent on the dance floor, practicing my Salsa steps.
                        <br />
                    Happy to connect!
                    </h2>
                <h3>
                    <a href="mailto:ibarpeled@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href="https://www.linkedin.com/in/peled-bar/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/Barpel?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                </h3>
            </section>
        )
    }
}