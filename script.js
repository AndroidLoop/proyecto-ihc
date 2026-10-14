/**
 * CONEST - Rediseño de Sistema de Gestión Académica (IHC)
 * Interacciones de Navegación, Accesibilidad y Validación de Formulario
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initPasswordToggle();
    initFormValidation();
    initCalendarAccordion();
    initAcademicCalendar();
    initAboutDialog();
    initSemesterSchedule();
});

const createSections = (records) => records.map(([name, teacher, room]) => ({ name, teacher, room }));

const computacionOneSections = {
    discreteMonday: createSections([
        ['C1P', 'FORCUCCI MARIA', 'Aula 14'],
        ['C2P', 'VILLEGAS BERTHA', 'Aula 28'],
        ['C3P', 'FIGUEROA CARLOS', 'Aula 06'],
        ['C4P', 'FERNANDEZ YULIANA', 'Aula 29'],
        ['C5P', 'PERDOMO MARIELA', 'Aula 21'],
        ['C6P', 'CARRIZO GABRIEL', 'Aula 13']
    ]),
    discreteWednesday: createSections([
        ['C1P', 'FORCUCCI MARIA', 'Aula 16'],
        ['C2P', 'VILLEGAS BERTHA', 'Aula 13'],
        ['C3P', 'FIGUEROA CARLOS', 'Aula 06'],
        ['C4P', 'FERNANDEZ YULIANA', 'Aula 10'],
        ['C5P', 'PERDOMO MARIELA', 'Aula 25'],
        ['C6P', 'CARRIZO GABRIEL', 'Aula 27']
    ]),
    discreteFriday: createSections([
        ['C1P', 'FORCUCCI MARIA', 'Aula 17'],
        ['C2P', 'VILLEGAS BERTHA', 'Aula 27'],
        ['C3P', 'FIGUEROA CARLOS', 'Aula 08'],
        ['C4P', 'FERNANDEZ YULIANA', 'Aula 16'],
        ['C5P', 'PERDOMO MARIELA', 'Aula 09'],
        ['C6P', 'CARRIZO GABRIEL', 'Aula 05']
    ]),
    discreteThursday: createSections([
        ['C5P', 'PERDOMO MARIELA', 'Aula 24'],
        ['C6P', 'CARRIZO GABRIEL', 'Aula 26']
    ]),
    mathOneEarlyMonday: createSections([
        ['U1', 'ALFONZO MARIANNY', 'Aula 06'],
        ['U2', 'FLORES JOSE', 'Aula 26'],
        ['U3', 'OSUNA MARY', 'Aula 30']
    ]),
    mathOneEarlyThursday: createSections([
        ['U1', 'ALFONZO MARIANNY', 'Aula 22'],
        ['U2', 'FLORES JOSE', 'Aula 14'],
        ['U3', 'OSUNA MARY', 'Aula 30']
    ]),
    mathOneMiddleMonday: createSections([
        ['U4', 'PAEZ JESUS', 'Aula 17'],
        ['U5', 'AZUAJE OSWALDO', 'Aula 07']
    ]),
    mathOneMiddleTuesday: createSections([
        ['U4', 'PAEZ JESUS', 'Aula 06'],
        ['U5', 'AZUAJE OSWALDO', 'Aula 17']
    ]),
    mathOneMiddleWednesday: createSections([
        ['U4', 'PAEZ JESUS', 'Aula 06'],
        ['U5', 'AZUAJE OSWALDO', 'Aula 07']
    ]),
    mathOneMiddleThursday: createSections([
        ['U4', 'PAEZ JESUS', 'Aula 06'],
        ['U5', 'AZUAJE OSWALDO', 'Aula 17']
    ]),
    mathOneAfternoonMonday: createSections([
        ['U10', 'AULAR MARIA', 'Aula 17'],
        ['U6', 'CENTENO LORENZO', 'Aula 09'],
        ['U7', 'LOPEZ MAXIMILIANO', 'Aula 10'],
        ['U8', 'RANGEL EZEQUIEL', 'Aula 07'],
        ['U9', 'CARRENO ARTURO', 'Aula 27']
    ]),
    mathOneAfternoonTuesday: createSections([
        ['U10', 'AULAR MARIA', 'Aula 17'],
        ['U6', 'CENTENO LORENZO', 'Aula 09'],
        ['U7', 'LOPEZ MAXIMILIANO', 'Aula 10'],
        ['U8', 'RANGEL EZEQUIEL', 'Aula 07'],
        ['U9', 'CARRENO ARTURO', 'Aula 16']
    ]),
    mathOneAfternoonWednesday: createSections([
        ['U10', 'AULAR MARIA', 'Aula 17'],
        ['U6', 'CENTENO LORENZO', 'Aula 09'],
        ['U7', 'LOPEZ MAXIMILIANO', 'Aula 10'],
        ['U8', 'RANGEL EZEQUIEL', 'Aula 07'],
        ['U9', 'CARRENO ARTURO', 'Aula 27']
    ]),
    mathOneAfternoonThursday: createSections([
        ['U10', 'AULAR MARIA', 'Aula 17'],
        ['U6', 'CENTENO LORENZO', 'Aula 09'],
        ['U7', 'LOPEZ MAXIMILIANO', 'Aula 10'],
        ['U8', 'RANGEL EZEQUIEL', 'Aula 08'],
        ['U9', 'CARRENO ARTURO', 'Aula 27']
    ]),
    informaticaFridayMorning: createSections([
        ['C1L', 'DIAZ ROSSANA', 'Aula 05'],
        ['C2P', 'DIAZ MARIA', 'Aula 05'],
        ['C3P', 'RANGEL WILFREDO', 'Aula 09'],
        ['C4P', 'RODRIGUEZ HONORIO', 'Aula 21']
    ]),
    informaticaFridayMidday: createSections([
        ['C1L', 'DIAZ ROSSANA', 'Aula 05'],
        ['C2P', 'DIAZ MARIA', 'Aula 05'],
        ['C3P', 'RANGEL WILFREDO', 'Aula 08'],
        ['C4P', 'RODRIGUEZ HONORIO', 'Aula 21']
    ]),
    informaticaThursday: createSections([
        ['C1L', 'DIAZ ROSSANA', 'Aula 05'],
        ['C2P', 'DIAZ MARIA', 'Aula 10'],
        ['C3P', 'RANGEL WILFREDO', 'Aula 08'],
        ['C4P', 'RODRIGUEZ HONORIO', 'Aula 09']
    ]),
    algorithmsWednesday: createSections([
        ['C1P', 'BERENGUER MOISES ELIAS', 'Aula 06'],
        ['C2P', 'QUINTERO JOHAN', 'Aula 08'],
        ['C3P', 'ISAAC MARCEL', 'Aula 17'],
        ['C4P', 'MENDOZA LEONARDO', 'Aula 24'],
        ['C5P', 'HERNANDEZ DAVID', 'Aula 05'],
        ['C6P', 'BELISARIO GABRIEL', 'Aula 07'],
        ['C7P', 'FLORES IVAN', 'Aula 09']
    ]),
    algorithmsFriday: createSections([
        ['C1P', 'BERENGUER MOISES ELIAS', 'Aula 06'],
        ['C2P', 'QUINTERO JOHAN', 'Aula 26'],
        ['C3P', 'ISAAC MARCEL', 'Aula 17'],
        ['C4P', 'MENDOZA LEONARDO', 'Aula 27'],
        ['C5P', 'HERNANDEZ DAVID', 'Aula 05'],
        ['C6P', 'BELISARIO GABRIEL', 'Aula 07'],
        ['C7P', 'FLORES IVAN', 'Aula 09']
    ])
};

const quimicaOneSections = {
    mathOneEarlyMonday: createSections([
        ['U1', 'ALFONZO MARIANNY', 'Aula 06'],
        ['U2', 'FLORES JOSE', 'Aula 26'],
        ['U3', 'OSUNA MARY', 'Aula 30']
    ]),
    mathOneEarlyTuesday: createSections([
        ['U1', 'ALFONZO MARIANNY', 'Aula 14'],
        ['U2', 'FLORES JOSE', 'Aula 26'],
        ['U3', 'OSUNA MARY', 'Aula 26']
    ]),
    mathOneEarlyWednesday: createSections([
        ['U1', 'ALFONZO MARIANNY', 'Aula 16'],
        ['U2', 'FLORES JOSE', 'Aula 26'],
        ['U3', 'OSUNA MARY', 'Aula 26']
    ]),
    mathOneEarlyThursday: createSections([
        ['U1', 'ALFONZO MARIANNY', 'Aula 22'],
        ['U2', 'FLORES JOSE', 'Aula 14'],
        ['U3', 'OSUNA MARY', 'Aula 30']
    ]),
    principlesMonday: createSections([
        ['U1', 'BASTIDAS ELSY', 'Aula 23'],
        ['U2', 'CAIGUA AMERICA', 'Aula 16'],
        ['U3', 'BULLON MARY', 'Aula 08'],
        ['U4', 'ORTEGA SINAI', 'Aula 22'],
        ['U5', 'MUÑOZ MARIA', 'Aula 14']
    ]),
    principlesWednesday: createSections([
        ['U1', 'BASTIDAS ELSY', 'Aula 16'],
        ['U2', 'CAIGUA AMERICA', 'Aula 16'],
        ['U3', 'BULLON MARY', 'Aula 17'],
        ['U4', 'ORTEGA SINAI', 'Aula 08'],
        ['U5', 'MUÑOZ MARIA', 'Aula 27']
    ]),
    principlesFriday: createSections([
        ['U1', 'BASTIDAS ELSY', 'Aula 27'],
        ['U2', 'CAIGUA AMERICA', 'Aula 14'],
        ['U3', 'BULLON MARY', 'Aula 10'],
        ['U4', 'ORTEGA SINAI', 'Aula 08'],
        ['U5', 'MUÑOZ MARIA', 'Aula 17']
    ]),
    physicsTuesday: createSections([
        ['U1', 'CLARIZIO VICTOR', 'Aula 14'],
        ['U2', 'BITTARA SIMON', 'Aula 23'],
        ['U3', 'RODRIGUEZ JONATHAN', 'Aula 22']
    ]),
    physicsWednesday: createSections([
        ['U1', 'CLARIZIO VICTOR', 'Aula 16'],
        ['U2', 'BITTARA SIMON', 'Aula 14'],
        ['U3', 'RODRIGUEZ JONATHAN', 'Aula 23']
    ]),
    physicsThursday: createSections([
        ['U1', 'CLARIZIO VICTOR', 'Aula 14'],
        ['U2', 'BITTARA SIMON', 'Aula 23'],
        ['U3', 'RODRIGUEZ JONATHAN', 'Aula 22']
    ]),
    physicsFriday: createSections([
        ['U1', 'CLARIZIO VICTOR', 'Aula 16'],
        ['U2', 'BITTARA SIMON', 'Aula 17'],
        ['U3', 'RODRIGUEZ JONATHAN', 'Aula 22']
    ]),
    physicsAfternoon: createSections([
        ['U4', 'MUJICA ROSA', 'Aula 30'],
        ['U5', 'MARTINEZ HEIDI', 'Aula 22']
    ])
};

const semesterSchedules = {
    'computacion-1': {
        days: [
            { key: 'monday', label: 'Lunes' },
            { key: 'tuesday', label: 'Martes' },
            { key: 'wednesday', label: 'Miércoles' },
            { key: 'thursday', label: 'Jueves' },
            { key: 'friday', label: 'Viernes' }
        ],
        slots: [
            {
                time: '07:00 - 09:00',
                entries: {
                    monday: [
                        { code: '6110', sections: computacionOneSections.discreteMonday },
                        { code: '8206', sections: computacionOneSections.mathOneEarlyMonday }
                    ],
                    tuesday: [{ code: '8206', sections: computacionOneSections.mathOneEarlyMonday }],
                    wednesday: [
                        { code: '6110', sections: computacionOneSections.discreteWednesday },
                        { code: '8206', sections: computacionOneSections.mathOneEarlyMonday }
                    ],
                    thursday: [{ code: '8206', sections: computacionOneSections.mathOneEarlyThursday }],
                    friday: [{ code: '6110', sections: computacionOneSections.discreteFriday }]
                }
            },
            {
                time: '09:00 - 11:00',
                entries: {
                    monday: [{ code: '8206', sections: computacionOneSections.mathOneMiddleMonday }],
                    tuesday: [{ code: '8206', sections: computacionOneSections.mathOneMiddleTuesday }],
                    wednesday: [{ code: '8206', sections: computacionOneSections.mathOneMiddleWednesday }],
                    thursday: [{ code: '8206', sections: computacionOneSections.mathOneMiddleThursday }],
                    friday: [{ code: '6301', sections: computacionOneSections.informaticaFridayMorning }]
                }
            },
            {
                time: '11:00 - 12:00',
                entries: {
                    thursday: [{ code: '6110', sections: computacionOneSections.discreteThursday }],
                    friday: [{ code: '6301', sections: computacionOneSections.informaticaFridayMidday }]
                }
            },
            {
                time: '12:00 - 13:00',
                entries: {
                    thursday: [{ code: '6110', sections: computacionOneSections.discreteThursday }]
                }
            },
            {
                time: '13:00 - 14:00',
                entries: {
                    monday: [{ code: '8206', sections: computacionOneSections.mathOneAfternoonMonday }],
                    tuesday: [{ code: '8206', sections: computacionOneSections.mathOneAfternoonTuesday }],
                    wednesday: [{ code: '8206', sections: computacionOneSections.mathOneAfternoonWednesday }],
                    thursday: [{ code: '8206', sections: computacionOneSections.mathOneAfternoonThursday }]
                }
            },
            {
                time: '14:00 - 15:00',
                entries: {
                    monday: [{ code: '8206', sections: computacionOneSections.mathOneAfternoonMonday }],
                    tuesday: [{ code: '8206', sections: computacionOneSections.mathOneAfternoonTuesday }],
                    wednesday: [{ code: '8206', sections: computacionOneSections.mathOneAfternoonWednesday }],
                    thursday: [{ code: '8206', sections: computacionOneSections.mathOneAfternoonThursday }],
                    friday: [{ code: '6201', sections: computacionOneSections.algorithmsFriday }]
                }
            },
            {
                time: '15:00 - 16:00',
                entries: {
                    wednesday: [{ code: '6201', sections: computacionOneSections.algorithmsWednesday }],
                    thursday: [{ code: '6301', sections: computacionOneSections.informaticaThursday }],
                    friday: [{ code: '6201', sections: computacionOneSections.algorithmsFriday }]
                }
            },
            {
                time: '16:00 - 17:00',
                entries: {
                    wednesday: [{ code: '6201', sections: computacionOneSections.algorithmsWednesday }],
                    thursday: [{ code: '6301', sections: computacionOneSections.informaticaThursday }]
                }
            }
        ]
    },
    'quimica-1': {
        days: [
            { key: 'monday', label: 'Lunes' },
            { key: 'tuesday', label: 'Martes' },
            { key: 'wednesday', label: 'Miércoles' },
            { key: 'thursday', label: 'Jueves' },
            { key: 'friday', label: 'Viernes' }
        ],
        slots: [
            {
                time: '07:00 - 09:00',
                entries: {
                    monday: [{ code: '8206', sections: quimicaOneSections.mathOneEarlyMonday }],
                    tuesday: [{ code: '8206', sections: quimicaOneSections.mathOneEarlyTuesday }],
                    wednesday: [{ code: '8206', sections: quimicaOneSections.mathOneEarlyWednesday }],
                    thursday: [{ code: '8206', sections: quimicaOneSections.mathOneEarlyThursday }]
                }
            },
            {
                time: '09:00 - 11:00',
                entries: {
                    monday: [{ code: '3401', sections: quimicaOneSections.principlesMonday }],
                    tuesday: [{ code: '8206', sections: computacionOneSections.mathOneMiddleTuesday }],
                    wednesday: [
                        { code: '3401', sections: quimicaOneSections.principlesWednesday },
                        { code: '8206', sections: computacionOneSections.mathOneMiddleWednesday }
                    ],
                    thursday: [{ code: '8206', sections: computacionOneSections.mathOneMiddleThursday }],
                    friday: [{ code: '3401', sections: quimicaOneSections.principlesFriday }]
                }
            },
            {
                time: '11:00 - 13:00',
                entries: {
                    tuesday: [{ code: '2106', sections: quimicaOneSections.physicsTuesday }],
                    wednesday: [{ code: '2106', sections: quimicaOneSections.physicsWednesday }],
                    thursday: [{ code: '2106', sections: quimicaOneSections.physicsThursday }],
                    friday: [{ code: '2106', sections: quimicaOneSections.physicsFriday }]
                }
            },
            {
                time: '13:00 - 15:00',
                entries: {
                    monday: [{ code: '8206', sections: computacionOneSections.mathOneAfternoonMonday }],
                    tuesday: [{ code: '8206', sections: computacionOneSections.mathOneAfternoonTuesday }],
                    wednesday: [{ code: '8206', sections: computacionOneSections.mathOneAfternoonWednesday }],
                    thursday: [{ code: '8206', sections: computacionOneSections.mathOneAfternoonThursday }]
                }
            },
            {
                time: '15:00 - 17:00',
                entries: {
                    tuesday: [{ code: '2106', sections: quimicaOneSections.physicsAfternoon }],
                    wednesday: [{ code: '2106', sections: quimicaOneSections.physicsAfternoon }],
                    thursday: [{ code: '2106', sections: quimicaOneSections.physicsAfternoon }],
                    friday: [{ code: '2106', sections: quimicaOneSections.physicsAfternoon }]
                }
            }
        ]
    },
    'computacion-3': {
    days: [
        { key: 'monday', label: 'Lunes' },
        { key: 'tuesday', label: 'Martes' },
        { key: 'wednesday', label: 'Miércoles' },
        { key: 'thursday', label: 'Jueves' },
        { key: 'friday', label: 'Viernes' }
    ],
    slots: [
        {
            time: '07:00 - 08:00',
            entries: {
                monday: [{ code: '6203', sections: [{ name: 'C1M', teacher: 'CASTRO MARCEL' }] }],
                wednesday: [{ code: '6203', sections: [{ name: 'C1M', teacher: 'CASTRO MARCEL' }] }],
                friday: [{ code: '6203', sections: [
                    { name: 'C1M', teacher: 'CASTRO MARCEL' },
                    { name: 'C2M', teacher: 'VARGAS ROSANA' }
                ] }]
            }
        },
        {
            time: '08:00 - 09:00',
            entries: {
                monday: [{ code: '6203', sections: [{ name: 'C1M', teacher: 'CASTRO MARCEL' }] }],
                wednesday: [{ code: '6203', sections: [{ name: 'C1M', teacher: 'CASTRO MARCEL' }] }],
                friday: [
                    { code: '0511', sections: [{ name: 'U1', teacher: 'CABRERA CARLOS' }] },
                    { code: '6203', sections: [
                        { name: 'C1M', teacher: 'CASTRO MARCEL' },
                        { name: 'C2M', teacher: 'VARGAS ROSANA' }
                    ] }
                ]
            }
        },
        {
            time: '09:00 - 11:00',
            entries: {
                monday: [{ code: '8208', sections: [{ name: 'U1', teacher: 'TORRES FRANGELIS', room: 'Aula 27' }] }],
                tuesday: [
                    { code: '6002', sections: [
                        { name: 'C1P', teacher: 'OLIVARES ANDRES', room: 'Aula 08' },
                        { name: 'C2P', teacher: 'MARCANO PABLO', room: 'Aula 16' }
                    ] },
                    { code: '8208', sections: [{ name: 'U1', teacher: 'TORRES FRANGELIS', room: 'Aula 28' }] }
                ],
                wednesday: [{ code: '8208', sections: [{ name: 'U1', teacher: 'TORRES FRANGELIS', room: 'Aula 28' }] }],
                thursday: [
                    { code: '6002', sections: [
                        { name: 'C1P', teacher: 'OLIVARES ANDRES', room: 'Aula 08' },
                        { name: 'C2P', teacher: 'MARCANO PABLO', room: 'Aula 16' }
                    ] },
                    { code: '8208', sections: [{ name: 'U1', teacher: 'TORRES FRANGELIS', room: 'Aula 26' }] }
                ],
                friday: [
                    { code: '0511', sections: [{ name: 'U1', teacher: 'CABRERA CARLOS' }] },
                    { code: '6002', sections: [
                        { name: 'C1P', teacher: 'OLIVARES ANDRES', room: 'Aula 06' },
                        { name: 'C2P', teacher: 'MARCANO PABLO', room: 'Aula 07' }
                    ] }
                ]
            }
        },
        {
            time: '11:00 - 13:00',
            entries: {
                monday: [
                    { code: '6108', sections: [{ name: 'C1P', teacher: 'CASTILLO CARLOS', room: 'Aula 16' }] },
                    { code: '8208', sections: [
                        { name: 'U2', teacher: 'MENDOZA REYFEL', room: 'Aula 08' },
                        { name: 'U3', teacher: 'HERNANDEZ DIEGO', room: 'Aula 27' }
                    ] }
                ],
                tuesday: [{ code: '8208', sections: [
                    { name: 'U2', teacher: 'MENDOZA REYFEL', room: 'Aula 06' },
                    { name: 'U3', teacher: 'HERNANDEZ DIEGO', room: 'Aula 25' }
                ] }],
                wednesday: [
                    { code: '6108', sections: [{ name: 'C1P', teacher: 'CASTILLO CARLOS', room: 'Aula 25' }] },
                    { code: '8208', sections: [
                        { name: 'U2', teacher: 'MENDOZA REYFEL', room: 'Aula 13' },
                        { name: 'U3', teacher: 'HERNANDEZ DIEGO', room: 'Aula 29' }
                    ] }
                ],
                thursday: [{ code: '8208', sections: [
                    { name: 'U2', teacher: 'MENDOZA REYFEL', room: 'Aula 10' },
                    { name: 'U3', teacher: 'HERNANDEZ DIEGO', room: 'Aula 13' }
                ] }],
                friday: [{ code: '6108', sections: [{ name: 'C1P', teacher: 'CASTILLO CARLOS', room: 'Aula 06' }] }]
            }
        },
        {
            time: '13:00 - 15:00',
            entries: {
                monday: [{ code: '8208', sections: [{ name: 'U4', teacher: 'GONZALEZ GUILLERMO', room: 'Aula 06' }] }],
                tuesday: [{ code: '8208', sections: [{ name: 'U4', teacher: 'GONZALEZ GUILLERMO', room: 'Aula 06' }] }],
                wednesday: [{ code: '8208', sections: [{ name: 'U4', teacher: 'GONZALEZ GUILLERMO', room: 'Aula 06' }] }],
                thursday: [{ code: '8208', sections: [{ name: 'U4', teacher: 'GONZALEZ GUILLERMO', room: 'Aula 06' }] }]
            }
        },
        {
            time: '15:00 - 17:00',
            entries: {
                monday: [{ code: '6203', sections: [{ name: 'C2M', teacher: 'VARGAS ROSANA' }] }],
                wednesday: [{ code: '6203', sections: [{ name: 'C2M', teacher: 'VARGAS ROSANA' }] }]
            }
        }
    ]
    }
};

const semesterCourses = {
    '0030': { name: 'INGLES I', color: 'gray' },
    '0511': { name: 'FUNDAMENTOS DE BIOÉTICA', color: 'blue' },
    '2106': { name: 'FÍSICA GENERAL I', color: 'blue' },
    '3401': { name: 'PRINCIPIOS QUÍMICA I', color: 'cyan' },
    '6002': { name: 'ORG.Y ESTRUCT.DEL COMP.II', color: 'cyan' },
    '6108': { name: 'MATEMATICAS DISCRETAS III', color: 'amber' },
    '6110': { name: 'MATEMÁTICAS DISCRETAS I', color: 'blue' },
    '6203': { name: 'INGENIERIA DE SOFTWARE', color: 'gray' },
    '6201': { name: 'ALGORITMOS Y PROGRAMACIÓN', color: 'cyan' },
    '6301': { name: 'INTROD. A LA INFORMÁTICA', color: 'peach' },
    '8206': { name: 'MATEMÁTICA I', color: 'gray' },
    '8208': { name: 'MATEMATICA III', color: 'peach' }
};

const studentCountsByTime = [
    { time: '07:00 - 07:59', counts: ['13', '1', '13', '1', '22'] },
    { time: '08:00 - 08:59', counts: ['13', '1', '13', '1', '22'] },
    { time: '09:00 - 09:59', counts: ['16', '73', '12', '73', '73'] },
    { time: '10:00 - 10:59', counts: ['16', '73', '12', '73', '73'] },
    { time: '11:00 - 11:59', counts: ['27', '5', '27', '9', '31'] },
    { time: '12:00 - 12:59', counts: ['27', '5', '27', '9', '31'] },
    { time: '13:00 - 13:59', counts: ['23', '23', '25', '18', '6'] },
    { time: '14:00 - 14:59', counts: ['23', '23', '25', '18', '28'] },
    { time: '15:00 - 15:59', counts: ['10', '3', '32', 'LIBRE', '22'] },
    { time: '16:00 - 16:59', counts: ['10', '3', '30', 'LIBRE', 'LIBRE'] },
    { time: '17:00 - 17:59', counts: ['LIBRE', '1', 'LIBRE', '3', 'LIBRE'] },
    { time: '18:00 - 18:59', counts: ['LIBRE', 'LIBRE', 'LIBRE', '3', 'LIBRE'] }
];

function initSemesterSchedule() {
    const tableBody = document.getElementById('semesterScheduleBody');
    if (!tableBody) return;

    const semesterFilter = document.getElementById('semesterFilter');
    const careerFilter = document.getElementById('careerFilter');
    const chemistryOption = careerFilter && careerFilter.querySelector('option[value="quimica"]');
    const updateCareerAvailability = () => {
        const computerScienceOnly = semesterFilter && semesterFilter.value === '3';
        if (chemistryOption) chemistryOption.hidden = computerScienceOnly;
        if (computerScienceOnly && careerFilter.value !== 'computacion') {
            careerFilter.value = 'computacion';
        }
    };
    const renderSelectedSchedule = () => {
        updateCareerAvailability();
        const career = careerFilter ? careerFilter.value : 'computacion';
        const semester = semesterFilter ? semesterFilter.value : '3';
        closeExpandedScheduleCard();
        renderSemesterSchedule(semesterSchedules[`${career}-${semester}`], tableBody);
    };

    renderSelectedSchedule();
    if (semesterFilter) semesterFilter.addEventListener('change', renderSelectedSchedule);
    if (careerFilter) careerFilter.addEventListener('change', renderSelectedSchedule);

    const countTableBody = document.getElementById('studentCountScheduleBody');
    const courseSchedule = document.getElementById('semesterSchedule');
    const countSchedule = document.getElementById('studentCountSchedule');
    const scheduleViewport = document.getElementById('semesterScheduleViewport');
    const countViewToggle = document.getElementById('toggleStudentCountView');
    const cardActions = document.getElementById('scheduleCardActions');
    if (!countTableBody || !courseSchedule || !countSchedule || !scheduleViewport || !countViewToggle || !cardActions) return;

    studentCountsByTime.forEach((timeSlot) => {
        const row = document.createElement('tr');
        const timeHeader = document.createElement('th');
        timeHeader.scope = 'row';
        timeHeader.className = 'schedule-time';
        timeHeader.textContent = timeSlot.time;
        row.append(timeHeader);

        timeSlot.counts.forEach((count) => {
            const cell = document.createElement('td');
            cell.className = 'student-count-value';
            if (count === 'LIBRE') {
                cell.classList.add('is-free');
                cell.textContent = count;
            } else {
                const link = document.createElement('a');
                link.href = '#';
                link.className = 'student-count-link';
                link.textContent = count;
                cell.append(link);
            }
            row.append(cell);
        });
        countTableBody.append(row);
    });

    countTableBody.addEventListener('click', (event) => {
        if (event.target.closest('.student-count-link')) event.preventDefault();
    });

    countViewToggle.addEventListener('click', () => {
        const showCountSchedule = countViewToggle.getAttribute('aria-pressed') !== 'true';
        countViewToggle.setAttribute('aria-pressed', String(showCountSchedule));
        countViewToggle.querySelector('span').textContent = showCountSchedule
            ? 'Horario por curso'
            : 'Estudiantes por Horario';
        courseSchedule.hidden = showCountSchedule;
        countSchedule.hidden = !showCountSchedule;
        cardActions.hidden = showCountSchedule;
        scheduleViewport.setAttribute(
            'aria-label',
            showCountSchedule
                ? 'Cantidad de estudiantes por día y hora; desplazamiento horizontal disponible'
                : 'Horario semanal; desplazamiento horizontal disponible'
        );
        if (showCountSchedule) closeExpandedScheduleCard();
    });

    tableBody.addEventListener('click', (event) => {
        const card = event.target.closest('.schedule-card');
        if (!card) return;

        const cardGrid = card.closest('.schedule-card-grid');
        const expandedCard = cardGrid.querySelector('.schedule-card[aria-expanded="true"]');
        if (expandedCard === card) {
            setScheduleCardExpanded(card, false);
        } else {
            if (expandedCard) setScheduleCardExpanded(expandedCard, false);
            setScheduleCardExpanded(card, true);
        }
    });

    const openSinglesButton = document.getElementById('openSingleCardDetails');
    if (openSinglesButton) {
        openSinglesButton.addEventListener('click', () => {
            tableBody.querySelectorAll('.schedule-card-grid').forEach((cardGrid) => {
                if (cardGrid.children.length === 1) {
                    setScheduleCardExpanded(cardGrid.querySelector('.schedule-card'), true);
                }
            });
        });
    }

    const closeButton = document.getElementById('closeScheduleDetails');
    if (closeButton) closeButton.addEventListener('click', () => closeExpandedScheduleCard());

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeExpandedScheduleCard(true);
    });
}

function renderSemesterSchedule(schedule, tableBody) {
    tableBody.replaceChildren();

    if (!schedule) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.className = 'schedule-empty-state';
        cell.colSpan = 6;
        cell.textContent = 'El horario de esta combinación aún no está disponible.';
        row.append(cell);
        tableBody.append(row);
        return;
    }

    schedule.slots.forEach((slot, slotIndex) => {
        const row = document.createElement('tr');
        const timeHeader = document.createElement('th');
        timeHeader.scope = 'row';
        timeHeader.className = 'schedule-time';
        timeHeader.textContent = slot.time;
        row.append(timeHeader);

        schedule.days.forEach((day) => {
            const cell = document.createElement('td');
            cell.className = 'schedule-cell';
            cell.setAttribute('aria-label', `${day.label}, ${slot.time}`);

            const cardGrid = document.createElement('div');
            cardGrid.className = 'schedule-card-grid';
            const entries = (slot.entries[day.key] || []).slice(0, 4);
            if (entries.length === 1) cardGrid.classList.add('has-one-card');
            if (entries.length === 2) cardGrid.classList.add('has-two-cards');
            entries.forEach((entry, entryIndex) => {
                const card = createScheduleCard(entry, slot.time, slotIndex, day.key, entryIndex);
                cardGrid.append(card);
                if (entries.length === 1) setScheduleCardExpanded(card, true);
            });

            cell.append(cardGrid);
            row.append(cell);
        });

        tableBody.append(row);
    });
}

function createScheduleCard(entry, time, slotIndex, dayKey, entryIndex) {
    const course = semesterCourses[entry.code];
    const card = document.createElement('button');
    const detailsId = `schedule-details-${slotIndex}-${dayKey}-${entryIndex}`;
    card.type = 'button';
    card.className = `schedule-card schedule-card-${course.color}`;
    card.setAttribute('aria-expanded', 'false');
    card.setAttribute('aria-controls', detailsId);
    card.setAttribute('aria-label', `Ver información: ${entry.code}, ${course.name}`);
    card.dataset.detailsLabel = `Ver información: ${entry.code}, ${course.name}`;
    card.dataset.closeLabel = `Ocultar información: ${entry.code}, ${course.name}`;
    const sectionLabel = document.createElement('span');
    sectionLabel.className = 'schedule-section-label';
    sectionLabel.setAttribute('aria-hidden', 'true');
    sectionLabel.textContent = entry.sections.map((section) => section.name).join(' / ');
    card.append(sectionLabel);

    const details = document.createElement('span');
    details.className = 'schedule-card-details';
    details.id = detailsId;
    details.hidden = true;

    const heading = document.createElement('span');
    heading.className = 'schedule-detail-heading';
    heading.textContent = `${entry.code} · ${course.name}`;
    details.append(heading);

    entry.sections.forEach((section) => {
        const line = document.createElement('span');
        line.className = 'schedule-detail-line';
        line.textContent = [section.name, section.teacher, section.room].filter(Boolean).join(' · ');
        details.append(line);
    });

    const timeLine = document.createElement('span');
    timeLine.className = 'schedule-detail-time';
    timeLine.textContent = time;
    details.append(timeLine);
    card.append(details);

    return card;
}

function setScheduleCardExpanded(card, expanded) {
    const cardGrid = card.closest('.schedule-card-grid');
    if (!cardGrid) return;

    cardGrid.classList.toggle('has-expanded-card', expanded);
    cardGrid.querySelectorAll('.schedule-card').forEach((item) => {
        const isSelected = item === card && expanded;
        item.hidden = expanded && !isSelected;
        item.classList.toggle('is-expanded', isSelected);
        item.setAttribute('aria-expanded', String(isSelected));
        item.setAttribute('aria-label', isSelected ? item.dataset.closeLabel : item.dataset.detailsLabel);
        item.querySelector('.schedule-section-label').hidden = isSelected;
        item.querySelector('.schedule-card-details').hidden = !isSelected;
    });
}

function closeExpandedScheduleCard(restoreFocus = false) {
    const expandedCards = [...document.querySelectorAll('.schedule-card[aria-expanded="true"]')];
    if (!expandedCards.length) return;

    const focusedCard = expandedCards.find((card) => card === document.activeElement) || expandedCards[0];
    expandedCards.forEach((card) => setScheduleCardExpanded(card, false));
    if (restoreFocus) focusedCard.focus();
}

function initCalendarAccordion() {
    const toggle = document.getElementById('calendarToggle');
    const panel = document.getElementById('calendarPanel');

    if (!toggle || !panel) return;

    toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isExpanded));
        panel.hidden = isExpanded;
    });
}

const academicCalendar = {
    year: 2026,
    month: 9,
    today: '2026-10-13',
    events: [
        { id: 'withdrawal-deadline', title: 'Fecha máxima de retiro', start: '2026-10-09', end: '2026-10-09', color: 'deadline' },
        { id: 'grading-week', title: 'Semana de calificación', start: '2026-10-19', end: '2026-10-30', color: 'grading' },
        { id: 'repair-week', title: 'Semana de reparación', start: '2026-10-26', end: '2026-10-30', color: 'repair' }
    ]
};

function initAcademicCalendar() {
    const weeksContainer = document.getElementById('calendarWeeks');
    const eventList = document.getElementById('calendarEventList');
    const clearButton = document.getElementById('clearCalendarSelection');
    const selectionStatus = document.getElementById('calendarSelectionStatus');
    const todayLabel = document.querySelector('.today-label');
    if (!weeksContainer || !eventList || !clearButton || !selectionStatus || !todayLabel) return;

    const { year, month, today, events } = academicCalendar;
    const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    const firstDayOffset = (new Date(Date.UTC(year, month, 1)).getUTCDay() + 6) % 7;
    const weekCount = Math.ceil((firstDayOffset + daysInMonth) / 7);
    const fullDateFormatter = new Intl.DateTimeFormat('es-VE', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
    });
    const dateFormatter = new Intl.DateTimeFormat('es-VE', {
        day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
    });
    const dayFormatter = new Intl.DateTimeFormat('es-VE', { day: 'numeric', timeZone: 'UTC' });
    const makeDate = (day) => new Date(Date.UTC(year, month, day));
    const makeDateKey = (date) => date.toISOString().slice(0, 10);
    let selectedEventId = null;
    let selectedDate = null;

    todayLabel.textContent = `Hoy · ${today.slice(-2)}`;
    renderCalendarEventCards(eventList, events, dateFormatter, dayFormatter);
    renderCalendarWeeks(weeksContainer, {
        year, month, today, events, daysInMonth, firstDayOffset, weekCount, fullDateFormatter, makeDate, makeDateKey
    });

    function updateSelection(message) {
        const activeEvents = selectedEventId
            ? events.filter((calendarEvent) => calendarEvent.id === selectedEventId)
            : selectedDate
                ? events.filter((calendarEvent) => selectedDate >= calendarEvent.start && selectedDate <= calendarEvent.end)
                : [];
        const activeEventIds = new Set(activeEvents.map((calendarEvent) => calendarEvent.id));

        weeksContainer.querySelectorAll('.calendar-date-highlight').forEach((highlight) => highlight.remove());
        weeksContainer.querySelectorAll('.calendar-day[data-date]').forEach((dayButton) => {
            const date = dayButton.dataset.date;
            const isSelectedDate = date === selectedDate;
            const isInActiveEvent = activeEvents.some((calendarEvent) => (
                date >= calendarEvent.start && date <= calendarEvent.end
            ));
            dayButton.classList.toggle('is-selected-date', isSelectedDate);
            dayButton.classList.toggle('is-event-highlighted', isInActiveEvent);
            dayButton.setAttribute('aria-pressed', String(isSelectedDate));

            if (!isSelectedDate && !isInActiveEvent) return;
            const highlight = document.createElement('span');
            highlight.className = 'calendar-date-highlight';
            if (isSelectedDate) highlight.classList.add('is-date-selected');
            if (isInActiveEvent) highlight.classList.add('is-event-range');
            highlight.style.gridColumn = dayButton.dataset.column;
            highlight.style.gridRow = isInActiveEvent ? '1 / -1' : '1';
            dayButton.closest('.calendar-week').append(highlight);
        });

        eventList.querySelectorAll('.calendar-event-card').forEach((card) => {
            const isActive = activeEventIds.has(card.dataset.eventId);
            card.classList.toggle('is-selected', isActive);
            card.setAttribute('aria-pressed', String(isActive));
        });
        weeksContainer.querySelectorAll('.calendar-event-bar, .calendar-event-dot').forEach((marker) => {
            marker.classList.toggle('is-selected', activeEventIds.has(marker.dataset.eventId));
        });

        clearButton.disabled = selectedEventId === null && selectedDate === null;
        selectionStatus.textContent = message;
    }

    weeksContainer.addEventListener('click', (event) => {
        const dayButton = event.target.closest('.calendar-day[data-date]');
        if (!dayButton) return;
        selectedDate = selectedDate === dayButton.dataset.date ? null : dayButton.dataset.date;
        selectedEventId = null;
        updateSelection(selectedDate ? `Fecha seleccionada: ${dayButton.getAttribute('aria-label')}` : 'Selección limpiada.');
    });

    weeksContainer.addEventListener('keydown', (event) => {
        const dayButton = event.target.closest('.calendar-day[data-date]');
        if (!dayButton) return;
        const keyOffsets = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
        if (keyOffsets[event.key] !== undefined) {
            event.preventDefault();
            const currentDay = Number(dayButton.dataset.date.slice(-2));
            const nextDay = Math.min(daysInMonth, Math.max(1, currentDay + keyOffsets[event.key]));
            weeksContainer.querySelector(`[data-date="${makeDateKey(makeDate(nextDay))}"]`).focus();
        }
    });

    eventList.addEventListener('click', (event) => {
        const card = event.target.closest('.calendar-event-card');
        if (!card) return;
        selectedEventId = selectedEventId === card.dataset.eventId ? null : card.dataset.eventId;
        selectedDate = null;
        const selectedEvent = events.find((calendarEvent) => calendarEvent.id === selectedEventId);
        updateSelection(selectedEvent
            ? `Evento seleccionado: ${selectedEvent.title}, ${card.querySelector('.calendar-event-dates').textContent}.`
            : 'Selección limpiada.');
    });

    clearButton.addEventListener('click', () => {
        selectedDate = null;
        selectedEventId = null;
        updateSelection('Selección limpiada.');
    });

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape' || (selectedEventId === null && selectedDate === null)) return;
        selectedDate = null;
        selectedEventId = null;
        updateSelection('Selección limpiada.');
    });

    document.addEventListener('click', (event) => {
        if (event.target.closest('.calendar-event-card, .calendar-day[data-date], #clearCalendarSelection')) return;
        if (selectedEventId === null && selectedDate === null) return;
        selectedDate = null;
        selectedEventId = null;
        updateSelection('Selección limpiada.');
    }, true);
}

function renderCalendarEventCards(eventList, events, dateFormatter, dayFormatter) {
    events.forEach((calendarEvent) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = `calendar-event-card calendar-event-${calendarEvent.color}`;
        card.dataset.eventId = calendarEvent.id;
        card.setAttribute('aria-pressed', 'false');

        const dateLabel = formatCalendarEventRange(calendarEvent, dateFormatter, dayFormatter);
        card.setAttribute('aria-label', `${calendarEvent.title}, ${dateLabel}`);

        const swatch = document.createElement('span');
        swatch.className = 'calendar-event-swatch';
        swatch.setAttribute('aria-hidden', 'true');
        const copy = document.createElement('span');
        copy.className = 'calendar-event-copy';
        const title = document.createElement('span');
        title.className = 'calendar-event-title';
        title.textContent = calendarEvent.title;
        const dates = document.createElement('span');
        dates.className = 'calendar-event-dates';
        dates.textContent = dateLabel;
        copy.append(title, dates);
        card.append(swatch, copy);
        eventList.append(card);
    });
}

function formatCalendarEventRange(calendarEvent, dateFormatter, dayFormatter) {
    const start = new Date(`${calendarEvent.start}T12:00:00Z`);
    const end = new Date(`${calendarEvent.end}T12:00:00Z`);
    if (calendarEvent.start === calendarEvent.end) return dateFormatter.format(start);

    const sameMonth = calendarEvent.start.slice(0, 7) === calendarEvent.end.slice(0, 7);
    return sameMonth
        ? `Del ${dayFormatter.format(start)} al ${dateFormatter.format(end)}`
        : `Del ${dateFormatter.format(start)} al ${dateFormatter.format(end)}`;
}

function renderCalendarWeeks(weeksContainer, calendar) {
    const { year, month, today, events, daysInMonth, firstDayOffset, weekCount, fullDateFormatter, makeDate, makeDateKey } = calendar;

    for (let weekIndex = 0; weekIndex < weekCount; weekIndex += 1) {
        const week = document.createElement('div');
        week.className = 'calendar-week';
        const weekStartIndex = weekIndex * 7;

        for (let column = 0; column < 7; column += 1) {
            const day = weekStartIndex + column - firstDayOffset + 1;
            if (day < 1 || day > daysInMonth) {
                const emptyDay = document.createElement('span');
                emptyDay.className = 'calendar-day is-empty';
                emptyDay.setAttribute('aria-hidden', 'true');
                week.append(emptyDay);
                continue;
            }

            const date = makeDateKey(makeDate(day));
            const matchingEvents = events.filter((calendarEvent) => date >= calendarEvent.start && date <= calendarEvent.end);
            const dayButton = document.createElement('button');
            dayButton.type = 'button';
            dayButton.className = 'calendar-day';
            dayButton.dataset.date = date;
            dayButton.dataset.column = String(column + 1);
            dayButton.style.gridColumn = String(column + 1);
            dayButton.textContent = String(day);
            dayButton.setAttribute('aria-label', matchingEvents.length
                ? `${fullDateFormatter.format(makeDate(day))}. Eventos: ${matchingEvents.map((item) => item.title).join(', ')}`
                : fullDateFormatter.format(makeDate(day)));
            dayButton.setAttribute('aria-pressed', 'false');
            if (date === today) {
                dayButton.classList.add('is-today');
                dayButton.setAttribute('aria-current', 'date');
            }
            week.append(dayButton);
        }

        const laneEnds = [];
        events.forEach((calendarEvent) => {
            const eventStart = Number(calendarEvent.start.slice(-2)) + firstDayOffset - 1;
            const eventEnd = Number(calendarEvent.end.slice(-2)) + firstDayOffset - 1;
            const segmentStart = Math.max(weekStartIndex, eventStart);
            const segmentEnd = Math.min(weekStartIndex + 6, eventEnd);
            if (segmentStart > segmentEnd) return;

            const startColumn = segmentStart - weekStartIndex;
            const endColumn = segmentEnd - weekStartIndex;
            let lane = laneEnds.findIndex((laneEnd) => startColumn > laneEnd);
            if (lane === -1) lane = laneEnds.length;
            laneEnds[lane] = endColumn;

            const isSingleDay = calendarEvent.start === calendarEvent.end;
            const marker = document.createElement('span');
            marker.className = `${isSingleDay ? 'calendar-event-dot' : 'calendar-event-bar'} calendar-event-${calendarEvent.color}`;
            marker.dataset.eventId = calendarEvent.id;
            marker.setAttribute('aria-hidden', 'true');
            marker.style.gridColumn = `${startColumn + 1} / ${endColumn + 2}`;
            marker.style.gridRow = String(lane + 2);
            if (!isSingleDay && segmentStart > eventStart) marker.classList.add('continues-before');
            if (!isSingleDay && segmentEnd < eventEnd) marker.classList.add('continues-after');
            week.append(marker);
        });

    week.classList.toggle('has-event-lanes', laneEnds.length > 0);
    week.style.setProperty('--calendar-lane-count', laneEnds.length);
        weeksContainer.append(week);
    }
}

function initAboutDialog() {
    const trigger = document.getElementById('aboutTrigger');
    const dialog = document.getElementById('aboutDialog');
    const closeButton = document.getElementById('aboutDialogClose');

    if (!trigger || !dialog || !closeButton) return;

    trigger.addEventListener('click', () => dialog.showModal());
    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            event.preventDefault();
            dialog.close();
        }
    });
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) dialog.close();
    });
}

/* --------------------------------------------------------------------------
   1. Navegación Accesible y Responsive
   -------------------------------------------------------------------------- */
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const primaryNavList = document.getElementById('primaryNavList');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const submenuToggles = document.querySelectorAll('.submenu-toggle');

    // Menú hamburguesa móvil
    if (navToggle && primaryNavList) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!isExpanded));
            primaryNavList.classList.toggle('is-active', !isExpanded);
        });
    }

    // Dropdowns de nivel 1
    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const parentItem = toggle.closest('.nav-item');
            const isCurrentlyOpen = parentItem.classList.contains('is-open');

            // Cerrar otros dropdowns abiertos
            document.querySelectorAll('.nav-item.is-open').forEach((item) => {
                if (item !== parentItem) {
                    item.classList.remove('is-open');
                    const btn = item.querySelector('.dropdown-toggle');
                    if (btn) btn.setAttribute('aria-expanded', 'false');
                }
            });

            // Conmutar estado del actual
            if (isCurrentlyOpen) {
                parentItem.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            } else {
                parentItem.classList.add('is-open');
                toggle.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Submenús anidados (ej. Grado)
    submenuToggles.forEach((subToggle) => {
        subToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const parentSubmenu = subToggle.closest('.has-submenu');
            const isSubOpen = parentSubmenu.classList.contains('is-open');

            if (isSubOpen) {
                parentSubmenu.classList.remove('is-open');
                subToggle.setAttribute('aria-expanded', 'false');
            } else {
                parentSubmenu.classList.add('is-open');
                subToggle.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Cerrar menús al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.main-nav')) {
            closeAllDropdowns();
        }
    });

    // Manejo de teclado (Escape para cerrar menús)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openDropdown = document.querySelector('.nav-item.is-open');
            if (openDropdown) {
                const toggle = openDropdown.querySelector('.dropdown-toggle');
                closeAllDropdowns();
                if (toggle) toggle.focus();
            }
        }
    });

    function closeAllDropdowns() {
        document.querySelectorAll('.nav-item.is-open').forEach((item) => {
            item.classList.remove('is-open');
            const btn = item.querySelector('.dropdown-toggle');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });

        document.querySelectorAll('.has-submenu.is-open').forEach((item) => {
            item.classList.remove('is-open');
            const btn = item.querySelector('.submenu-toggle');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });
    }
}

