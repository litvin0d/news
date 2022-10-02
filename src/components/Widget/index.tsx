import Weather from "../Weather";
import Sort from "../Sort";
import s from "./Widget.module.scss";

const Widget = () => {
    return (
        <div className={s.root}>
            <Weather />
            <Sort />
        </div>
    );
}

export default Widget;