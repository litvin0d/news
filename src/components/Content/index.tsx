import Widget from "../Widget";
import s from "./Content.module.scss";
import ArticleThin from "../ArticleThin";
import ArticleWide from "../ArticleWide";

const Content = () => {
    return (
        <div className={s.root}>
            <Widget />
            <div className={s.wrapper}>
                <ArticleWide
                    title={"VK будет искать внутри соцсети новых музыкантов и раскручивать их"}
                    description={"Новая структура получила название VK Records"}
                    url={"https://74.ru/text/culture/2022/09/29/71695706/"}
                    urlToImage={"https://cdn.iportal.ru/news/2015/99/preview/28def6ae21a27805ff34a32205af0bf20d39a0f6_720_405_c.jpg"}
                    publishedAt={"29 СЕНТЯБРЯ 2022, 15:16"}
                    views={10}
                />
                <ArticleThin
                    title={"VK будет искать внутри соцсети новых музыкантов и раскручивать их"}
                    description={"Новая структура получила название VK Records"}
                    url={"https://74.ru/text/culture/2022/09/29/71695706/"}
                    urlToImage={"https://cdn.iportal.ru/news/2015/99/preview/28def6ae21a27805ff34a32205af0bf20d39a0f6_720_405_c.jpg"}
                    publishedAt={"29 СЕНТЯБРЯ 2022, 15:16"}
                    views={10}
                />
                <ArticleThin
                    title={"VK будет искать внутри соцсети новых музыкантов и раскручивать их"}
                    description={"Новая структура получила название VK Records"}
                    url={"https://74.ru/text/culture/2022/09/29/71695706/"}
                    urlToImage={"https://cdn.iportal.ru/news/2015/99/preview/28def6ae21a27805ff34a32205af0bf20d39a0f6_720_405_c.jpg"}
                    publishedAt={"29 СЕНТЯБРЯ 2022, 15:16"}
                    views={10}
                />
                <ArticleThin
                    title={"VK будет искать внутри соцсети новых музыкантов и раскручивать их"}
                    description={"Новая структура получила название VK Records"}
                    url={"https://74.ru/text/culture/2022/09/29/71695706/"}
                    urlToImage={"https://cdn.iportal.ru/news/2015/99/preview/28def6ae21a27805ff34a32205af0bf20d39a0f6_720_405_c.jpg"}
                    publishedAt={"29 СЕНТЯБРЯ 2022, 15:16"}
                    views={10}
                />
                <ArticleThin
                    title={"VK будет искать внутри соцсети новых музыкантов и раскручивать их"}
                    description={"Новая структура получила название VK Records"}
                    url={"https://74.ru/text/culture/2022/09/29/71695706/"}
                    urlToImage={"https://cdn.iportal.ru/news/2015/99/preview/28def6ae21a27805ff34a32205af0bf20d39a0f6_720_405_c.jpg"}
                    publishedAt={"29 СЕНТЯБРЯ 2022, 15:16"}
                    views={10}
                />
            </div>


        </div>
    );
}

export default Content;