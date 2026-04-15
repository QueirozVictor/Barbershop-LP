const cors = require("cors");
const express = require("express");
//const {google} = require("googleapis");

const app = express();
app.use(cors());
app.use(express.json());

//const auth = new google.auth.GoogleAuth({
  //  keyFile: "credentials.json",
  //  scopes: ["https://www.googleapis.com/auth/calendar"]
// });

app.post("/agendar", async (req, res) => {
    const {nome, email, tel, dataHora} = req.body;
    const [data, hora] = dataHora.split("T");

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Telefone:", tel);
    console.log("Data & Hora:", dataHora);

    //const calendar = google.calendar({version: "v3", auth});

    const event = {
        summary: `Agendamento de ${nome}`,
        description:`Email: $(email) | Tel: ${tel}`,
        start: {
            dateTime: `${data}T${hora}:00`,
            timeZone: "America/Sao_Paulo",
        },
        end: {
            dateTime: `${data}T${hora}:59`,
            timeZone: "America/Sao_Paulo",
        },
    }

    //await calendar.events.insert({
    //        calendarId: "primary",
    //        resource: event,
    //    });

    res.send("Agendamento criado com sucesso!");

});

app.listen(3000, () => console.log("Servidor rodando"));