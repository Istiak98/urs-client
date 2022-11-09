import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"
const Home = () => {
  return (
    <section class="about_section padding mt-2">
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="content col-12 col-lg-5 p-4 m-3">
                <div class="text-center">
                  <Link to="/login" className="text">
                  <h1>University Recommend</h1>
                  </Link>
                    
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="about_img">
                    <img src="https://i.ibb.co/qR753h3/BUET-LOGO-svg.png" alt="idea-images" class="about_img_1 "/>
                    <img src="https://i.ibb.co/rFQdstQ/BUP.png" alt="idea-images" class="about_img_2"/>
                    <img src="https://i.ibb.co/1Xg3ss9/IIUC.png" alt="idea-images" class="about_img_3" />
                </div>
            </div>
            
        </div>
    </div>
</section>



  );
};

export default Home;
