import { ThemeProvider } from './lib/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import DownloadSection from './components/DownloadSection'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-base-50 animate-fade-in transition-colors">
        <Header />
        <Hero />
        <HowItWorks />
        <Features />
        <DownloadSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
