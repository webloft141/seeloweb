import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import DownloadSection from './components/DownloadSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-base-50 animate-fade-in">
      <Header />
      <Hero />
      <Features />
      <DownloadSection />
      <Footer />
    </div>
  )
}

export default App
