import { RuleItem, QuizQuestion } from '../types';

export const WORLD_CUP_PREAMBLE = {
  title: "Código de Supervivencia Mundialista",
  subtitle: "Cómo vivir el mundial en Argentina, con pasión, gritos de alegría, bancar en el sufrimiento y nunca perder la esperanza porque… Ya ganamos la tercera, y ahora nos volvemos a ilusionar…",
  motto: "La pasión no se negocia. El respeto tampoco.",
  stars: ["1978", "1986", "2022"]
};

export const RULES_DATA: RuleItem[] = [
  {
    id: 1,
    number: "01",
    title: "Alentar al equipo, no odiar al rival",
    category: "aliento",
    categoryLabel: "Pasión & Folklore",
    text: "Gritar, saltar, celebrar, algunas cargadas y chistes se pueden hacer, son parte de nuestra cultura y renunciar a eso sería vender la patria pero siempre recordar que el rival vino para competir, no para ser menospreciado como persona. La intención cuenta, no insultes buscando generar odio.",
    coreTakeaway: "La picardía argentina es celebración de lo nuestro, no desprecio a la dignidad del otro.",
    practicalTip: "Festejá con el pecho inflado tus colores. Si vas a tirar un chiste, que sea para reírse juntos, nunca para herir.",
    whatsappQuote: "🇦🇷 Código Mundialista Regla #1: Alentar al equipo, no odiar al rival. La pasión se canta, el odio sobra.",
    iconName: "Flame"
  },
  {
    id: 2,
    number: "02",
    title: "Al mundial asisten de todo lugar y cultura",
    category: "respeto",
    categoryLabel: "Convivencia Global",
    text: "Saberlo nos obliga a pensar seriamente si la persona frente a nosotros a la que “cargamos un poco” durante el partido nos entiende en nuestra forma de ser o se sentirá atacado.",
    coreTakeaway: "No todo el mundo comparte nuestros modismos. Lo que para nosotros es 'folklore', para otro puede ser intimidación.",
    practicalTip: "Leé el contexto. Si estás con invitados extranjeros o hinchas de otra selección, asegurate de que la onda sea recíproca.",
    whatsappQuote: "🇦🇷 Código Mundialista Regla #2: Al mundial vienen culturas de todo el planeta. Que la cargada no sea malentendida como agresión.",
    iconName: "Globe"
  },
  {
    id: 3,
    number: "03",
    title: "Juego limpio: No hay grises",
    category: "fairplay",
    categoryLabel: "Valores Deportivos",
    text: "Hacer trampa es hacer trampa, no hay grises, o lo haces o no lo haces, tu puedes celebrar una victoria injusta pero recuerda que otro país está sufriendo por la trampa que tú celebras.",
    coreTakeaway: "La verdadera grandeza de un campeón está en ganar con nobleza y respetar las reglas del juego.",
    practicalTip: "Valorá el esfuerzo honesto de los jugadores. Ganar bien vale el doble; festejar una trampa deja un sabor amargo.",
    whatsappQuote: "🇦🇷 Código Mundialista Regla #3: Juego limpio. Hacer trampa es trampa. La gloria verdadera se gana jugando leal.",
    iconName: "ShieldCheck"
  },
  {
    id: 4,
    number: "04",
    title: "Las decisiones del árbitro hay que respetarlas",
    category: "arbitraje",
    categoryLabel: "Criterio en la Cancha",
    text: "Pueden haber estado erradas, se puede discutir, se puede opinar, no se puede agredir al árbitro, todos somos humanos y cometemos errores.",
    coreTakeaway: "La bronca ante un fallo dudoso se canaliza debatiendo con amigos, nunca con violencia física o amenazas.",
    practicalTip: "Podés gritarle al televisor con tus amigos, pero entendé que el error arbitral es parte humana del deporte.",
    whatsappQuote: "🇦🇷 Código Mundialista Regla #4: Se discute y se opina, pero nunca se agrede al árbitro. Todos somos humanos.",
    iconName: "Flag"
  },
  {
    id: 5,
    number: "05",
    title: "El meme hostil existe: Pensá antes de publicar",
    category: "redes",
    categoryLabel: "Redes Sociales",
    text: "Antes de publicar algo tras el partido pensá, ¿si la persona del meme estuviera frente a mi, aun así me reiría de esto? Porque burlarse en internet es fácil pero alguien está escuchando toda la burla.",
    coreTakeaway: "La pantalla no es un escudo para la crueldad. Las palabras en redes tienen consecuencias reales.",
    practicalTip: "Viralizá memes ingeniosos y de festejo argentino, no publicaciones xenófobas, racistas o humillantes.",
    whatsappQuote: "🇦🇷 Código Mundialista Regla #5: Si la persona del meme estuviera frente a vos, ¿te reirías igual? Memes con onda, sin odio.",
    iconName: "MessageSquareWarning"
  },
  {
    id: 6,
    number: "06",
    title: "Todos celebramos, todos sufrimos: Respetá",
    category: "respeto",
    categoryLabel: "Empatía Futbolera",
    text: "Todos celebramos, Todos sufrimos, pero cada quien a su manera, respetá.",
    coreTakeaway: "Cada hincha procesa la tensión del mundial de forma distinta: algunos saltan, otros rezan, otros callan.",
    practicalTip: "No juzgues a quien llora en la derrota ni a quien necesita unos minutos de silencio. La empatía nos hace mejores personas.",
    whatsappQuote: "🇦🇷 Código Mundialista Regla #6: Todos celebramos y todos sufrimos, cada quien a su manera. El respeto ante todo.",
    iconName: "HeartHandshake"
  },
  {
    id: 7,
    number: "07",
    title: "La pasión no es excusa para agredir",
    category: "aliento",
    categoryLabel: "Límite a la Violencia",
    text: "Dejarse dominar por la pasión no es excusa para agredir y generar odio en el rival, no inicies un círculo vicioso de Odio que no puedes terminar.",
    coreTakeaway: "Sentir con el corazón no significa perder la cabeza. La violencia solo engendra más violencia.",
    practicalTip: "Cuando la adrenalina suba demasiado, respirá hondo y recordá que el partido es una fiesta popular, no una guerra.",
    whatsappQuote: "🇦🇷 Código Mundialista Regla #7: La pasión no justifica el odio. No iniciemos cadenas de violencia.",
    iconName: "Sparkles"
  },
  {
    id: 8,
    number: "08",
    title: "Rivalidad en la cancha por 90 minutos: Afuera, amigos",
    category: "convivencia",
    categoryLabel: "Tercer Tiempo",
    text: "La rivalidad en la cancha, por 90 minutos, afuera se vale ser amigable.",
    coreTakeaway: "Al pitar el final, se estrechan las manos. El fútbol es un puente entre personas de todo el mundo.",
    practicalTip: "Compartí una bebida, una charla o un apretón de manos con los hinchas rivales apenas termine el cotejo.",
    whatsappQuote: "🇦🇷 Código Mundialista Regla #8: 90 minutos de rivalidad en la cancha, después afuera todos somos amigos.",
    iconName: "UserCheck"
  },
  {
    id: 9,
    number: "09",
    title: "El mundial es para ver con OTROS",
    category: "convivencia",
    categoryLabel: "Familia y Comunidad",
    text: "El mundial es para ver con OTROS, sal con amigos, familia, desde niños hasta ancianos.",
    coreTakeaway: "El recuerdo más imborrable del mundial no es la pantalla, sino con quién te abrazaste en cada gol.",
    practicalTip: "Organizá el living, sumá a los chicos y a los abuelos. Abrir la puerta de tu casa multiplica la alegría.",
    whatsappQuote: "🇦🇷 Código Mundialista Regla #9: El mundial se vive en comunidad, desde los más chicos hasta los abuelos.",
    iconName: "Users"
  },
  {
    id: 10,
    number: "10",
    title: "Ganar y celebrar sí, discriminación y odio no",
    category: "respeto",
    categoryLabel: "Conclusión de Oro",
    text: "Ganar está bien, Celebrar está bien, cargarse entre amigos se vale, pero la discriminación y el odio no tienen porque aparecer.",
    coreTakeaway: "La camiseta celeste y blanca se honra con alegría desbordante y brazos abiertos, nunca con discriminación.",
    practicalTip: "Festejá hasta que te duela la garganta, bailá en el Obelisco o en tu barrio, con orgullo y cero odio.",
    whatsappQuote: "🇦🇷 Código Mundialista Regla #10: ¡Festejar y cantar con todo! Pero la discriminación y el odio quedan afuera.",
    iconName: "Trophy"
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    title: "La previa y los memes en el grupo",
    scenario: "En el grupo de WhatsApp del asado, alguien envía un meme discriminatorio denigrando la nacionalidad y apariencia del equipo rival.",
    options: [
      {
        label: "A",
        description: "Reírse y mandarlo a otros grupos porque 'es folklore del fútbol'.",
        points: 0,
        feedback: "¡Cuidado! El meme hostil lastima a personas reales. El Código de Supervivencia pide pensar si te reirías teniéndolos enfrente."
      },
      {
        label: "B",
        description: "Aclarar en el grupo con buena onda: 'Gente, banquemos los memes de fútbol pero sin discriminar a nadie'.",
        points: 2,
        feedback: "¡Excelente! Frenar la discriminación sin pelear mantiene la fiesta sana y cuida los valores de todos."
      },
      {
        label: "C",
        description: "Ignorarlo en silencio para no generar lío.",
        points: 1,
        feedback: "Está bien no sumarse, pero animarse a poner un límite amistoso ayuda a que el grupo mantenga el verdadero espíritu futbolero."
      }
    ]
  },
  {
    id: 2,
    title: "El fallo arbitral polémico al minuto 88",
    scenario: "El árbitro anula un gol legítimo de Argentina por una supuesta falta muy dudosa. La tensión en el living está al límite.",
    options: [
      {
        label: "A",
        description: "Gritar la bronca del momento con los amigos, opinar del fallo, pero al final respirar y reconocer que el árbitro es humano.",
        points: 2,
        feedback: "¡Impecable! Se puede debatir y discutir con vehemencia deportiva, sin pasar a la violencia o el odio irracional."
      },
      {
        label: "B",
        description: "Entrar a las redes a amenazar al árbitro y a su familia.",
        points: 0,
        feedback: "Inaceptable. Ningún partido justifica la agresión personal a un juez. Las decisiones se acatan y se respetan."
      },
      {
        label: "C",
        description: "Apagar la tele y enojarse con los invitados que estaban mirando con vos.",
        points: 1,
        feedback: "Bancar en el sufrimiento es parte de nuestra identidad. El partido se vive con los demás en las buenas y en las malas."
      }
    ]
  },
  {
    id: 3,
    title: "El invitado que hincha por otro equipo",
    scenario: "Vino al asado un amigo o colega extranjero cuya selección juega un partido definitorio contra Argentina.",
    options: [
      {
        label: "A",
        description: "Hacerle el vacío, mirarlo mal y gritarle los goles en la cara desmedidamente.",
        points: 0,
        feedback: "Al mundial asisten de todas las culturas. La hospitalidad argentina es recibir con los brazos abiertos y compartir la pasión."
      },
      {
        label: "B",
        description: "Cargarlo en un punto de confianza, invitarle el mate o una empanada y al terminar darse un abrazo sincero.",
        points: 2,
        feedback: "¡Un 10! Rivalidad deportiva los 90 minutos, y antes y después la calidez que nos caracteriza en todo el planeta."
      },
      {
        label: "C",
        description: "Pedirle que no venga para evitar tensiones.",
        points: 1,
        feedback: "El mundial es para compartir con otros. Compartir miradas distintas enriquece la mesa mundialista."
      }
    ]
  },
  {
    id: 4,
    title: "¡Ganamos la final! El festejo en las calles",
    scenario: "Argentina gana un partido histórico y salís a festejar a la plaza o avenida de tu ciudad con miles de personas.",
    options: [
      {
        label: "A",
        description: "Cantar con el alma, abrazar a desconocidos, tirar papelitos y respetar a los que festejan en silencio con sus familias.",
        points: 2,
        feedback: "¡Esa es la verdadera gloria albiceleste! Alegría colectiva, emoción compartida y orgullo popular."
      },
      {
        label: "B",
        description: "Buscar a hinchas del país rival para burlarse agresivamente y romper mobiliario urbano.",
        points: 0,
        feedback: "Ganar está bien, festejar está bien; la violencia y la humillación arruinan el honor de cualquier campeón."
      },
      {
        label: "C",
        description: "Festejar solo en casa sin compartir con nadie.",
        points: 1,
        feedback: "¡El mundial es para vivirlo con OTROS! Aunque sea con tu familia o vecinos, el abrazo de gol no se compara con nada."
      }
    ]
  }
];

