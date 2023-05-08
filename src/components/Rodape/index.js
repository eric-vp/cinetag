import styles from './Rodape.module.css';

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <p className={styles.rodape__texto}>Desenvolvido por Alura.</p>
        </footer>
    )
}

export default Rodape;