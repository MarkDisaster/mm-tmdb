import { CContainer, CListGroup, CListGroupItem, CRow } from '@coreui/react';

import styles from './style.module.css';

const AboutAppPage = () => {
   return (
      <CContainer
         fluid
         className={styles.container}
      >
         <CRow className={styles.containerRow}>
            <CContainer className={styles.listContainer}>
               <h4 className={styles.listContainerHeader}>Funkce</h4>
               <CListGroup>
                  <CListGroupItem>
                     <div className={styles.headerWrapper}>
                        <h5 className={styles.bottomDefaultMargin}>
                           Plně responzivní design
                        </h5>
                     </div>
                     <p className={styles.bottomDefaultMargin}>
                        Aplikace je optimalizována pro všechna zařízení,
                        zajišťuje bezproblémové uživatelské prostředí na
                        mobilních telefonech, tabletech i desktopových
                        počítačích.
                     </p>
                  </CListGroupItem>

                  <CListGroupItem>
                     <div className={styles.headerWrapper}>
                        <h5 className={styles.bottomDefaultMargin}>
                           Autentizace uživatele
                        </h5>
                     </div>
                     <p className={styles.bottomDefaultMargin}>
                        Uživatelé mohou bezpečně přistupovat k zabezpečeným
                        stránkám, jako je uživatelský profil, a využívat funkcí
                        hodnocení filmů.
                     </p>
                  </CListGroupItem>

                  <CListGroupItem>
                     <div className={styles.headerWrapper}>
                        <h5 className={styles.bottomDefaultMargin}>
                           Přepínání mezi dark/light tématy
                        </h5>
                     </div>
                     <p className={styles.bottomDefaultMargin}>
                        Aplikace podporuje přepínání mezi světlým a tmavým
                        režimem, čímž se přizpůsobí preferencím uživatele.
                     </p>
                  </CListGroupItem>

                  <CListGroupItem>
                     <div className={styles.headerWrapper}>
                        <h5 className={styles.bottomDefaultMargin}>
                           Oblíbené filmy
                        </h5>
                     </div>
                     <p className={styles.bottomDefaultMargin}>
                        Přihlášení uživatelé mohou přidávat filmy do oblíbených
                        a snadno k nim přistupovat.
                     </p>
                  </CListGroupItem>

                  <CListGroupItem>
                     <div className={styles.headerWrapper}>
                        <h5 className={styles.bottomDefaultMargin}>
                           Porovnání statistik filmů
                        </h5>
                     </div>
                     <p className={styles.bottomDefaultMargin}>
                        Uživatelé mohou přidávat filmy k porovnání a analyzovat
                        jejich statistiky pomocí interaktivních grafů.
                     </p>
                  </CListGroupItem>
               </CListGroup>
            </CContainer>
            <CContainer className={styles.listContainer}>
               <h4 className={styles.listContainerHeader}>Stránky</h4>
               <CListGroup>
                  <CListGroupItem>
                     <div className={styles.headerWrapper}>
                        <h5 className={styles.bottomDefaultMargin}>Homepage</h5>
                     </div>
                     <ul className={styles.bottomDefaultMargin}>
                        <li>Carousel s náhledem nadcházejících filmů.</li>
                        <li>
                           Panely s výpisy dalších kategorií filmů (populární,
                           nejlépe hodnocené, atd.).
                        </li>
                     </ul>
                  </CListGroupItem>

                  <CListGroupItem>
                     <div className={styles.headerWrapper}>
                        <h5 className={styles.bottomDefaultMargin}>
                           Detail filmu
                        </h5>
                     </div>
                     <ul className={styles.bottomDefaultMargin}>
                        <li>
                           Podrobné informace o filmu, včetně hereckého
                           obsazení, režiséra, a synopse.
                        </li>
                        <li>Možnost hodnocení filmu uživatelem.</li>
                        <li>Výpis uživatelských recenzí a komentářů.</li>
                        <li>
                           Další relevantní informace a doporučení podobných
                           filmů.
                        </li>
                     </ul>
                  </CListGroupItem>

                  <CListGroupItem>
                     <div className={styles.headerWrapper}>
                        <h5 className={styles.bottomDefaultMargin}>
                           Uživatelský profil
                        </h5>
                     </div>
                     <ul className={styles.bottomDefaultMargin}>
                        <li>Pouze pro přihlášené uživatele.</li>
                        <li>
                           Uživatelské informace, historie hodnocení filmů, a
                           seznam oblíbených filmů.
                        </li>
                        <li>Možnost odhlášení.</li>
                     </ul>
                  </CListGroupItem>

                  <CListGroupItem>
                     <div className={styles.headerWrapper}>
                        <h5 className={styles.bottomDefaultMargin}>
                           Stránka pro porovnání statistik filmů
                        </h5>
                     </div>
                     <ul className={styles.bottomDefaultMargin}>
                        <li>
                           Interaktivní grafy a vizualizace pro porovnání
                           různých aspektů filmů (např. hodnocení, popularita,
                           výdělky).
                        </li>
                     </ul>
                  </CListGroupItem>
               </CListGroup>
            </CContainer>
         </CRow>
      </CContainer>
   );
};

export default AboutAppPage;
