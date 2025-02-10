import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact.css';

function ContactForm() {
    const [state, handleSubmit] = useForm("meoezbdg");
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (state.succeeded) {
            setShowSuccess(true);
            const timer = setTimeout(() => {
                setShowSuccess(false);
            }, 4000); 

            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);

    if (showSuccess) {
        return (
            <div className="success-container">
                <p className="success-message">Merci ! Je reviendrai vers toi rapidement. 😊</p>
            </div>
        );
    }

    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-title">Me Contacter</h2>
            <p className="contact-subtitle">Une question ? Un projet ? Écris-moi !</p>

            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Nom et prénom</label>
                <input id="name" type="text" name="name" required />

                <ValidationError prefix="Nom" field="name" errors={state.errors} />

                <label htmlFor="email">Adresse mail</label>
                <input id="email" type="email" name="email" required />

                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />

                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button type="submit" disabled={state.submitting}>Envoyer</button>
            </form>
        </section>
    );
}

export default ContactForm;