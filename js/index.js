document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("list");
  const showSection = document.getElementById("show-panel");

  /* fetching everything from db.json */
  const fetchAll = fetch("/db.json");
  fetchAll
    .then((res) => res.json())
    .then((data) => {
      const books = data.books;
      /* Looping inside db.json and getting all the title*/
      books.map((book) => {
        const li = document.createElement("li");
        li.textContent = book.title;
        li.style.cursor = "pointer";
        list.appendChild(li);

        li.addEventListener("click", () => {
          return getAllInfo(book);
        });
      });

      function getAllInfo(book) {
        const users = book.users
        // console.log(users);
        const getUsers = users.map(user => {
          console.log(user)
          const userName = user.username
          return userName
        })
        console.log(getUsers);

        
        showSection.innerHTML = 
        `
          <img alt="Book image" src='${book.img_url}'/>
          <h3>${book.title}</h3>
          <h3>${book.subtitle}</h3>
          <h3>${book.author}</h3>
          <p>${book.description}</p>
          <ul>
            <li>${getUsers[0]}</li>
            <li>${getUsers[1]}</li>
            <li>${getUsers[2]}</li>
            <li>${getUsers[3]}</li>
            <li>${getUsers[4]}</li>
          </ul>
          
          <button id='btn'>Like</button>
        `;
      }
    });
});
