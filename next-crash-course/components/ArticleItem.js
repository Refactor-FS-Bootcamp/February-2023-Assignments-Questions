import Link from 'next/link'
import styles from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
    return (
        <Link legacyBehavior href={`/article/${article.id}`}>
            <a className={styles.card}>
                <h3>{article.title} &rarr;</h3>
            </a>
        </Link>
    )
}
export default ArticleItem