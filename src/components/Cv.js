import { DocumentTextIcon } from '@heroicons/react/solid';
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
                    <DocumentTextIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Curriculum Vitae
                    </h1>
                    <button onClick={handleDownloadClick}>Open Curriculum Vitae</button>
                </div>
            </div>
        </section >
    );
}

