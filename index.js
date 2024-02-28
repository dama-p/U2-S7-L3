fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("ERRORE NEL REPERIMENTO DATI");
    }
  })

  .then((booksData) => {
    console.log("BOOKS DATA", booksData);
    console.log("BOOKS IMG", booksData[0].img);
    console.log("BOOKS IMG", booksData[2].img);

    const container = document.getElementById("bookshelf");


    booksData.forEach((book) => {
      const singleCard = document.createElement("div");
      const img = document.createElement("img");
      const cardBody = document.createElement("div");
   
      const imgURL = book.img;
      img.src = imgURL;

      const title = document.createElement("p");
      title.innerText = book.title

      const price = document.createElement("p");
      price.innerText = "Price: " + book.price;

      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "scarta"

      deleteBtn.addEventListener("click", function(event) {
        singleCard.classList.add("d-none");
        })

      
      container.appendChild(singleCard);
      singleCard.appendChild(img);
      singleCard.appendChild(cardBody)
      cardBody.appendChild(title);
      cardBody.appendChild(price);
      cardBody.appendChild(deleteBtn);

      deleteBtn.classList.add("deleteStyle")
      
      singleCard.classList.add("card");
      singleCard.classList.add("col-4");
      singleCard.classList.add("col-md-3");
      singleCard.classList.add("col-lg-2");
      
      img.classList.add("imgStyle")
      cardBody.classList.add("cardbody")
      
      console.log("BOOKS DATA", booksData);
    });
  })

  .catch((error) => console.log(error));
