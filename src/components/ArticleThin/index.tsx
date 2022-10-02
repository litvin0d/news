import s from "./ArticleThin.module.scss";

interface IArticleProps {
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    views: number
}

const ArticleThin = ({title, description, url, urlToImage, publishedAt, views}: IArticleProps) => {
    return (
        <article className={s.root}>
            <a href={url} target="_blank">
                <div className={s.textContent}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className={s.mediaContent}>
                    <img
                        src={urlToImage}
                        alt="preview" />
                    <div className={s.info}>
                        <time>{publishedAt}</time>
                        <div>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="">
                                <path
                                    d="M12 19C7.10988 19 3.52823 16.581 1 11.4946C3.52823 6.41901 7.10988 4 12 4C16.8901 4 20.4718 6.41901 23 11.5054C20.4718 16.581 16.8901 19 12 19Z"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                                <circle cx="12.0938" cy="11.5" r="3.5" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"></circle>
                            </svg>
                            <span>{views}</span>
                        </div>
                    </div>
                </div>
            </a>
        </article>
    );
};

export default ArticleThin;