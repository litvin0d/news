import Widget from "../Widget";
import s from "./Content.module.scss";

const Content = () => {
    return (
        <div className={s.root}>
            <Widget />
        </div>
    );
}

export default Content;