/* --------------------------------------------------------------------------
   2. Mostrar / Ocultar Contraseña
   -------------------------------------------------------------------------- */
function initPasswordToggle() {
    const btnTogglePassword = document.getElementById('btnTogglePassword');
    const inputClave = document.getElementById('usuario_clave');

    if (!btnTogglePassword || !inputClave) return;

    const iconEye = btnTogglePassword.querySelector('.icon-eye');
    const iconEyeOff = btnTogglePassword.querySelector('.icon-eye-off');

    btnTogglePassword.addEventListener('click', () => {
        const isPassword = inputClave.getAttribute('type') === 'password';

        if (isPassword) {
            inputClave.setAttribute('type', 'text');
            btnTogglePassword.setAttribute('aria-label', 'Ocultar contraseña');
            btnTogglePassword.setAttribute('title', 'Ocultar contraseña');
            if (iconEye) iconEye.style.display = 'none';
            if (iconEyeOff) iconEyeOff.style.display = 'inline-block';
        } else {
            inputClave.setAttribute('type', 'password');
            btnTogglePassword.setAttribute('aria-label', 'Mostrar contraseña');
            btnTogglePassword.setAttribute('title', 'Mostrar contraseña');
            if (iconEye) iconEye.style.display = 'inline-block';
            if (iconEyeOff) iconEyeOff.style.display = 'none';
        }

        inputClave.focus();
    });
}

