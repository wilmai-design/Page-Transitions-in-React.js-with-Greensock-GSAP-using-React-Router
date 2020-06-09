import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { CSSTransition} from 'react-transition-group';
import { gsap } from 'gsap';

//Pages
import About from './pages/about';
import Home from './pages/home';

//Components
import Header from './components/header';

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About }
];

function App() {

  const onEnter = node => {
    gsap.from(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: 30,
        delay: 0.6,
        ease: "power3.InOut",
        opacity: 0,
        stagger: {
          amount: 0.6
        }
      }
    );
  };

  const onExit = node => {
    gsap.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: -30,
        ease: "power3.InOut",
        stagger: {
          amount: 0.2
        }
      }
    );
  };
  
  return (
    <>
    <Header />
      <div className="container">
        { routes.map (({ path, Component }) => (
          <Route key='name' path={path} exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames='page'
                onExit={onExit}
                onEntering={onEnter}
                unmountOnExit>
                <div className='page'>
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
