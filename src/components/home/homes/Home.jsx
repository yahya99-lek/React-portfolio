import React from 'react'

const Home = () => {
  return (
    <>
        <section className="home">
            <div className="container flex">
                <div className="left">
                    <div className="img">
                        <img src="./assets/home.png" alt="" />
                    </div>
                </div>
                <div className="right topMarign">
                    <h1>I am <br />
                    Web designer
                    </h1>
                <div className="socialIcon">
                    <i className="fab fa-facebook facebook"></i>
                    <i className="fab fa-instagram instagram"></i>
                    <i className="fab fa-twitter twitter"></i>
                    <i className="fab fa-youtube youtube"></i>
                    <i className="fab fa-pinterest pinterest"></i>
                    <i className="fab fa-whatsapp whatsapp"></i>
                </div>    
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quia ducimus quae eveniet, ex rerum ea blanditiis maxime nulla distinctio in corporis, nemo vel molestias similique nobis omnis minima perspiciatis?</p>
                    <button className="primary-btn">Contact Us</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home