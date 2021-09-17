import React, { useState } from 'react';
import RevealerNav from './RevealerNav';
const AboutPage = () => {

    // JAG VILL SÄTTA ATT ANTINGEN BODY BG ELLER SPAN COLOR ÄNDRAR FÄRG PÅ HOOVER

    const [hover, setHover] = useState(false)
    const [span, setSpan] = useState("")

    // useEffect(() => {
    //     setSpan(document.getElementById('about-span'));
    // }, [])

    // span.style.color = 'c6e421'
    console.log(hover)

    console.log(span)

    return (
        <div >
            <RevealerNav />
            <div class="about-page">
                <span class="about-span">ROBIN HEDLUND IS AN UP-AND-COMING WEB DEVELOPER AND MUSICIAN BASED IN STOCKHOLM, SWEDEN. < br /> < br />

                    ROBIN IS CURRENTLY ATTENDING THE HIGHLY PROCLAIMED NACKADEMIN WHERE HE IS STUDYING TO BECOME A "FULL STACK WEB DEVELOPER". < br /> < br />

                    NACKADEMIN IS A SCHOOL THAT OFFERS A "HIGHER VOCATIONAL EDUCATION" WHICH IS A POST-SECONDARY FORM OF EDUCATION THAT COMBINES THEORETICAL AND PRACTICAL STUDIES IN CLOSE COOPERATION WITH EMPLOYERS AND INDUSTRY. PROGRAMMES ARE OFFERED IN SPECIFIC FIELDS WHERE THERE IS AN EXPLICIT DEMAND FOR COMPETENCE.</span>
            </div>
        </div>
    )

}

export default AboutPage;