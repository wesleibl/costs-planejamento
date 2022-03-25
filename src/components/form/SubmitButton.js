import styles from './SubmitButton.module.css'

function Submit({text}){
    return (
        <div className={styles.container_btn}>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default Submit