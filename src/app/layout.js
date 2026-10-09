import './global.css'
import Link from 'next/link'
import Nav from './ui/nav'

export const metadata = {
    title: {
        template: '%s | WebCreator',
        default: 'WebCreator',
    },
}

export default function RootLayout( {children }) {
    return(
        <html lang="en">
            <head>
                <meta charSet="utf-8"></meta>
                
            </head>
            
            <body>
                <header className="primary-header container group">
                    <h1 className="logo"><Link href="/">Web<br></br>Creator</Link></h1>
                    <h3 className="tagline">your place for help with special web designs</h3>
                    <nav className="nav primary-nav">
                        <Nav />
                    </nav>
                </header>
                <section className="container">
                    {children}
                </section>
                <footer className="primary-footer container group">
                    <small>&copy; WebCreator</small>

                    <nav className='nav'>
                        <Nav />
                    </nav>

                </footer>
            </body>
            
        </html>
    )
}