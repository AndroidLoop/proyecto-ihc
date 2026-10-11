/**
 * CONEST - Rediseño de Sistema de Gestión Académica (IHC)
 * Interacciones de Navegación, Accesibilidad y Validación de Formulario
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initPasswordToggle();
    initFormValidation();
    initCalendarAccordion();
});

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
