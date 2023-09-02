import Link from "next/link";
import styles from '../public/styles/CardItem.module.css'
function CardItem({url, image, info, types}){
    return (
        <div className={styles.cardItem}>
            <Link href={url}>
                <div>
                    <h2 className={styles.title}>{info.name}</h2>
                    <img  src={image} className={styles.imageCard} width="60" height="60" />
                    <div className={styles.id}>#{info.id}</div>
                    <div className={styles.types}>
                        {
                            types.map((item) => (
                                <div className={styles.type}>{item}</div>
                            ))
                        }
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CardItem;