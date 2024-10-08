import React from "react";
import "./Session.css";

class Session extends React.Component {
  render() {
    return (
      <div className="session-container">
        <h1>Details of the Modules </h1>

        <p>1.Introduction and basics of HTML, CSS</p>
        <p>
          2.Working of web browser, HTTP protocol, HTTPS, DNS, TLS, XML
          introduction, Json introduction, DOM, URL, URI, REST API.
          Self-learning Topics: : Nginx server
        </p>
        <p>
          3.Introduction to ES6, Difference between ES5 and ES6. Variables,
          Condition, Loops, Functions, Events, Arrow functions, Setting CSS
          Styles using JavaScript, DOM manipulation, Classes and Inheritance.
          Iterators and Generators, Promise, Client-server communication, Fetch
          Self-learning Topics: Asynchronous JavaScript, JSON
        </p>
        <p>
          4.Installation, Installing libraries, Folder and file structure,
          Components, Component lifecycle, State and Props, React Router and
          Single page applications, UI design, Forms, Events, Animations, Best
          practices. Self-learning Topics: React vs Angular vs Vue
        </p>
        <p>
          5.Functional components- Refs, Use effects, Hooks, Flow architecture,
          Model-View- Controller framework, Flux, Bundling the application. Web
          pack. Self-learning Topics: React Native
        </p>
        <p>
          6.Environment setup, First app, Asynchronous programming, Callback
          concept, Event loops, REPL, Event emitter, Networking module, Buffers,
          Streams, File system, Web module. Self-learning Topics: Node.js with
          Mongodb.
        </p>
        <p>
          7. Introduction, Express router, REST API, Generator, Authentication,
          sessions, Integrating with React. Self-learning Topics: Commercial
          deployment.
        </p>
      </div>
    )
  }
}
export default Session;
