import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  
  return <>
     <nav>
       Barra de navegación
     </nav>
      <Component {...pageProps} />
      <footer>
        Pie de página
      </footer>
  </>;
}
