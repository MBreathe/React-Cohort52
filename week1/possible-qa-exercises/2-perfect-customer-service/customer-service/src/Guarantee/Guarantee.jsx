import styles from './guarantee.module.css'

function Guarantee({ img, title, description }) {
    return (
        <div className={styles.guaranteeContainer}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Guarantee