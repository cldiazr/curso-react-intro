import './FooterApp.css'

function FooterApp () {
    return(
        <footer>
            <p>© {new Date().getFullYear()} Christian L. Diaz R. Todos los derechos reservados.</p>
        </footer>
    )
}

export { FooterApp }