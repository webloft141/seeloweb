import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const DOWNLOAD_BASE = 'https://github.com/webloft141/seeloweb/releases/latest/download'

const platforms = [
  {
    name: 'Windows',
    file: 'seelo-desktop.exe',
    url: '/seelo-desktop.exe',
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.801" />
      </svg>
    ),
  },
  {
    name: 'macOS',
    file: 'seelo-desktop.dmg',
    url: '/seelo-desktop.dmg',
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.742 2.293c.48-.586 1.075-1.043 1.773-1.293-.094.703-.449 1.344-.957 1.801-.508.457-1.16.75-1.863.773-.086-.703.27-1.398.777-1.855zm1.383 3.809c-.539-.027-1.035.14-1.43.43a2.626 2.626 0 0 1-1.805-.371 2.014 2.014 0 0 0-1.574-.308c-.582.129-1.07.48-1.406.977-.793 1.34-.203 3.234.562 4.293.375.547.824 1.145 1.406 1.125.547-.02.75-.36 1.406-.36.657 0 .844.36 1.406.351.586-.008.949-.55 1.324-1.097.234-.343.41-.719.527-1.117-.582-.305-.954-.961-.883-1.66.07-.7.512-1.125 1.02-1.43.39-.243.68-.355 1.02-.37-.056-.438-.2-.855-.422-1.23-.32-.539-.82-.972-1.39-1.168z" />
      </svg>
    ),
  },
  {
    name: 'Linux',
    file: 'seelo-desktop.AppImage',
    url: '/seelo-desktop.AppImage',
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.014 1.506c-1.005 2.242-2.326 4.314-3.763 6.208-.607.863-1.255 1.638-1.547 2.642-.222.796-.117 1.599.227 2.296.271.58.496 1.093.543 1.637.071 1.385-.047 2.76-.353 4.115-.667 2.124-2.299 3.661-4.251 4.817-.473-1.574-.466-3.17-.312-4.756.823-1.529 2.086-2.945 2.426-4.768.305-1.305.145-2.604-.335-3.84-.389-1.133-1.07-2.18-1.655-3.248-.358-.625-.647-1.283-.891-1.947 1.307.521 2.429 1.228 3.459 2.106.496.429.953.897 1.424 1.346-.418-.891-.94-1.72-1.504-2.519-.883-1.274-1.41-2.582-1.328-4.088.847.531 1.657 1.172 2.358 1.934.899.972 1.625 2.079 2.363 3.175-.143-.764-.456-1.471-.68-2.213-.822-2.82-1.562-5.656-2.066-8.543zm7.884 2.152c.684 1.06 1.015 2.026 1.065 3.199.04.91-.039 1.818-.253 2.702-.365 1.546-1.329 2.875-2.138 4.284-.429 1.001-.637 1.99-.517 3.106.08.71.328 1.375.616 2.032.488 1.125.695 2.263.435 3.462-.249 1.12-.865 2.08-1.625 2.93-1.797 2.028-3.96 3.645-6.382 4.92.75-1.083 1.466-2.28 1.854-3.561.459-1.47.47-2.996.188-4.507-.157-.823-.391-1.627-.627-2.432-.541-1.852.053-3.33 1.07-4.881.637-.961 1.291-1.953 1.576-3.109.199-.78.155-1.545-.022-2.311-.127-.562-.274-1.121-.436-1.678 1.154.177 2.079.971 2.754 1.854z" />
      </svg>
    ),
  },
  {
    name: 'Android',
    file: 'seelo-mobile.apk',
    url: '/seelo-mobile.apk',
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 2.5c-.28 0-.5.22-.5.5v.5c0 .28.22.5.5.5h.5c.28 0 .5-.22.5-.5V3c0-.28-.22-.5-.5-.5h-.5zm8 0c-.28 0-.5.22-.5.5v.5c0 .28.22.5.5.5h.5c.28 0 .5-.22.5-.5V3c0-.28-.22-.5-.5-.5h-.5zM3.5 5C2.67 5 2 5.67 2 6.5v11c0 .83.67 1.5 1.5 1.5h17c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5h-17zM4 7h16v10H4V7zM6 9v6h2V9H6zm4 0v6h2V9h-2zm4 0v6h2V9h-2z" />
      </svg>
    ),
  },
]

