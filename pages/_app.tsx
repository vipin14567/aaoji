// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Or move it to styles/globals.css if preferred
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Component {...pageProps} />
            </main>
           
        </div>
    );
}
