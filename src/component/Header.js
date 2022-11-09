import React from "react";
import "./Header.css"
const Header = () => {
  return (
    <div id="myCarousel" class="carousel slide">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner">
        <div class="item active">
          <div
            class="fill"
            style={{
              "background-image":
                "url('http://www.marchettidesign.net/demo/optimized-bootstrap/code.jpg'",
            }}
          ></div>
          <div class="carousel-caption">
            <h2 class="animated fadeInLeft">Caption Animation</h2>
            <p class="animated fadeInUp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <p class="animated fadeInUp">
              <a href="/" class="btn btn-transparent btn-rounded btn-large">
                Learn More
              </a>
            </p>
          </div>
        </div>
        <div class="item">
          <div
            class="fill"
            style={{
              "background-image":
                "url('http://www.marchettidesign.net/demo/optimized-bootstrap/code.jpg'",
            }}
          ></div>
          <div class="carousel-caption">
            <h2 class="animated fadeInDown">Caption Animation</h2>
            <p class="animated fadeInUp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <p class="animated fadeInUp">
              <a href="/" class="btn btn-transparent btn-rounded btn-large">
                Learn More
              </a>
            </p>
          </div>
        </div>
        <div class="item">
          <div
            class="fill"
            style={{
              "background-image":
                "url('http://www.marchettidesign.net/demo/optimized-bootstrap/code.jpg'",
            }}
          ></div>
          <div class="carousel-caption">
            <h2 class="animated fadeInRight">Caption Animation</h2>
            <p class="animated fadeInRight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <p class="animated fadeInRight">
              <a href="/" class="btn btn-transparent btn-rounded btn-large">
                Learn More
              </a>
            </p>
          </div>
        </div>
      </div>

      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="icon-prev"></span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="icon-next"></span>
      </a>
    </div>
  );
};

export default Header;
