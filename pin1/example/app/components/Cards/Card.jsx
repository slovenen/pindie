import Styles from './Card.module.css'

export function Card() {
  return (
    <div className={Styles[card__info-container]}>
      <img className={Styles[card__image]} src="/images/brutal.png" />
      <h3 className={Styles[card__title]}>Брутальная крепость</h3>
      <p>выбор для смелых и непоколебимых личностей, вроде Аски</p>
    </div>
  )
}