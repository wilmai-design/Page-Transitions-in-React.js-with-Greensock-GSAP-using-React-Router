import React from "react";
import Title from "../components/title";

const About = () => {
    return (
        <div className="inner" >
            <Title lineContent='This is the' lineContent2='about page'/>
            <div>
                <p className="info">
                    Dave Burke posted an article on the Android Developers Blog that talks about what’s 
                    coming up for Android 11. In particular, there’s been a slight adjustment* in the 
                    release schedule, as we shifted all of the Beta releases (and the final release) out 
                    by about a month. You can see the details in the article or on the updated preview 
                    Timeline site.
                </p>
            </div>
        </div>
    );
};

export default About;