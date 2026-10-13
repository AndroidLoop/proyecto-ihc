/**
 * CONEST - Rediseño de Sistema de Gestión Académica (IHC)
 * Interacciones de Navegación, Accesibilidad y Validación de Formulario
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initPasswordToggle();
    initFormValidation();
    initCalendarAccordion();
    initAboutDialog();
    initSemesterSchedule();
});

const semesterSchedule = {
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
};

const semesterCourses = {
    '0030': { name: 'INGLES I', color: 'gray' },
    '0511': { name: 'FUNDAMENTOS DE BIOÉTICA', color: 'blue' },
    '6002': { name: 'ORG.Y ESTRUCT.DEL COMP.II', color: 'cyan' },
    '6108': { name: 'MATEMATICAS DISCRETAS III', color: 'amber' },
    '6203': { name: 'INGENIERIA DE SOFTWARE', color: 'gray' },
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

    semesterSchedule.slots.forEach((slot, slotIndex) => {
        const row = document.createElement('tr');
        const timeHeader = document.createElement('th');
        timeHeader.scope = 'row';
        timeHeader.className = 'schedule-time';
        timeHeader.textContent = slot.time;
        row.append(timeHeader);

        semesterSchedule.days.forEach((day) => {
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
