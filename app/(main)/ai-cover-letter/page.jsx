import React from 'react';

// This component displays a clear "Work in Progress" message for the AI Cover Letter feature.
// It uses Tailwind CSS for a modern, centered layout.

const AiCoverLetterPage = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">
            <div className="text-center p-8 bg-white shadow-2xl rounded-xl border border-yellow-200 max-w-lg w-full transform transition-all duration-300 hover:shadow-yellow-300/50">
                <svg 
                    className="w-16 h-16 mx-auto text-yellow-500 mb-4 animate-spin-slow" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2}
                >
                    {/* Gear/Cog icon path to symbolize a feature being built/maintained */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
                    Feature Under Construction
                </h1>
                <p className="text-gray-600 mb-6">
                    Thank you for your patience! The <b>AI Cover Letter Generator</b> is currently in active development.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-yellow-700 font-semibold text-lg">
                        We're building something great. Check back soon for this powerful tool!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AiCoverLetterPage;