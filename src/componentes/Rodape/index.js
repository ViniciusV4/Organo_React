import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="#">
                        <img src="/img/fb.png" alt="logo facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/img/tw.png" alt="logo twitter" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/img/ig.png" alt="logo instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/img/logo.png" alt="logo organo" />
        </section>
        <section>
            <p>
                <a href="https://www.linkedin.com/in/marcos-vinicius-moura-383bb216a/" target='blank'>Marcos Vinicius</a>
            </p>
        </section>
    </footer>)
}

export default Rodape