const pluginItems = [
  {
    name: 'Figma Plugin',
    file: 'seelo-figma-plugin.zip',
    url: '/seelo-figma-plugin.zip',
    desc: 'Import in Figma via Plugins → Development → Import plugin from manifest',
  },
  {
    name: 'Node Relay Server',
    file: 'seelo-relay-server.zip',
    url: '/seelo-relay-server.zip',
    desc: 'Self-host the cloud relay server (npm install && npm start)',
  },
]

export default function DownloadSection() {
  const [downloading, setDownloading] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const { ref, visible } = useScrollReveal()

  useEffect(() => {
    if (!downloading) return
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          return 100
        }
        return p + Math.random() * 4 + 1
      })
    }, 120)
    return () => clearInterval(interval)
  }, [downloading])

  const handleDownload = (platform: string, url: string) => {
    setDownloading(platform)
    setProgress(1)
    const a = document.createElement('a')
    a.href = DOWNLOAD_BASE + url
    a.download = platform.toLowerCase() + '-installer'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const resetDownload = () => {
    setDownloading(null)
  }

  return (
    <section id="downloads" className="relative py-32 md:py-44 bg-base-50 transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`max-w-2xl mb-20 reveal ${visible ? 'visible' : ''}`}
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-accent mb-5">
            <span className="w-8 h-px bg-accent/50" />
            Download
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-base-950 tracking-tight leading-[1.05] mb-4 transition-colors">
            Get Seelo &mdash; <span className="text-base-400">free.</span>
          </h2>
          <p className="text-base-500 max-w-md leading-relaxed transition-colors">
            Download the desktop app and Figma plugin. No account required.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-3 max-w-3xl mb-16">
          {platforms.map((platform, i) => (
            <button
              key={platform.name}
              onClick={() => handleDownload(platform.name, platform.url)}
              disabled={downloading !== null}
              className={`group flex items-center gap-4 p-5 rounded-xl border border-base-200 bg-base-100/50 hover:bg-base-100 hover:border-base-300 hover:shadow-md transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] reveal reveal-delay-${i + 1} ${visible ? 'visible' : ''}`}
            >
              <div className="size-12 rounded-lg bg-base-200/50 flex items-center justify-center text-base-500 group-hover:text-accent group-hover:bg-accent-light transition-all duration-300">
                {platform.icon}
              </div>
              <div className="text-left">
                <p className="text-base-800 font-medium text-sm transition-colors">{platform.name}</p>
                <p className="text-base-400 text-xs mt-0.5 transition-colors">{platform.file}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.15em] text-base-400 mb-5 block transition-colors">
            Plugins &amp; Server
          </span>
          <div className="grid md:grid-cols-2 gap-3">
            {pluginItems.map((item, i) => (
              <button
                key={item.name}
                onClick={() => handleDownload(item.name, item.url)}
                disabled={downloading !== null}
                className={`group flex flex-col items-start gap-2 p-5 rounded-xl border border-base-200 bg-base-100/50 hover:bg-base-100 hover:border-base-300 hover:shadow-md transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] reveal reveal-delay-${i + 1} ${visible ? 'visible' : ''}`}
              >
                <p className="text-base-800 font-medium text-sm transition-colors">{item.name}</p>
                <p className="text-base-500 text-xs transition-colors">{item.desc}</p>
                <p className="text-base-400 text-xs mt-1 font-mono transition-colors">{item.file}</p>
              </button>
            ))}
          </div>
        </div>

        {downloading && (
          <div className="max-w-md animate-fade-in-up">
            <div className="p-6 rounded-2xl border border-base-200 bg-base-100/80 backdrop-blur-sm shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-base-800 font-medium transition-colors">
                    Downloading {downloading}
                  </p>
                  <p className="text-xs text-base-500 mt-0.5 transition-colors">
                    {progress < 100 ? `${Math.floor(progress)}%` : 'Complete'}
                  </p>
                </div>
                {progress < 100 && (
                  <button
                    onClick={resetDownload}
                    className="size-7 rounded-lg bg-base-200/50 flex items-center justify-center text-base-500 hover:text-base-800 hover:bg-base-200 transition-all"
                  >
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              <div className="relative h-1.5 rounded-full bg-base-200 overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-accent transition-all duration-200 ease-out"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>

              {progress >= 100 && (
                <p className="mt-4 text-sm text-base-500 text-center transition-colors">Download complete</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
