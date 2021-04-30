import '../styles/global.css';
import 'tailwindcss/tailwind.css';
import { Html, Head, Main } from 'next/document';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
