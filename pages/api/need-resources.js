export default function handler(req, res) {
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  if (req.method === 'POST') {
    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: 'lelekafond.cz | Форма потреби допомоги',
      html: returnMessageTemplate(req.body),
    }

    sgMail
        .send(msg)
        .then(() => {
          res.status(200).json(req.body)
        })
        .catch((error) => {
          console.error(error)
        })
  }
}

const returnMessageTemplate = (data) => {
  const {
    first_name,
    last_name,
    number,
    third_name,
    type,
    id_document
  } = data

  let typeValue = ''
  if (type === 'passport') {
    typeValue = 'паспорт'
  } else if (type === 'world-passport') {
    typeValue = 'загран пасопрт'
  } else if (type === 'id-card') {
    typeValue = 'ID карта'
  }

  return `<table>
  <tr>
    <th style="text-align: left; padding: 10px; border: solid 1px gray; background: lightgray;"><strong>Назва поля:</strong></th>
    <th  style="text-align: left; padding: 10px; border: solid 1px gray; background: lightgray;"><strong>Значення:</strong></th>
  </tr>
    <tr>
    <th style="text-align: left; padding: 10px; border: solid 1px gray;"><strong>Iм'я</strong></th>
    <th  style="text-align: left; padding: 10px; border: solid 1px gray;">${first_name}</th>
  </tr>
      <tr>
    <th style="text-align: left; padding: 10px; border: solid 1px gray;"><strong>Прізвище</strong></th>
    <th  style="text-align: left; padding: 10px; border: solid 1px gray;">${last_name}</th>
  </tr>
        <tr>
    <th style="text-align: left; padding: 10px; border: solid 1px gray;"><strong>По батькові</strong></th>
    <th  style="text-align: left; padding: 10px; border: solid 1px gray;">${third_name}</th>
  </tr>
          <tr>
    <th style="text-align: left; padding: 10px; border: solid 1px gray;"><strong>Тип документу</strong></th>
    <th  style="text-align: left; padding: 10px; border: solid 1px gray;">${typeValue}</th>
  </tr>
            <tr>
    <th style="text-align: left; padding: 10px; border: solid 1px gray;"><strong>Серія та номер</strong></th>
    <th  style="text-align: left; padding: 10px; border: solid 1px gray;">${id_document}</th>
  </tr>
              <tr>
    <th style="text-align: left; padding: 10px; border: solid 1px gray;"><strong>Телефон</strong></th>
    <th  style="text-align: left; padding: 10px; border: solid 1px gray;">${number}</th>
  </tr>
</table>`
}
