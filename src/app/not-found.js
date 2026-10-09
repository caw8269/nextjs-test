import Link from 'next/link'

export const metadata = {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist'
}

export default function GlobalNotFound() {
    return (
        <div className='hero container'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link className='btn btn-alt' href="/">Return Home</Link>
        </div>
    )
}