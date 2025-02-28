import styles from './banner.module.css';
console.log(import.meta.env.VITE_ENV);

export const addBanner = (text: string) => {
  const container = document.querySelector('#content') as HTMLElement;
  container.classList.add(styles.bannerText);
  container.textContent = text;
};
