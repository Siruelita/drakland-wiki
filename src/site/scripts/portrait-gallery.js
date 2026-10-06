/* =========================================================
   PORTRAIT GALLERY - DIGITAL GARDEN
   Una imagen + autoplay
   ========================================================= */

.callout[data-callout="portrait-gallery"] {
    width: 360px !important;
    max-width: 90vw !important;

    margin: 28px auto 36px !important;
    padding: 0 !important;

    background: transparent !important;
    border: 0 !important;
    box-shadow: none !important;
}

.callout[data-callout="portrait-gallery"] .callout-title {
    display: none !important;
}

.callout[data-callout="portrait-gallery"] .callout-content {
    margin: 0 !important;
    padding: 0 !important;
}


/* VISOR */

.portrait-gallery-stage {
    position: relative;

    width: 100%;
    height: 500px;

    overflow: hidden;

    border-radius: 18px;

    box-shadow:
        0 14px 36px rgba(0, 0, 0, 0.4);

    cursor: pointer;
}


/* SLIDES */

.portrait-gallery-slide {
    position: absolute;

    inset: 0;

    opacity: 0;

    pointer-events: none;

    transition:
        opacity 0.8s ease;
}

.portrait-gallery-slide.is-active {
    opacity: 1;

    pointer-events: auto;
}


/* IMÁGENES */

.portrait-gallery-slide img {
    display: block !important;

    width: 100% !important;
    height: 100% !important;

    max-width: none !important;
    max-height: none !important;

    object-fit: cover !important;
    object-position: center top !important;

    margin: 0 !important;

    border: none !important;
    border-radius: 18px !important;
}


/* CONTROLES */

.portrait-gallery-controls {
    display: flex;

    align-items: center;
    justify-content: center;

    gap: 14px;

    margin-top: 12px;
}


/* FLECHAS */

.portrait-gallery-arrow {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    padding: 0;

    border:
        1px solid rgba(150, 180, 210, 0.25);

    border-radius: 50%;

    background:
        rgba(20, 28, 36, 0.72);

    color: #b9ccda;

    font-size: 25px;
    line-height: 1;

    cursor: pointer;

    transition:
        background 0.2s ease,
        transform 0.2s ease;
}

.portrait-gallery-arrow:hover {
    background:
        rgba(50, 70, 88, 0.85);

    transform: scale(1.08);
}


/* PUNTITOS */

.portrait-gallery-dots {
    display: flex;

    align-items: center;

    gap: 7px;
}

.portrait-gallery-dot {
    width: 8px;
    height: 8px;

    padding: 0;

    border: 0;
    border-radius: 50%;

    background:
        rgba(170, 190, 205, 0.28);

    cursor: pointer;

    transition:
        transform 0.2s ease,
        background 0.2s ease;
}

.portrait-gallery-dot.is-active {
    background: #9fc8e3;

    transform: scale(1.35);
}


/* DIOSES: un poco más grande */

.ficha-dios
.callout[data-callout="portrait-gallery"] {
    width: 420px !important;
}

.ficha-dios .portrait-gallery-stage {
    height: 540px;
}


/* MÓVIL */

@media (max-width: 700px) {

    .callout[data-callout="portrait-gallery"] {
        width: 84vw !important;
        max-width: 84vw !important;
    }

    .portrait-gallery-stage {
        height: min(118vw, 520px);
    }

    .ficha-dios .portrait-gallery-stage {
        height: min(118vw, 540px);
    }
}
