import React from "react";
import { Link } from "react-router-dom";
import goal from "./HomeStyling/goal.jpg";


function Home() {
  return (
    <>
      <section id="intro" class="main style1 dark fullscreen">
        <div class="content">
          <header>
            <h2>Hey.</h2>
          </header>
          <p>
            Welcome to <strong>Big Picture</strong> a responsive site template
            designed by <a href="https://html5up.net">HTML5 UP</a>
            <br />
            and released for free under the{" "}
            <a href="https://html5up.net/license">
              Creative Commons Attribution license
            </a>
            .
          </p>
          <footer>
            <a href="#one" class="button style2 down">
              More
            </a>
          </footer>
        </div>
      </section>

      <section id="one" class="main style2 right dark fullscreen">
        <div class="content box style2">
          <header>
            <h2>What I Do</h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore
            condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncus
            eu. Sed sodales venenatis arcu, id varius justo euismod in.
            Curabitur egestas consectetur magna.
          </p>
        </div>
        <a href="#two" class="button style2 down anchored">
          Next
        </a>
      </section>

      <section id="two" class="main style2 left dark fullscreen">
        <div class="content box style2">
          <header>
            <h2>Who I Am</h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore
            condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncus
            eu. Sed sodales venenatis arcu, id varius justo euismod in.
            Curabitur egestas consectetur magna.
          </p>
        </div>
        <a href="#work" class="button style2 down anchored">
          Next
        </a>
      </section>

      <section id="work" class="main style3 primary">
        <div class="content">
          <header>
            <h2>My Work</h2>
            <p>
              Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore
              condimentum. Fusce blandit ultrices sapien, in accumsan orci
              rhoncus eu. Sed sodales venenatis arcu, id varius justo euismod
              in. Curabitur egestas consectetur magna vitae.
            </p>
          </header>

          <div class="gallery">
            <article class="from-left">
              <a href="images/fulls/01.jpg" class="image fit">
                <img src={goal} title="The Anonymous Red" alt="" />
              </a>
            </article>
            <article class="from-right">
              <a href="images/fulls/02.jpg" class="image fit">
                <img src={goal} title="Airchitecture II" alt="" />
              </a>
            </article>
            <article class="from-left">
              <a href="images/fulls/03.jpg" class="image fit">
                <img src={goal} title="Air Lounge" alt="" />
              </a>
            </article>
            <article class="from-right">
              <a href="images/fulls/04.jpg" class="image fit">
                <img src={goal} title="Carry on" alt="" />
              </a>
            </article>
          </div>
        </div>
      </section>

     

     

      <Link to="/objective">Objective</Link>
      <Link to="/our-goal">Goal</Link>
      <Link to="/contact">GetInTouch</Link>
      <Link to="/signup">start today</Link>
      <Link to="/about-us">who are we</Link>
      <Link to="/book-online">Book online</Link>
    </>
  );
}

export default Home;
