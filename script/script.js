let users = [
    {
        name: 'Mark',
        age: '23',
        gender: 'male',
        favorColor: 'red',
        cheesePreference: true,
    },
    {
        name: 'Emily',
        age: '30',
        gender: 'female',
        favorColor: 'blue',
        cheesePreference: false,
    },
    {
        name: 'David',
        age: '45',
        gender: 'male',
        favorColor: 'green',
        cheesePreference: true,
    },
    {
        name: 'Jessica',
        age: '28',
        gender: 'female',
        favorColor: 'purple',
        cheesePreference: false,
    },
    {
        name: 'John',
        age: '35',
        gender: 'male',
        favorColor: 'orange',
        cheesePreference: true,
    },
    {
        name: 'Rachel',
        age: '27',
        gender: 'female',
        favorColor: 'pink',
        cheesePreference: false,
    },
    {
        name: 'Daniel',
        age: '39',
        gender: 'male',
        favorColor: 'black',
        cheesePreference: true,
    },
    {
        name: 'Maggie',
        age: '22',
        gender: 'female',
        favorColor: 'white',
        cheesePreference: false,
    },
    {
        name: 'Alex',
        age: '31',
        gender: 'male',
        favorColor: 'yellow',
        cheesePreference: true,
    },
    {
        name: 'Katie',
        age: '25',
        gender: 'female',
        favorColor: 'orange',
        cheesePreference: false,
    },
    {
        name: 'Jacob',
        age: '42',
        gender: 'male',
        favorColor: 'gray',
        cheesePreference: true,
    },
    {
        name: 'Sophie',
        age: '29',
        gender: 'female',
        favorColor: 'green',
        cheesePreference: false,
    },
    {
        name: 'Kevin',
        age: '36',
        gender: 'male',
        favorColor: 'blue',
        cheesePreference: true,
    },
    {
        name: 'Anna',
        age: '26',
        gender: 'female',
        favorColor: 'red',
        cheesePreference: false,
    },
    {
        name: 'Patrick',
        age: '33',
        gender: 'male',
        favorColor: 'orange',
        cheesePreference: true,
    },
    {
        name: 'Lily',
        age: '24',
        gender: 'female',
        favorColor: 'pink',
        cheesePreference: false,
    },
    {
        name: 'William',
        age: '40',
        gender: 'male',
        favorColor: 'black',
        cheesePreference: true,
    },
    {
        name: 'Olivia',
        age: '32',
        gender: 'female',
        favorColor: 'purple',
        cheesePreference: false,
    },
    {
        name: 'Ethan',
        age: '38',
        gender: 'male',
        favorColor: 'green',
        cheesePreference: true,
    },
    {
        name: 'Ava',
        age: '28',
        gender: 'female',
        favorColor: 'yellow',
        cheesePreference: false,
    }
];

let colorArr = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "black",
    "white",
    "gray",
    "brown",
    "pink",
    "teal",
    "navy",
    "maroon",
    "magenta",
    "silver",
    "olive",
    "aqua",
    "lime",
    "fuchsia"
];
// let users = [];

let originalUsers = users.slice();

let currentPage = 1;
let itemsPerPage = 5;
let sortStatusName = document.getElementById('sortStatusName');
let sortStatusAge = document.getElementById('sortStatusAge');
let sortStatusGender = document.getElementById('sortStatusGender');
let sortStatusCheesePrefer = document.getElementById('sortStatusCheesePrefer');
let pageNavigations = document.querySelector('.page-navigation-show-pages');

//массив, создан для сортировки, вносить при каждом объявлении заголовка в таблице
let listOfTheSortsStatus = [
    sortStatusName,
    sortStatusAge,
    sortStatusGender,
    sortStatusCheesePrefer,
]

let sortDirection = {
    name: 'asc',
    age: 'asc',
    gender: 'asc',
    cheesePreference: 'asc'
};
let pagination = document.getElementById('pagination');
let activePageLink = null; // объявляем переменную
localUsers();

//localStorage Users
function localUsers() {
    if (localStorage.getItem('users')) users = JSON.parse(localStorage.getItem('users'))
    showUsers();
}