/* --------------------------------------------------------------------------
   3. Validación de Formulario y Estado de Carga
   -------------------------------------------------------------------------- */
function initFormValidation() {
    const form = document.getElementById('loginForm');
    if (!form) return;

    const formFeedback = document.getElementById('formFeedback');
    const btnSubmit = document.getElementById('btnSubmit');
    const btnText = btnSubmit ? btnSubmit.querySelector('.btn-text') : null;
    const btnSpinner = document.getElementById('btnSpinner');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        hideFeedback();
        setLoadingState(true);

        setTimeout(() => {
            setLoadingState(false);
            showFeedback('Acceso validado. Abriendo módulo docente...', 'success');
            window.location.assign('landing.html');
        }, 800);
    });

    function showFeedback(message, type = 'error') {
        if (!formFeedback) return;
        formFeedback.textContent = message;
        formFeedback.className = `feedback-message is-${type}`;
        formFeedback.style.display = 'flex';
    }

    function hideFeedback() {
        if (!formFeedback) return;
        formFeedback.textContent = '';
        formFeedback.className = 'feedback-message';
        formFeedback.style.display = 'none';
    }

    function setLoadingState(isLoading) {
        if (!btnSubmit) return;
        btnSubmit.disabled = isLoading;
        if (btnSpinner) {
            btnSpinner.style.display = isLoading ? 'inline-flex' : 'none';
        }
        if (btnText) {
            btnText.textContent = isLoading ? 'Validando...' : 'Iniciar Sesión';
        }
    }
}
