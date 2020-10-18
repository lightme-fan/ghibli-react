import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Movies from './components/Movies'

function App() {
    return (
        <div>
            <Header />
            <section>
                <Movies />
            </section>
            <Footer />
        </div>
    )
}

export default App