//сохраняет список пользователей в LocalStorage
function saveUser() {
    localStorage.setItem('users', JSON.stringify(users));
}


//запускает всю логику
function showUsers() {
    //вызов функций
    generatePagination();
    mainTable();
}

//Заполняет таблицу. В параметрах содержим:
//1) users - элемент пользователя;
//2) i - сделан для отображения id, его можно убрать в дальнейшем
function fillTable(user, i) {
    let tableBody = document.getElementById('tableBody');
    let statusPreference = document.createElement('svg');

    //Отображаем визуальную иконку парамтра cheesePreference
    if (user.cheesePreference == true) {
        let svgIcon = `
            <svg
            width="15px"
            height="15px"
            role="img"
            focusable="false"
            aria-hidden="true" fill="#3350e1" height="200px" width="200px" version="1.1" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
            <g id="active"> <path d="M8.6,20.1l-7.8-8l1.4-1.4l6.4,6.5L21.8,3.9l1.4,1.4L8.6,20.1z"></path> </g> </g></svg>
            <span style="color:#3350e1;">Active</span>
        `;
        statusPreference.innerHTML = svgIcon
    } else {
        let svgIcon = `<svg width="20px"
            height="20px"
            role="img"
            focusable="false"
            aria-hidden="true" fill="#c2c1c1" viewBox="-8.5 0 32 32"
  version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#c2c1c1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>close</title> <path d="M8.48 16l5.84-5.84c0.32-0.32 0.32-0.84 0-1.2-0.32-0.32-0.84-0.32-1.2 0l-5.84 5.84-5.84-5.84c-0.32-0.32-0.84-0.32-1.2 0-0.32 0.32-0.32 0.84 0 1.2l5.84 5.84-5.84 5.84c-0.32 0.32-0.32 0.84 0 1.2 0.16 0.16 0.4 0.24 0.6 0.24s0.44-0.080 0.6-0.24l5.84-5.84 5.84 5.84c0.16 0.16 0.36 0.24 0.6 0.24 0.2 0 0.44-0.080 0.6-0.24 0.32-0.32 0.32-0.84 0-1.2l-5.84-5.84z">
  </path> </g></svg>
            <span style="color:#c2c1c1;">Inactive</span>
        `;
        statusPreference.innerHTML = svgIcon
    }

    //Выводим сам рядок таблицы
    let tableBodyContent = `
        <tr class="table-content-${i}">
            <td>${i + 1}</td>
            <td>
                ${user.name}
            </td>
            <td>
                ${user.age}
            </td>
            <td>
                ${user.gender}
            </td>
            <td>
                <div style="display: flex; justify-content: left; align-items: center"> 
                    <div style="
                    content: '';
                    background: ${user.favorColor};
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    margin-right: 10px;
                    "></div>
                    <p style="margin: 0">${user.favorColor}</p>
                </div>
            </td>
            <td>
                ${statusPreference.innerHTML}
            </td>
            <td style="cursor:pointer;">
                <div id="editUser${i}"
                style="display: flex; justify-content: center;">
                <svg viewBox="0 0 24 24" with="20px" height="20px" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z"
                fill="#3350e1"></path> </g></svg>
                </div>
            </td>
            <td style="cursor:pointer;">
                <div id="deleteUser${i}" data-name="${user.name}"
                style="display: flex; justify-content: center;">
                    <svg viewBox="0 0 24 24" with="22px" height="22px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0">
                    </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                    <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                    stroke="#f95858" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
            </td>
        </tr>
    `;
    let Tr = document.createElement('tr');
    Tr.innerHTML = tableBodyContent;
    tableBody.appendChild(Tr);

    //edit click user
    document.getElementById(`editUser${i}`).onclick = () => {
        let modalEdit = document.querySelector('.modal-edit');
        modalEdit.style.display = 'block';

        let editNameInput = document.getElementById('formEditName');
        let editAgeInput = document.getElementById('formEditAge');
        let editGender = document.getElementById('formEditGender');
        let editColor = document.getElementById('form-edit-color-select');
        let editPreferenceInput = document.getElementById('formEditPreference');

        //Проверяет опции для gender в Edit
        if (user.gender == 'male') {
            let maleOption = document.createElement('option');
            maleOption.text = 'male';
            maleOption.selected = true;
            editGender.add(maleOption);
            let femaleOption = document.createElement('option');
            femaleOption.text = 'female';
            editGender.add(femaleOption);
        } else if (user.gender == 'female') {
            let femaleOption = document.createElement('option');
            femaleOption.text = 'female';
            femaleOption.selected = true;
            editGender.add(femaleOption);
            let maleOption = document.createElement('option');
            maleOption.text = 'male';
            editGender.add(maleOption);
        }
        let editOptionColor = '';
        editColor.innerHTML = `
            <option selected>
                ${user.favorColor}
            </option>
        `;

        // Добавляет опции для select цветов в Edit
        for (let i = 0; i < colorArr.length; i++) {
            if (colorArr[i] === user.favorColor) {
                continue;
            } else {
                editOptionColor = `
            <option>
                ${colorArr[i]}
            </option>
        `;
            }

            let option = document.createElement('option');
            option.innerHTML = editOptionColor;
            editColor.appendChild(option)
        }

        // Заполняем поля формы данными текущего пользователя
        editNameInput.value = user.name;
        editAgeInput.value = user.age;
        // editGender.value = user.gender;
        // editColor.value = user.favorColor;
        editPreferenceInput.checked = user.cheesePreference;

        let editedUser = {
            name: user.name,
            age: user.age,
            gender: user.gender,
            favorColor: user.favorColor,
            cheesePreference: user.cheesePreference
        };

        //Перезаписывание данных
        editNameInput.addEventListener('input', () => {
            editedUser.name = editNameInput.value;
        });
        editAgeInput.addEventListener('input', () => {
            editedUser.age = editAgeInput.value;
        });
        editGender.addEventListener('input', () => {
            editedUser.gender = editGender.value;
        });
        editColor.addEventListener('input', () => {
            editedUser.favorColor = editColor.value;
        });
        editPreferenceInput.addEventListener('input', () => {
            editedUser.cheesePreference = editPreferenceInput.checked;
        });

        // editUserFun(i, editedUser);
        let confirmBtn = document.querySelector('.confirm-edit-form');
        confirmBtn.id = `confirmEdit${i}`
        // confirmBtn.addEventListener('click', editUserFun(i, editedUser));
        confirmBtn.onclick = () => {
            editUserFun(i, editedUser)
        }
    }

    document.getElementById('cancelEditForm').onclick = () => {
        let modalEdit = document.querySelector('.modal-edit');
        modalEdit.style.display = 'none';
    }

    let deleteUser = document.getElementById(`deleteUser${i}`);

    //delete click user
    deleteUser.onclick = () => {
        let nameUser = deleteUser.getAttribute('data-name')
        let modal = document.createElement('div');
        modal.classList.add('modal-delete');
        let index = users.indexOf(users[i])
        let content = `<div class="modal-dialog card">
												<div class="modal-content">
													<div class="modal-header">
														<h5 class="modal-title" id="exampleModalLabel">Delete user</h5>
														<button type="button" class="btn-close" onclick="closeModalDelete()" data-bs-dismiss="modal" aria-label="Close"></button>
													</div>
                                                    <hr>
                                                    <div class="modal-content" style="text-align:center">Are you sure you want to delete <strong>${nameUser}</strong></div>
													<div class="modal-footer">
														<button type="button" class="btn btn-secondary" onclick="closeModalDelete()" data-bs-dismiss="modal">Close</button>
														<button type="button" class="btn btn-danger" onclick=deleteUserFun(${index})>Delete</button>
													</div>
												</div>
									</div>`;
        modal.innerHTML = content;

        let main = document.querySelector('.main-main');
        main.appendChild(modal);
        saveUser();

        // deleteUserFun(users.indexOf(users[i]))
    }
}

