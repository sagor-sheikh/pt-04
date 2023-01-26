import React, { useState } from 'react';
import "./Faq.css"

const FAQ = ({title, desc}) => {
    const [toggle, setToggle] = useState(false);

    return (
        <article className='faq'>
            <div>
                <h4>{title}</h4>
                <button onClick={() => {setToggle(!toggle)}}>
                    {toggle ? "-" : "+"}
                </button>
            </div>
            {toggle && <p>{desc}</p>}
        </article>
    );
};

export default FAQ;