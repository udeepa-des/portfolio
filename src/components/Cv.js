import React from 'react';

export default function Cv({ pdfUrl }) {
    function handleDownloadClick() {
        const url = `${process.env.PUBLIC_URL}${pdfUrl}`;
        window.open(url, '_blank');
    }

    return (
        <section id="Cv">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <button onClick={handleDownloadClick}>Open Curriculum Vitae</button>
                </div>
            </div>
        </section >
    );
}