//close modal delete
function closeModalDelete() {
    console.log('click')
    let modalDel = document.querySelector('.modal-delete');
    modalDel.remove()
}

//сбрасываем стили arrows
function sortImgNull(sortStatus) {
    sortStatus.setAttribute('src', '../assets/materials/icons/empty.svg');
    sortStatus.style.width = '10px';
    sortStatus.style.height = '10px';
    sortStatus.style.filter = 'invert(78%) sepia(3%) saturate(24%) hue-rotate(5deg) brightness(88%) contrast(85%)';
}

//сбрасываем стили для всех arrows
function deleteSortImgAll() {
    for (let i = 0; i < listOfTheSortsStatus.length; i++) {
        sortImgNull(listOfTheSortsStatus[i])
    }
}

//устанавливаем стили для arrows
function setSortImg(sortStatus, sort) {
    if (sort == 'up') {
        sortStatus.setAttribute('src', '../assets/materials/icons/up.svg');
    } else if (sort == 'down') {
        sortStatus.setAttribute('src', '../assets/materials/icons/down.svg');
    }
    // sortStatus.style.width = '20px';
    // sortStatus.style.height = '20px';
    // sortStatus.style.filter = 'invert(0%) sepia(71%) saturate(30%) hue-rotate(68deg) brightness(97%) contrast(106%)';
}
//Сортируем таблицу по Name (от Z - A и от A - Z)
function sortByName() {
    if (sortDirection.name === 'asc') {
        sortDirection.name = 'desc';
        users.sort((a, b) => b.name.localeCompare(a.name));
        deleteSortImgAll();
        setSortImg(sortStatusName, 'up')
    } else {
        sortDirection.name = 'asc';
        users.sort((a, b) => a.name.localeCompare(b.name));
        deleteSortImgAll();
        setSortImg(sortStatusName, 'down')
    }
    currentPage = 1;
    mainTable();
}
//сортируем таблицу по Age (от большего к меньшему и от меньшего к большему)
function sortByAge() {
    if (sortDirection.age === 'asc') {
        sortDirection.age = 'desc';
        users.sort((a, b) => b.age - a.age);
        deleteSortImgAll();
        setSortImg(sortStatusAge, 'up')
    } else {
        sortDirection.age = 'asc';
        users.sort((a, b) => a.age - b.age);
        deleteSortImgAll();
        setSortImg(sortStatusAge, 'down')
    }
    currentPage = 1;
    mainTable();
}
//сортирует таблицу по Gender
function sortByGender() {
    if (sortDirection.gender === 'asc') {
        sortDirection.gender = 'desc';
        users.sort((a, b) => b.gender.localeCompare(a.gender))
        deleteSortImgAll();
        setSortImg(sortStatusGender, 'up')
    } else {
        sortDirection.gender = 'asc';
        users.sort((a, b) => a.gender.localeCompare(b.gender))
        deleteSortImgAll();
        setSortImg(sortStatusGender, 'down')
    }
    currentPage = 1;
    mainTable();
}
//сортирует таблицу по Cheese Preference
function sortByCheesePrefer() {
    if (sortDirection.cheesePreference === 'asc') {
        sortDirection.cheesePreference = 'desc';
        users.sort((a, b) => a.cheesePreference - b.cheesePreference);
        deleteSortImgAll();
        setSortImg(sortStatusCheesePrefer, 'up')
    } else {
        sortDirection.cheesePreference = 'asc';
        users.sort((a, b) => b.cheesePreference - a.cheesePreference);
        deleteSortImgAll();
        setSortImg(sortStatusCheesePrefer, 'down')
    }
    currentPage = 1;
    mainTable();
}

