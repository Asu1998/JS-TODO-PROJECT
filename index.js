const addDiv = document.getElementById("add");
const stored = document.querySelector(".stored");

addDiv.addEventListener("click", () => {
  const cardOne = document.createElement("div");
  cardOne.className = "cardOne";

  const cardHeading = document.createElement("p");
  cardHeading.innerText = "Add New List";

  const cardInput = document.createElement("input");
  cardInput.type = "text";
  cardInput.placeholder = "Enter The Destination!";
  cardInput.style.textAlign = 'center';
  cardInput.id = "name";

  const btnAdd = document.createElement("div");
  btnAdd.className = "button";
  btnAdd.innerText = "Add";

  const btnClose = document.createElement("div");
  btnClose.className = "button";
  btnClose.innerText = "Close";

  document.querySelector(".main").classList.add("blur");
  stored.appendChild(cardOne);

  const warning = document.createElement("p");
  warning.innerText = " Please Enter The Destination!";
  warning.style.display = "none";

  cardOne.appendChild(cardHeading);
  cardOne.appendChild(cardInput);
  cardOne.appendChild(btnAdd);
  cardOne.appendChild(btnClose);
  cardOne.appendChild(warning);

  btnClose.addEventListener("click", () => {
    stored.removeChild(cardOne);
    document.querySelector(".main").classList.remove("blur");
  })

  btnAdd.addEventListener("click", () => {
    if (cardInput.value === "") {
      warning.style.fontSize = "20px"
      warning.style.display = "block";
    }
    else {
      document.getElementById("world").style.display = "none";
      stored.removeChild(cardOne);
      document.querySelector(".main").classList.remove("blur");

      const cardTwo = document.createElement("div");
      cardTwo.className = "cards";

      const listName = document.createElement("span");
      listName.id = "title";
      listName.innerText = cardInput.value;

      const elementOne = document.createElement("hr");
      elementOne.style.color = "black";
      listName.appendChild(elementOne);

      const elementTwo = document.createElement("div");
      elementTwo.className = "buttons";
      const add = document.createElement("i");
      add.className = "fa-solid fa-circle-plus";

      const deleteIcon = document.createElement("i");
      deleteIcon.className = "fa-solid fa-trash-can";
      deleteIcon.style.color = "pink";

      const divTwo = document.querySelector(".divTwo");
      divTwo.appendChild(cardTwo);
      cardTwo.appendChild(listName);
      cardTwo.appendChild(elementTwo);
       

      elementTwo.appendChild(add);
      elementTwo.appendChild(deleteIcon);
           

      deleteIcon.addEventListener("click", () => {
        document.querySelector(".divTwo").removeChild(cardTwo);
        if (document.querySelector(".divTwo").innerText === "") {
          document.querySelector("#world").style.display = "block";
        }
      })

      add.addEventListener("click", () => {
        const cardOne = document.createElement("div");
        cardOne.className = "cardOne";

        const heading = document.createElement("p");
        heading.innerText = "Add New List";

        const cardInput = document.createElement("input");
        cardInput.type = "text";
        cardInput.placeholder = "What to do..";
        cardInput.style.textAlign = 'center';
        cardInput.id = "name";

        const plus = document.createElement("div");
        plus.className = "button";
        plus.innerText = "Add";

        const btnClose = document.createElement("div");
        btnClose.className = "button";
        btnClose.innerText = "Close";

        document.querySelector(".main").classList.add("blur");
        stored.appendChild(cardOne);

        const warning = document.createElement("p");
        warning.innerText = " Please Decide Something First..";
        warning.style.display = "none";

        cardOne.appendChild(heading);
        cardOne.appendChild(cardInput);
        cardOne.appendChild(plus);
        cardOne.appendChild(btnClose);
        cardOne.appendChild(warning);

        btnClose.addEventListener("click", () => {
         stored.removeChild(cardOne);
          document.querySelector(".main").classList.remove("blur");
        })

        plus.addEventListener("click", () => {
          if (cardInput.value === "") {
            warning.style.fontSize = "20px"
            warning.style.display = "block";
          }
          else {
            stored.removeChild(cardOne);
            document.querySelector(".main").classList.remove("blur");

            const ul = document.createElement("ul");
            ul.style.listStyleType = "none";
            ul.className = "ul";

            let li = document.createElement('li');
            let btn1 = document.createElement('button');

            btn1.innerText = "Mark done";
            btn1.style.margin = "5px";
            btn1.style.backgroundColor = "red";
            btn1.style.borderRadius = "20px";
            btn1.style.border = "2px solid transparent";
            li.innerText = cardInput.value;
            cardTwo.appendChild(ul);
            ul.appendChild(li);
            li.appendChild(btn1);
            btn1.addEventListener('click',
              function () {
                li.style.textDecoration = "line-through";
                li.style.color = "black";
                li.removeChild(btn1);
              })
          }
        })
      })

      listName.addEventListener("click", () => {

        const wholeCard = document.querySelector(".main");
        wholeCard.style.visibility = "hidden";

        const newPage = document.querySelector(".newPage");
        newPage.style.visibility = "visible";
         
        const divOne = document.querySelector(".divOne");
        divOne.style.visibility = "visible";

        let div = document.createElement("div");
        div.className = "new";
        newPage.appendChild(div);

        let div1 = document.createElement("div");
        div1.className = "btn-text";
        div.appendChild(div1);

        let leftArrow = document.createElement("i")
        leftArrow.className = "fa-solid fa-circle-arrow-left";
        div1.appendChild(leftArrow);

        let back = document.createElement("span");
        back.className = "back";
        back.innerText = "Back";
        div1.appendChild(back);

        let h1 = document.createElement("h1");
        h1.innerText = cardInput.value;
        h1.className = "h1";
        h1.style.color = "white";
        div.appendChild(h1);
        let div2 = document.createElement("div");
        div2.className = "new-cardOne";
        div2.appendChild(cardTwo);
        newPage.appendChild(div2);

        leftArrow.addEventListener("click", () => {
          div2.removeChild(cardTwo);
          newPage.removeChild(div);
          divTwo.appendChild(cardTwo);
          document.querySelector(".main").style.visibility = "visible";
          document.querySelector(".newPage").style.visibility = "hidden";
        })

        deleteIcon.addEventListener("click", () => {
          document.querySelector(".main").style.visibility = "visible";
          document.querySelector(".newPage").style.visibility = "hidden";
          document.querySelector(".newPage").removeChild(div);
          div2.removeChild(cardTwo);
        })
      })
    }
  })
})