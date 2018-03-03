import matlab from "../Images/matlab.jpg"
import openday from '../Images/openday.png'
import fast_meeting from '../Images/fast_meeting.png'

export default {
    events : [
        {
            type: "event",
            tittle: "NEEC Open Days Series",
            desc: "",
            text: "Não fazes ideia de como funciona o universo empresarial e gostavas de observar o dia-a- dia de uma empresa por dentro?\n\nOs Open Days dão-te a oportunidade de visitar algumas das empresas que recrutam estudantes do nosso curso (Microsoft, Accenture, Bold, etc.).\n\nCada uma dessas empresas abre as portas dos seus escritórios, convidando os alunos a observar as suas atividades e a participar nalgumas.\n\nAtravés desta experiência, poderás alargar a tua visão empresarial e obter uma nova perspetiva em relação ao teu futuro profissional.",
            img: openday,
            links: {
                facebook: "",
                eventbrite: ""
            }
        },
        {
            type: "event",
            tittle: "Visitas à Torre",
            desc: "",
            text: "Gostavas de ter uma foto de perfil com a Alameda como fundo? Uma foto para o Instagram? Meter na tua história do Snapchat?\n\nEsta é a oportunidade para choverem likes com a Alameda, vista da Torre Norte, como protagonista principal!",
            img: matlab,
            links: {
                facebook: "",
                eventbrite: ""
            }
        },
        {
            type: "event",
            tittle: "Fast Meeting",
            desc: "",
            text: "Estás no terceiro ano de MEEC e há demasiadas áreas de mestrado para ti? Já te fartaste de pensar, mas não consegues escolher quais estudar no próximo ano? Não penses mais!!!!\n\nO NEECIST traz-te uma sessão de esclarecimento em colaboração com o DEEC que te vai tirar todas as dúvidas, o FastMeeting!!\n\nPara teres uma maior facilidade de escolha, haverá uma apresentação de cada área de mestrado, dada pelo professor responsável pela mesma. Para além disso, terás oportunidade de partilhar dúvidas, questões e experiências com alunos que seguiram as áreas de mestrado sobre as quais estás indeciso!! E tudo isto durante um lanche que será oferecido por nós!\n\nO FastMeeting durante a semana das JEEC no Salão Nobre do Pavilhão Central e não precisas de qualquer tipo de inscrição, basta aparecer!",
            img: fast_meeting,
            links: {
                facebook: "",
                eventbrite: ""
            }
        }
    ]
}