//отображает состояние Next и Prev
function checkStatusPagination() {
    let prevBtn = document.getElementById('prevPageBtn');
    let nextBtn = document.getElementById('nextPageBtn');

    if (currentPage <= 1) {
        prevBtn.classList.add('block-prev');
        nextBtn.classList.remove('block-next')
        nextBtn.classList.add('active-next');
    } else if (currentPage >= Math.ceil(users.length / itemsPerPage)) {
        nextBtn.classList.add('block-next');
        prevBtn.classList.remove('block-prev');
        prevBtn.classList.add('active-prev');
    } else {
        prevBtn.classList.remove('active-prev');
        prevBtn.classList.remove('block-prev');
        nextBtn.classList.remove('active-next');
        nextBtn.classList.remove('block-next');
    }
}

//Главная функция, которая запускает логику таблицы
function mainTable() {
    if (users.length !== 0) {
        let startIndex = (currentPage - 1) * itemsPerPage;
        let endIndex = startIndex + itemsPerPage;
        let usersToDisplay = users.slice(startIndex, endIndex);

        document.getElementById('tableBody').innerHTML = '';

        for (let i = 0; i < usersToDisplay.length; i++) {
            fillTable(usersToDisplay[i], startIndex + i);
        }
        checkStatusPagination();

    } else {
        let table = document.getElementById('table');
        let emptyList = document.createElement('p');
        emptyList.classList.add('empty-list');
        emptyList.textContent = 'An error happened while fetching the data'
        table.appendChild(emptyList)
    }
    console.log('currentPage: ', currentPage);
    console.log('itemsPerPage: ', itemsPerPage);
    let showNavigation = `
        <label>Showing ${currentPage} to ${itemsPerPage} of ${users.length} entries</label>
    `;
    pageNavigations.innerHTML = showNavigation;
}

