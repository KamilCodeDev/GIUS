import { useEffect, useRef } from "react";
import styles from "./Karusel.module.scss";
import img24 from "../../img/img24.png";
import img25 from "../../img/img25.png";
import img26 from "../../img/img26.png";


const cards = [
    {
        id: 3,
        image: img24,
        text: "Официальное представительство в Узбекистане, Таджикистане и Туркменистане",
    },

    {
        id: 2,
        image: img25,
        text: "Полнофункциональный офис в Ташкенте с персональным менеджером и рекрутером",
    },

    {
        id: 3,
        image: img26,
        text: "Полный цикл: от заявки до выхода кандидата на работу",
    },
    


];

const Karusel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 310, behavior: "smooth" });

                if (
                    scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
                    scrollRef.current.scrollWidth
                ) {
                    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.carousel} ref={scrollRef}>
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={styles.card}
                        style={{ backgroundImage: `url(${card.image})` }}
                    >
                        <div className={styles.index}>{card.id + 1}</div>
                        <p className={styles.text}>{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Karusel;
