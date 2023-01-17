import { About } from './About';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Contacts } from './Contacts';
export function Home(){
    return(
        <>
            <section id="home">
            <div className="home">
                <div className="garis">
                    <h1>Hi, Welcome </h1>
                    <hr className="garis-horizontal"/>
                    <h3>Junior Web Developer</h3>
                    <hr className="garis-miring"/>
                </div>
                <div className="social-media">
                    <span>
                    <a href="https://instagram.com/hardimahendra_" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/mahendra_hardi" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://github.com/hardimahendra" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://linkedin.com/in/hardi-mahendra-2986a8146" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </span>
                </div>
                </div>
            </section>
            <section id="about">
                {<About/>}
            </section>
            <section id="experience">
                {<Experience/>}
            </section>
            <section id="project">
                {<Projects/>}
            </section>
            {/* <section id="contact">
                {<Contacts/>}
            </section> */}
        </>
    )
}