//отрабататывает логику листание страницы назад
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        mainTable();
    }
    if (activePageLink !== null) {
        activePageLink.classList.remove('active-numb');
        generatePagination();
    }
}
//отрабататывает логику листание страницы вперед
function nextPage() {
    if (currentPage < Math.ceil(users.length / itemsPerPage)) {
        currentPage++;
        mainTable();
    }
    if (activePageLink !== null) {
        activePageLink.classList.remove('active-numb');
        generatePagination();
    }
}

//Логика пагинации
function generatePagination() {
    let totalPages = Math.ceil(users.length / itemsPerPage);
    let pagination = document.getElementById('pagination');

    pagination.innerHTML = '';

    // добавляем диапозон
    let minPage = 3;
    let maxPage = totalPages - 1;
    // добавляем первую страницу
    let firstPageLink = document.createElement('a');
    firstPageLink.classList.add('pagination-numb');
    firstPageLink.href = '#';
    firstPageLink.innerText = '1';
    if (currentPage === 1) {
        firstPageLink.classList.add('active-numb');
        activePageLink = firstPageLink;
        console.log('activePageLink0: ', activePageLink);
    }
    firstPageLink.addEventListener('click', function () {
        currentPage = 1;
        mainTable();
        generatePagination();
    });
    pagination.appendChild(firstPageLink);

    // добавляем многоточие перед последними двумя страницами
    if (currentPage >= minPage && totalPages > maxPage) {
        let dots = document.createElement('span');
        dots.classList.add('dots-pagination');
        dots.innerText = '...';
        pagination.appendChild(dots);
    }

    // добавляем страницы, начиная со второй и заканчивая предпоследней страницей
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
        let pageLink = document.createElement('a');
        pageLink.classList.add('pagination-numb');
        pageLink.href = '#';
        pageLink.innerText = i.toString();
        if (i === currentPage) {
            pageLink.classList.add('active-numb');
            activePageLink = pageLink;
            console.log('activePageLink: ', activePageLink);
        }
        pageLink.addEventListener('click', function () {
            currentPage = i;
            mainTable();
            generatePagination();
        });
        pagination.appendChild(pageLink);
    }

    // добавляем многоточие после первых двух страниц
    if (currentPage <= totalPages - minPage && totalPages > maxPage) {
        let dots = document.createElement('span');
        dots.classList.add('dots-pagination');
        dots.innerText = '...';
        pagination.appendChild(dots);
    }

    // добавляем последнюю страницу
    let lastPageLink = document.createElement('a');
    lastPageLink.classList.add('pagination-numb');
    lastPageLink.href = '#';
    lastPageLink.innerText = totalPages.toString();
    if (currentPage === totalPages) {
        console.log('totalPages: ', totalPages);
        lastPageLink.classList.add('active-numb');
        activePageLink = lastPageLink;
        console.log('activePageLink1: ', activePageLink);
        let activePageLinks = document.querySelectorAll('.active-numb');
        for (let i = 0; i < activePageLinks.length; i++) {
            activePageLinks[i].remove();
        }
    }
    lastPageLink.addEventListener('click', function () {
        currentPage = totalPages;
        mainTable();
        generatePagination();
    });
    pagination.appendChild(lastPageLink);
}
//отрабатывает логику отображение количество строк в таблице
function changeItemsPerPage() {
    itemsPerPage = parseInt(document.getElementById('itemsPerPage').value);
    currentPage = 1;
    generatePagination();
    mainTable();
}
//Поисковик по Name
function searchTable() {
    let searchText = document.getElementById('searchInput').value.toLowerCase();
    let filteredUsers = [];

    if (document.getElementById('searchInput').value !== '') {
        for (let i = 0; i < users.length; i++) {
            let name = users[i].name.toLowerCase();
            if (name.includes(searchText) || name.startsWith(searchText)) {
                filteredUsers.push(users[i]);
            }
        }
        users = filteredUsers;
    } else {
        // если searchInput пуст, возвращаем исходный массив пользователей
        users = originalUsers.slice();
        currentPage = 1;
        mainTable();
        generatePagination();
    }

    // вызываем mainTable() и generatePagination() только если users был изменен
    if (users.length !== originalUsers.length) {
        currentPage = 1;
        mainTable();
        generatePagination();
    }
}

