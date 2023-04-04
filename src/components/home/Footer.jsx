import React from 'react'

const Footer = () => {
  return (
   <>
   <footer >
        <div className="container grid1">
        <div className="box">
            <img src="./assets/logo1.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore rem dolores neque officiis aperiam nostrum doloribus facilis recusandae temporibus sint fuga, quas mollitia distinctio! Veritatis ullam dolorum maxime facere placeat!</p>
            <div className="socialIcon">
              <i className="fab fa-facebook "></i>
              <i className="fab fa-twitter "></i>
              <i className="fab fa-instagram "></i>
              <i className="fab fa-youtube "></i>
              <i className="fab fa-pinterest "></i>
              <i className="fab fa-whatsapp "></i>
            </div>
        </div>
        <div className="box">
            <h2>Quick Links</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>News</li>
                <li>Contact</li>
                <li>FAQ'S</li>
            </ul>
        </div>
        <div className="box">
            <h2>Recent Post</h2>
            <div className="text">
                <p> 3 WooCommerc sites to boost ur sales.</p>
                <span>13 january 2023</span>
            </div>
            <div className="text">
                <p> 3 WooCommerc sites to boost ur sales.</p>
                <span>13 january 2023</span>
            </div>
            <div className="text">
                <p> 3 WooCommerc sites to boost ur sales.</p>
                <span>13 january 2023</span>
            </div>
        </div>
        <div className="box">
            <h2>Get in touch</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod recusandae incidunt natus ipsum ducimus eaque delectus ut illo beatae nulla. Sit aspernatur facilis quisquam porro ratione? Reprehenderit vitae in libero.</p>

            <div className="icon">
                <i className="fa fa-location-dot"></i>
                <label htmlFor="">Location: safi 41,Bloc 13 ,morocco</label>
            </div>
            <div className="icon">
                <i className="fa fa-phone"></i>
                <label htmlFor="">Phone:0641292490</label>
            </div>
            <div className="icon">
                <i className="fa fa-envelope"></i>
                <label htmlFor="">Email:yahya.lek99@gmail.com</label>
            </div>
        </div>
        </div>
        <div className="legal container">
            <p>Copyright @2023. All rights reserved.</p>
            <label htmlFor="">
                Design & Developed by <span>Yahya Lekhlidi</span>
            </label>
        </div>
        
   </footer>
   </>
  )
}

export default Footer