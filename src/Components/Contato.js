import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
        <Head title="ReactProject | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina antiga de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>tuliochavess@gmail.com</li>
          <li>31 9 9726-6369</li>
          <li>Rua Coronel Praes - Sagrada Família - BH</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
