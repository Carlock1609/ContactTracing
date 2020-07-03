import React from 'react';

const About = (props) => {

    return (
        <div>
            <h3 className="mt-5">ABOUT</h3>
            <div className="container mt-5">
                <em id="about_body">Thank you for visiting us! 
                    <br/><br/>
This journal was designed with the goal of helping the health departments and our health care providers across our country gather data to slow the transmission of    COVID-19.
                    <br/><br/>
Contact tracing is a tool that has been used by health departments for years to monitor diseases such as tuberculosis and HIV by being able to quickly identify a persons exposure and then provide information and assistance.
                    <br/><br/>          
If you should ever be notified that you or someone you know has been exposed to COVID-19 we hope your use of this journal proves beneficial in assisting a contact tracer to advise those who may become ill.
                    <br/><br/>
It is our hope that with communities and families working together to compile information, there will be fewer cases of infection.
                    <br/><br/>
We hope you find this tool useful and that you stay safe and healthy!</em>
            </div>
            <div className="ml-5 mt-5">
                <p><b>Sincerely</b>, </p>
            </div>
            <div className="ml-5 mt-3">
                <img src="https://www.ustogethertrace.com/wp-content/uploads/2020/06/Picture1-300x84.png" alt="US Together Logo"/>
            </div>
            <hr/>
        </div>
    );
};

export default About;