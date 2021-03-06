const React = require('react');

function About() {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p className="lead">
        Simple Weather Service written using:
        <ul>
          <li>
            <a href="https://facebook.github.io/react/">React</a>
          </li>
          <li>
            <a href="http://foundation.zurb.com/">Foundation</a>
          </li>
          <li>
            <a href="http://openweathermap.org/api">Open Weather Map Api</a>
          </li>
        </ul>
      </p>
      <p>
        The service provides the current temperature in Celsius for any part of the world.
        Will be updated to do a few more things soon.
      </p>
      <p>
        All the code is available on <a href="https://github.com/nem035/react-weather-service">Github</a>
      </p>
      <p>
        Inspired by the <a href="https://www.udemy.com/the-complete-react-web-app-developer-course">The Complete React Web App Developer Course</a>
      </p>
    </div>
  );
}

module.exports = About;