//Все слушатели ивентов
document.getElementById('prevPageBtn').addEventListener('click', prevPage);
document.getElementById('nextPageBtn').addEventListener('click', nextPage);
document.getElementById('itemsPerPage').addEventListener('change', changeItemsPerPage);
document.getElementById('tableSortName').addEventListener('click', sortByName)
document.getElementById('tableSortAge').addEventListener('click', sortByAge)
document.getElementById('tableSortGender').addEventListener('click', sortByGender)
document.getElementById('tableSortCheesePrefer').addEventListener('click', sortByCheesePrefer)
document.getElementById('searchInput').addEventListener('input', searchTable);
document.getElementById('addUser').addEventListener('click', addUserFun);

//Modal Window Form
const btnForm = document.querySelectorAll('.btn-form');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const colorSelect = document.getElementById('form-color-select');

for (let i = 0; i < colorArr.length; i++) {
    let option = `
        <option name="${colorArr[i]}">
            ${colorArr[i]}
        </option>
    `
    let optionsColor = document.createElement('option');
    optionsColor.innerHTML += option
    colorSelect.appendChild(optionsColor);
}

btnForm.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
    });
});

modalOverlay.addEventListener('click', (e) => {

    if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });
    }
});
//add new User
function addUserFun(event) {
    event.preventDefault();
    let formName = document.getElementById('formName');
    let formAge = document.getElementById('formAge');
    let formGender = document.getElementById('formGender');
    let formColor = document.getElementById('form-color-select');
    let formPreference = document.getElementById('formPreference');

    let userInfo = {
        name: formName.value,
        age: formAge.value,
        gender: formGender.value,
        favorColor: formColor.value,
        cheesePreference: formPreference.checked,
    }
    //очистка формы
    formName.value = ''
    formAge.value = ''
    formGender.value = ''
    formColor.value = ''
    formPreference.checked = false
    users.push(userInfo)
    saveUser();
    showUsers();
    location.reload()
}
//clean local storage
document.getElementById('cleanStorage').onclick = () => {
    localStorage.clear();
    location.reload();
};
//edit User
function editUserFun(item, editedUser) {
    event.preventDefault();

    let users = JSON.parse(localStorage.getItem('users'));
    // Update the user object at the given index with the new edited user object
    users[item] = editedUser;

    // Save the updated list of users back to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    let modalEdit = document.querySelector('.modal-edit');
    modalEdit.style.display = 'none';
    location.reload()
}

//delete User
function deleteUserFun(item) {
    // localStorage.removeItem(item);
    console.log('DELETE', item)
    let items = JSON.parse(localStorage.getItem('users'));
    items.splice(item, 1);
    localStorage.setItem('users', JSON.stringify(items))
    location.reload();
}