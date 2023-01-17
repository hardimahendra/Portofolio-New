import React , {useState} from 'react';

export function Experience(){
    const [index, setIndex] = useState(0);
    return(
        <>
            <div className="experience">
                <div className="ex-left">
                    <img src="./img/google.jpg" alt="image" hidden={index != 0} />
                    <img src="./img/twitter.jpg" alt="image" hidden={index != 1}/>
                    <img src="./img/facebook.jpg" alt="image" hidden={index != 2}/>
                    <img src="./img/apple.jpg" alt="image" hidden={index != 3}/>
                </div>
                <div className="ex-right">
                <h1 className="page-name">Experience</h1>
                <div className="tab-office" role="tablist" aria-label="Job tabs">
                    <div className="tab-list">
                        <button onClick={() => (setIndex(0))}>Daekyoung</button>;
                        <button onClick={() => (setIndex(1))}>UNSIKA</button>;
                    </div>
                </div>
                    <div className="work-section">
                        <div className="jobs" hidden={index != 0}>
                            <div className="work-position">
                                <h3>IT Support</h3>
                                <h4>|</h4>
                                <h5 className="company"> &nbsp;@&nbsp;<a className="inline-link">PT. Daekyoung Indah Heavy Industry</a> </h5>
                            </div>
                            <div className="range-work">08-2021 - 09-2021</div>
                            <div className="info-work">
                                <ul>
                                    <p>Short Course Networking</p> 
                                    <p>Simply desktop Aplication(Java Netbeans)</p> 
                                </ul>
                            </div>
                        </div>
                        <div className="jobs" hidden={index != 1}>
                            <div className="work-position">
                                <h3>Web Developer</h3>
                                <h4>|</h4>
                                <h5 className="company"> &nbsp;@&nbsp;<a className="inline-link">Universitas Singaperbangsa Karawang</a> </h5>
                            </div>
                            <div className="range-work">10-2021 - 12-2021</div>
                            <div className="info-work">
                                <ul>
                                    <p>Course Laravel 8 </p> 
                                    <p>Sistem Magang – Sistem Mahasiswa (Frontend)</p> 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


