import {SMTPClient} from 'emailjs'


const client = new SMTPClient({
    user: process.env.EMAIL,
    password: process.env.PASSWORD_EMAIL,
    host: 'smtp.gmail.com',
    ssl: false
})

const returnCategories = (category) => {

    let categoriesText = ''

    for (let key in category) {
        if (category[key]) {
            switch (key) {
                case 'clothes': {
                    categoriesText = categoriesText + ' одяг,'
                    break
                }
                case 'eat': {
                    categoriesText = categoriesText + ' їжа,'
                    break
                }
                case 'farm': {
                    categoriesText = categoriesText + ' медикаменти,'
                    break
                }
                case 'fin': {
                    categoriesText = categoriesText + ' фінансова допомога,'
                    break
                }
                case 'have_job': {
                    categoriesText = categoriesText + ' пропоную роботу,'
                    break
                }
                case 'help': {
                    categoriesText = categoriesText + ' волонтерство,'
                    break
                }
                case 'other': {
                    categoriesText = categoriesText + ' інше,'
                    break
                }
                case 'tech': {
                    categoriesText = categoriesText + ' технічне устаткування,'
                    break
                }
                case 'transport': {
                    categoriesText = categoriesText + ' транспорт,'
                    break
                }
            }
        }
    }
    return categoriesText
}

const returnMessageTemplate = (data) => {
    const {
        name,
        number,
        contacts,
        resources,
        location,
        category,
        delivery,
        notes
    } = data
    return `<table>
  <tr>
    <th style="text-align: left; padding: 10px; border: solid 1px gray; background: lightgray;"><strong>Назва поля:</strong></th>
    <th  style="text-align: left; padding: 10px; border: solid 1px gray; background: lightgray;"><strong>Значення:</strong></th>
  </tr>
    <tr>
    <th style="text-align: left; padding: 10px; border: solid 1px gray;"><strong>Iм'я</strong></th>
    <th  style="text-align: left; padding: 10px; border: solid 1px gray;">${name}</th>
  </tr>
      <tr>
    <th style="text-align: left; padding: 10px; border: solid 1px gray;"><strong>Номер телефону</strong></th>
    <th  style="text-align: left; padding: 10px; border: solid 1px gray;">${number}</th>
  </tr>
        <tr>
    <th style="text-align: left; padding: 10px; border: solid 1px gray;"><strong>Контакти</strong></th>
    <th  style="text-align: left; padding: 10px; border: solid 1px gray;">${contacts}</th>
  </tr>
          <tr>
    <th style="text-align: left; padding: 10px; border: solid 1px gray;"><strong>Що є в наявності</strong></th>
    <th  style="text-align: left; padding: 10px; border: solid 1px gray;">${resources}</th>
  </tr>
            <tr>
    <th style="text-align: left; padding: 10px; border: solid 1px gray;"><strong>Де є в наявності</strong></th>
    <th  style="text-align: left; padding: 10px; border: solid 1px gray;">${location}</th>
  </tr>
              <tr>
    <th style="text-align: left; padding: 10px; border: solid 1px gray;"><strong>Категорія</strong></th>
    <th  style="text-align: left; padding: 10px; border: solid 1px gray;">${returnCategories(category)}</th>
  </tr>
                <tr>
    <th style="text-align: left; padding: 10px; border: solid 1px gray;"><strong>Доставка</strong></th>
    <th  style="text-align: left; padding: 10px; border: solid 1px gray;">${delivery ? 'можу привезти' : 'самовивіз'}</th>
  </tr>
                  <tr>
    <th style="text-align: left; padding: 10px; border: solid 1px gray;"><strong>Нотатки</strong></th>
    <th  style="text-align: left; padding: 10px; border: solid 1px gray;">${notes}</th>
  </tr>
</table>`
}

export default function handler(req, res) {
    if (req.method === 'POST') {

        try {
            client.send(
                {
                    text: '',
                    from: process.env.EMAIL,
                    to: process.env.TO_EMAIL,
                    subject: 'lelekafund.com | Форма надання допомоги',
                    attachment: [
                        {data: returnMessageTemplate(req.body), alternative: true}
                    ],
                },
                () => {
                    res.status(200).json(req.body)
                }
            )
        } catch (e) {
        }
    }
}
