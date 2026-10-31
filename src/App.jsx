
import { useState } from 'react';
import './App.css';

function App() {
    const [opened, setOpened] = useState(false);

return (
    <main className="welcome-container">
    
{opened && (
<div className="celebration" aria-hidden="true">
    {['💙', '💛', '⭐', '✨', '🩵', '💖', '🌟', '💙', '💛', '🎀', '✨', '⭐', '💛', '🩵', '💗', '🌟'].map((item, index) => (
    <span
        key={index}
        className={`confetti confetti-${index + 1}`}
        >
        {item}
    </span>
    ))}
</div>
)}


    <div className="floating-star star-one">✦</div>
    <div className="floating-star star-two">✨</div>
    <div className="floating-heart heart-one">♡</div>
    <div className="floating-star star-three">✧</div>

    <section className="welcome-card">

        {!opened ? (
        <>
            <span className="top-decoration">♡ ✧ ♡</span>

            <div className="teddy-container">
            <img
                src="/osito.jpg"
                alt="Osito de Victoria"
                className="teddy-illustration"
            />
            </div>

            <p className="little-text">
                UNA PEQUEÑA SORPRESA
            </p>

            <h1>¡Hola, Victoria!</h1>

            <p className="welcome-message">
                Hay alguien muy especial que está por llegar
                y queremos llenarla de mucho amor.
            </p>

            <div className="gift-box">🎁</div>

            <button
                className="open-button"
                onClick={() => setOpened(true)}
            >
                Abrir mi sorpresa ♡
            </button>

            <span className="bottom-decoration">✧ ♡ ✧</span>
        </>
        ) : (
        <div className="surprise-content">

            <span className="top-decoration">♡ ✧ ♡</span>

            <p className="little-text">
                ¡UNA SORPRESA PARA VOS!
            </p>

            <h1>¡Te esperamos, Victoria!</h1>

            <p className="welcome-message">
                Esta pequeña sorpresa fue preparada
                con muchísimo amor para vos y tu familia.
            </p>

            <div className="gift-photo">
            <img
                src="/regalo-boca.jpeg"
                alt="Primer regalito de Victoria"
            />
            </div>

            <p className="photo-caption">
                ¡Tu primer outfit! 💙💛
            </p>

            <div className="family-message">
            <span>♡</span>

            <h2>
                ¡Estamos muy felices por tu llegada,
                Victoria!
            </h2>

            <p>Te queremos muchísimo.</p>

            <div className="family-signature">
                Tía Marta, Prima Sole, Pity,
                Mica y familia.
            </div>

            <span>♡</span>
            </div>

            <span className="bottom-decoration">
                ✧ ♡ ✧
            </span>

        </div>
        )}

    </section>

    <p className="footer-text">
        Un pedacito de amor para Victoria 🎀
    </p>

    </main>
    );
}

export default App;
