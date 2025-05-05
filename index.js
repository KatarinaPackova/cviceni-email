/* Cviceni email */

/* const goodbye = (name) => {
  const rozlouceni = document.querySelector('.email__closing');
  rozlouceni.textContent = `S pozdravem, ${name}`;
};

goodbye('Katka'); */

/* const goodbye = () => {
  const rozlouceni = document.querySelector('.email__closing');
  rozlouceni.textContent = `S pozdravem, Katka`;
};

Timto tu funkci zavolam a to co je v te funkci goodbye napsane se uskutecni.
goodbye(); */

/* ............................. */

/* const osloveni = (name) => {
  const osloveniUvod = document.querySelector('.email__greeting');
  osloveniUvod.textContent = `Vazena pani, ${name}`;
};

osloveni('Katka'); */

/* .............. */

/* Procvicovani 25.4.2025 */
/* 
const goodbye = () => {
  const paragraph = document.querySelector('.email__closing');
  paragraph.textContent = 'Na shledanou';
};

goodbye(); */

const goodbye = (jmeno) => {
  const paragraph = document.querySelector('.email__closing');
  paragraph.textContent = `Na shledanou ${jmeno}`;
};

goodbye('Pavel Ovesny');

/* Pokračujte na stránce z předchozího příkladu.

Do souboru index.js přidejte funkci fillSubject s jedním parametrem subject. Tato funkce ze stránky vybere DOM element představující předmět e-mailu a nastaví jeho obsah na řetězec, který přišel v parametru.
Zavolejte funkci na konci souboru index.js a vyzkoušejte si nastavit předmět e-mailu na nějaký smysluplný text. */
const fillSubject = (subject) => {
  const emailSubject = document.querySelector('.email__subject');
  emailSubject.textContent = `${subject}`;
};

fillSubject('Predmet: Nabika prace');

const fillBody = (body, name) => {
  const emailBody = document.querySelector('.email__body');
  emailBody.textContent = `${body}`;
  const emailGreeting = document.querySelector('.email__closing');
};
fillBody('Novy obsah body...', goodbye);
