import styles from '../../styles/Feed.module.css'

const Feed = ({articles, pageNumber}) => {
    return (
        <div className={styles.main}>
            {articles.map((article, index) => (
                <div key={index} className={styles.post}>
                    <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
                    <p>{article.description}</p>
                    {article.urlToImage && <img src={article.urlToImage} />}
                </div>
            ))}
        </div>
    )
}

export const getServerSideProps = async context => {
    const pageNumber = context.query.id;

    if(!pageNumber || pageNumber < 1 || pageNumber > 5){
        return {
            props: {
                articles: [],
                pageNumber: 1
            }
        }
    }

    const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=5&page=${pageNumber}`, {
        headers : {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`
        }
    })

    const json = await res.json();
    const { articles } = json;

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }
    
}
export default Feed