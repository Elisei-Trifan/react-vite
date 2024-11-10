export default function FeedbackSection() {
  return (
    <section>
      <h3>Обратная связь</h3>

      <form>
        <label htmlFor="name">Ваше имя</label>
        <input type="text" id="name" className="control"></input>

        <label htmlFor="reason">Причина обращения</label>
        <select id="reason" className="control">
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option selected value="suggest">
            Предложение
          </option>
        </select>
      </form>
    </section>
  )
}
