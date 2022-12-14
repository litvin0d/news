/* in development */
import { useEffect, useRef, useState } from "react";

import s from "./Sort.module.scss";

type PopupClick = MouseEvent & {
    path: Node[];
};

const Sort = () => {
    const [selected, setSelected] = useState(0);
    const sortRef = useRef<HTMLDivElement>(null);
    const sortList = ["времени публикации", "просмотрам"];

    const [open, setOpen] = useState(false);

    const onClickListItem = (i: number) => {
        setSelected(i);
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const _event = event as PopupClick;

            if (sortRef.current && !_event.path.includes(sortRef.current)) {
                setOpen(false);
            }
        };

        document.body.addEventListener("click", handleClickOutside);

        return () => document.body.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div ref={sortRef} className={s.root} onClick={() => setOpen(!open)}>
            <div className={s.sortLabel}>
                <span>Сортировка по:</span>
                <span>{sortList[selected]}</span>
                <svg
                    width="10"
                    className={open ? s.active : ""}
                    height="6"
                    viewBox="0 0 10 6"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    />
                </svg>
            </div>
            {open && (
                <div className={s.sortPopup}>
                    <ul>
                        {
                            sortList.map((name, i) => (
                                <li
                                    key={i}
                                    onClick={() => onClickListItem(i)}
                                    className={selected === i ? s.active : ""}
                                >
                                    {name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sort;