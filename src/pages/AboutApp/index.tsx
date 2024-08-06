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
                     <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Plně responzivní design</h5>
                     </div>
                     <p className="mb-1">
                        Aplikace je optimalizována pro všechna zařízení,
                        zajišťuje bezproblémové uživatelské prostředí na
                        mobilních telefonech, tabletech i desktopových
                        počítačích.
                     </p>
                  </CListGroupItem>

                  <CListGroupItem>
                     <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Autentizace uživatele</h5>
                     </div>
                     <p className="mb-1">
                        Uživatelé mohou bezpečně přistupovat k zabezpečeným
                        stránkám, jako je uživatelský profil, a využívat funkcí
                        hodnocení filmů.
                     </p>
                  </CListGroupItem>

                  <CListGroupItem>
                     <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">
                           Přepínání mezi dark/light tématy
                        </h5>
                     </div>
                     <p className="mb-1">
                        Aplikace podporuje přepínání mezi světlým a tmavým
                        režimem, čímž se přizpůsobí preferencím uživatele.
                     </p>
                  </CListGroupItem>

                  <CListGroupItem>
                     <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Oblíbené filmy</h5>
                     </div>
                     <p className="mb-1">
                        Přihlášení uživatelé mohou přidávat filmy do oblíbených
                        a snadno k nim přistupovat.
                     </p>
                  </CListGroupItem>

                  <CListGroupItem>
                     <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Porovnání statistik filmů</h5>
                     </div>
                     <p className="mb-1">
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
                     <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Homepage</h5>
                     </div>
                     <ul className="mb-1">
                        <li>Carousel s náhledem nadcházejících filmů.</li>
                        <li>
                           Panely s výpisy dalších kategorií filmů (populární,
                           nejlépe hodnocené, atd.).
                        </li>
                     </ul>
                  </CListGroupItem>

                  <CListGroupItem>
                     <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Detail filmu</h5>
                     </div>
                     <ul className="mb-1">
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
                     <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Uživatelský profil</h5>
                     </div>
                     <ul className="mb-1">
                        <li>Pouze pro přihlášené uživatele.</li>
                        <li>
                           Uživatelské informace, historie hodnocení filmů, a
                           seznam oblíbených filmů.
                        </li>
                        <li>Možnost odhlášení.</li>
                     </ul>
                  </CListGroupItem>

                  <CListGroupItem>
                     <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">
                           Stránka pro porovnání statistik filmů
                        </h5>
                     </div>
                     <ul className="mb-1">
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
