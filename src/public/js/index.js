const btnSearch     = document.getElementById  ( "btnSearch"         );
const panelSearch   = document.getElementById  ( "panelSearch"       );
const panelContent  = document.getElementById  ( "panelContent"      );
const inputSearch   = document.getElementById  ( "inputSearch"       );
const links         = document.querySelectorAll( ".Search-a"         );
const buttons       = document.querySelectorAll( ".Search-button"    );
const rainbow       = document.getElementById  ( "rainbow"           );
const dropdowns     = document.getElementById  ( "dropdowns"         );
const dropDownsMenu = document.querySelector   ( ".Dropdowns-menu"   );
const buttonsDrow   = document.querySelectorAll( ".Dropdowns-button" );
const btnHamburger  = document.getElementById  ( "btnHamburger"      );
const headerNav     = document.getElementById  ( "headerNav"         );
const headerLink    = document.getElementById  ( "headerLink"        );
const header        = document.getElementById  ( "header"            );

//TODO ELIMINA ESTA CLASE Y SE MUESTRA EL CONTENIDO
inputSearch.addEventListener( 'click', (e) => {
    panelContent.classList.remove('isDisable');
});

// TODO RECORRE EL NAV Y AL HACER EN CADA LINK, MARCA EL LINK SELECIONADO Y RECARGA SU VALOR
links.forEach((link, i) => {
    links[i].addEventListener( 'click', async (e) => {
        e.preventDefault();
        links.forEach((link, i) => {
            links[i].classList.remove('isFocus');
        });
        let value = links[i].lastElementChild.value
        rainbow.innerHTML = value;
        links[i].classList.add('isFocus');
        panelContent.classList.add('isDisable');
        panelSearch.classList.remove('isActive');
        headerNav.classList.remove("isVisible");
        headerLink.classList.remove("isVisible");
        await sizeHeader();
    });
});

// TODO MUESTRA PANEL DE BUSQUEDA
btnSearch.addEventListener( 'click', () => {
    panelSearch.classList.toggle('isActive');
    panelContent.classList.remove('isDisable');
    dropDownsMenu.classList.remove('isActive');
    inputSearch.focus();
});

//  TODO AL HACER CLICK MUESTRA EL DROP Y CIERRA EL PANEL DE BUSQUEDA
dropdowns.addEventListener( 'click', () => {
    dropDownsMenu.classList.toggle('isActive');
    panelSearch.classList.remove('isActive');
});

// TODO RECORRE EL DROP Y AL HACER CLICK EN CADA DROP LINK,  RECARGA SU VALOR
buttonsDrow.forEach((drow, i) =>{
    buttonsDrow[i].addEventListener( 'click', async (e) => {
        e.preventDefault();
        let value = buttonsDrow[i].value;
        rainbow.innerHTML = value;
        headerNav.classList.remove("isVisible");
        headerLink.classList.remove("isVisible");
        await sizeHeader();
    });
});

// TODO CAMBIAR EL TAMAÑO DEL NAV, EN MODO MOBILE
async function sizeHeader() {
    if (headerLink.classList.contains('isVisible')) {
        header.classList.add('isHeader')
    } else {
        header.classList.remove('isHeader');
    }
}

// TODO MODO MOBILE, PARA MOSTRAR EL NAV Y LOS LINKS
btnHamburger.addEventListener( 'click', async () => {
    headerNav.classList.toggle("isVisible");
    headerLink.classList.toggle("isVisible");
    await sizeHeader();
});