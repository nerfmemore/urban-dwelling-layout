import styles from '../search/search.module.scss'

function Search() {
    return (
        <>
        <section className={styles.main}>
            <h1 className={styles.head}>Результаты поиска</h1>
            <div className={styles.main_grid}>
                <div className={styles.position}>
                    <div className={styles.promo}>
                        <div className={styles.tag}>Акция</div>
                        <img className={styles.image} src="/photo1.jpeg" alt="Фото светильника" />
                        <div className={styles.description}>
                            <button className={styles.button}>Подробнее</button>
                        </div>
                    </div>
                    <span className={styles.title}>Встраиваемый светильник Markt</span>
                    <div className={styles.prices}>
                        <span className={styles.sale}>3 490 ₽</span>
                        <span className={styles.old_price}>5 060 ₽</span>
                    </div>
                </div>
                <div className={styles.position}>
                    <div className={styles.promo}>
                        <img className={styles.image} src="/photo2.jpeg" alt="Фото светильника" />
                        <div className={styles.description}>
                            <button className={styles.button}>Подробнее</button>
                        </div>
                    </div>
                    <span className={styles.title}>Линейный светильник ARG</span>
                    <div className={styles.prices}>
                        <span className={styles.price}>6 700 ₽</span>
                    </div>
                </div>
                <div className={styles.position}>
                    <div className={styles.promo}>
                        <div className={styles.tag}>Акция</div>
                        <img className={styles.image} src="/photo3.jpeg" alt="Фото светильника" />
                        <div className={styles.description}>
                            <button className={styles.button}>Подробнее</button>
                        </div>
                    </div>
                    <span className={styles.title}>Сведодиодный светильник</span>
                    <div className={styles.prices}>
                        <span className={styles.sale}>5 060 ₽</span>
                        <span className={styles.old_price}>6 700 ₽</span>
                    </div>
                </div>
                <div className={styles.position}>
                    <div className={styles.promo}>
                        <img className={styles.image} src="/photo1.jpeg" alt="Фото светильника" />
                        <div className={styles.description}>
                            <button className={styles.button}>Подробнее</button>
                        </div>
                    </div>
                    <span className={styles.title}>Встраиваемый светильник Markt</span>
                    <div className={styles.prices}>
                        <span className={styles.price}>3 490 ₽</span>
                    </div>
                </div>
                <div className={styles.position}>
                    <div className={styles.promo}>
                        <div className={styles.tag}>Акция</div>
                        <img className={styles.image} src="/photo2.jpeg" alt="Фото светильника" />
                        <div className={styles.description}>
                            <button className={styles.button}>Подробнее</button>
                        </div>
                    </div>
                    <span className={styles.title}>Линейный светильник ARG</span>
                    <div className={styles.prices}>
                        <span className={styles.sale}>5 060 ₽</span>
                        <span className={styles.old_price}>6 700 ₽</span>
                    </div>
                </div>
                <div className={styles.position}>
                    <div className={styles.promo}>
                        <img className={styles.image} src="/photo3.jpeg" alt="Фото светильника" />
                        <div className={styles.description}>
                            <button className={styles.button}>Подробнее</button>
                        </div>
                    </div>
                    <span className={styles.title}>Сведодиодный светильник</span>
                    <div className={styles.prices}>
                        <span className={styles.price}>5 060 ₽</span>
                    </div>
                </div>
                <div className={styles.position}>
                    <div className={styles.promo}>
                        <div className={styles.tag}>Акция</div>
                        <img className={styles.image} src="/photo1.jpeg" alt="Фото светильника" />
                        <div className={styles.description}>
                            <button className={styles.button}>Подробнее</button>
                        </div>
                    </div>
                    <span className={styles.title}>Встраиваемый светильник Markt</span>
                    <div className={styles.prices}>
                        <span className={styles.sale}>3 490 ₽</span>
                        <span className={styles.old_price}>5 060 ₽</span>
                    </div>
                </div>
                <div className={styles.position}>
                    <div className={styles.promo}>
                        <img className={styles.image} src="/photo2.jpeg" alt="Фото светильника" />
                        <div className={styles.description}>
                            <button className={styles.button}>Подробнее</button>
                        </div>
                    </div>
                    <span className={styles.title}>Линейный светильник ARG</span>
                    <div className={styles.prices}>
                        <span className={styles.price}>6 700 ₽</span>
                    </div>
                </div>
                
            </div>
        </section>
        </>
    )
}

export default Search;