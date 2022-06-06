import React from "react";
import Logo from "../../assents/img/logo.png";
import style from "../Footer/footer.module.css";

export default () => {
    return (
        <footer>
            <div className={style.rowFlex}>
                <div className={style.logo}>
                    <img src={Logo} className={style.logoimg} />
                    <h1 className={style.colorText}>
                        Projeto criado por Grupo I
                    </h1>
                </div>
            </div>
        </footer>
    );
};
