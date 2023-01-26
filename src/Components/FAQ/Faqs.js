import React, { useState } from 'react';
import { faqsData } from './Data';
import FAQ from './FAQ';
import "./Faqs.css";

const Faqs = () => {
    const [faqs, setFaqs] = useState(faqsData);
    return (
        <main className= "container">
            <section className='faqs'>
                <h1>FAQS</h1>
                {
                    faqs.map(faq => <FAQ key={faq.id} {... faq} />)
                }
            </section>
        </main>
    );
};

export default Faqs;