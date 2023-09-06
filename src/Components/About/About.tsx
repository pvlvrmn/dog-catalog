function About() {
  return (
    <div className="about__wr">
      <div className="about__title"><h1>About this project</h1></div>
      <div className="about__body">
        This project was built specifically for
        {' '}
        <a href="https://dog.ceo/dog-api/documentation/">Dog API</a>
        .
        <br />
        <br />
        <h2>Tech stack</h2>
        <ul className="about__stack">
          <li><a rel="noreferrer" href="https://react.dev/" target="_blank">React</a></li>
          <li><a rel="noreferrer" href="https://reactrouter.com/en/main" target="_blank">React Router</a></li>
          <li><a rel="noreferrer" href="https://www.typescriptlang.org/" target="_blank">Typescript</a></li>
          <li><a rel="noreferrer" href="https://vitejs.dev/" target="_blank">Vite</a></li>
          <li><a rel="noreferrer" href="https://eslint.org/" target="_blank">ESLint</a></li>
          <li><a rel="noreferrer" href="https://www.npmjs.com/" target="_blank">npm</a></li>
        </ul>
      </div>
    </div>
  );
}

export default About;
