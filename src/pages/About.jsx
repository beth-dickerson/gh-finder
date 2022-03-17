import React from 'react'

function About() {
  return (
    <div>
        <h1 className="text-6xl mb-4">GitHub Finder</h1>
        <p className="mb-4 text-2xl font-light">
            This React app searches and displays GitHub profiles. It's based on this Udemy course:
            <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
                {' '}
                React Front To Back
                {' '}
            </a>
            .
        </p>
        <p className="text-lg test-gray-400">
            Version <span className="text-white">1.0.0</span>
        </p>
        <p className="text-lg text-gray-400">
            Layout by:
            <a className="text-white" href="https://twitter.com/hassibmoddasser">
                Hassib Moddasser
            </a>
        </p>
    </div>
  )
}

export default About