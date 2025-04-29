import module from "./Header.module.scss"

const Header = () => {
    return (
        <div>
            
            <div className={module.back}>
                <div className={module.header}>
                    <h1>Система, объединяющая <br />континенты
                    </h1>
                    <button>Смотреть проекты </button>
                </div>
            </div>
        </div>
    )
}

export default Header