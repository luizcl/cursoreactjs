import "./menu.css";
import React from "react";
import {Link } from "react-router-dom";

export default function Menu() {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/param/123">Param #01</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/blastoise">Não Existe</Link>
                    </li>

                </ul>
            </nav>
        </aside>
    );
}
