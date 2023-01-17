export function About(){
    return(
        <>
        <div className="about">
            <div className="about-left">
            <h1 className="page-name">About Me</h1>
                <p>I am a fresh graduate from the University of Singaperbangsa Karawang, the study program I took was Informatics. I really like the problem solving process. I am interested in a web developer, with sufficient html and css basics and with ongoing experience in the web development field.</p>
                <p>I have a fast understanding, have high curiosity, can work individually or in a team.</p>
                <div className="skill-bars">
                    <div className="bar">
                        <span className="skill"><i className="fa-brands fa-react"></i></span>
                        <div className="progress">
                            <span className="react"></span>
                            <p>45%</p>
                        </div>
                    </div>
                    <div className="bar">
                        <span className="skill"><i className="fa-brands fa-java"></i></span>
                        <div className="progress">
                            <span className="java"></span>
                            <p>20%</p>
                        </div>
                    </div>
                    <div className="bar">
                        <span className="skill"><i className="fa-brands fa-html5"></i></span>
                        <div className="progress">
                            <span className="html"></span>
                            <p>85%</p>
                        </div>
                    </div>
                    <div className="bar">
                        <span className="skill"><i className="fa-brands fa-css3-alt"></i></span>
                        <div className="progress">
                            <span className="css"></span>
                            <p>70%</p>
                        </div>
                    </div>
                    <div className="bar">
                        <span className="skill"><i className="fa-brands fa-node"></i></span>
                        <div className="progress">
                            <span className="nodejs"></span>
                            <p>15%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-right">
                <div className="profil">
                    <img src="./img/pas-foto.jpg" alt="Profil" />
                    <div className="img-text">
                        <h2>Hardi Mahendra</h2>
                        <p>Junior Web Depelover</p>
                        <ul>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-github"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}