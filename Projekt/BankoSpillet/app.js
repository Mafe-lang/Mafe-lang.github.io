let Bruger_Emails = [
  "john_nygaard96@gmail.com",
  "mads_andersen5@gmail.com",
  "brian_laudrup52@gmail.com",
  "claus_mikkelsen80@gmail.com",
  "anders-svendsen80@gmail.com",
  "laura-østergaard62@gmail.com",
  "mathilde_engemann4@gmail.com",
  "asger-olesen21@gmail.com",
  "mie_skovbeck21@gmail.com",
  "josefine-skippersen37@gmail.com",
  "tobias-rasmussen65@gmail.com",
  "kirsten_larson21@gmail.com",
  "sofie_katrine99@gmail.com",
  "nikolai_lundby67@gmail.com",
  "maria_iversen80@gmail.com",
  "benjamin-gregersen76@gmail.com",
  "emil-lundtoft17@gmail.com",
  "nikoline_annamarie40@gmail.com",
  "oskar_smith63@gmail.com",
  "ida-nielsenl46@gmail.com",
];

let User_Arrays = {};

function Tjek_Email() {
  let Email_Input = document.getElementById("Email_Input").value.toLowerCase();

  if (Bruger_Emails.includes(Email_Input)) {
    let storedData = localStorage.getItem("userInfo");

    if (storedData) {
      User_Arrays = JSON.parse(storedData);
    } else {
      User_Arrays = {};
    }

    let Display_Bruger_Input = document.getElementById("Display_Bruger_Email");
    Display_Bruger_Input.innerHTML = `Ejer af plader:<br>${Email_Input}`;
    Display_Bruger_Input.classList.add("Display_Bruger_Email_Box");

    document.getElementById("Change_Email_Valg").style.display = "block";
    document.getElementById("Email_Input").style.display = "none";
    document.getElementById("Generer_Plader_Button").style.display = "none";

    if (!User_Arrays[Email_Input]) {
      User_Arrays[Email_Input] = [
        [[], [], []],
        [[], [], []],
        [[], [], []],
      ];
    }

    Generer_Plader_1(User_Arrays, Email_Input);
    Generer_Plader_2(User_Arrays, Email_Input);
    Generer_Plader_3(User_Arrays, Email_Input);

    Generer_Plader_2_1(User_Arrays, Email_Input);
    Generer_Plader_2_2(User_Arrays, Email_Input);
    Generer_Plader_2_3(User_Arrays, Email_Input);

    Generer_Plader_3_1(User_Arrays, Email_Input);
    Generer_Plader_3_2(User_Arrays, Email_Input);
    Generer_Plader_3_3(User_Arrays, Email_Input);

    let Stringified_User_Arrays = JSON.stringify(User_Arrays);
    localStorage.setItem("userInfo", Stringified_User_Arrays);
  } else {
    alert("Wrong Email");
    location.reload();
  }
}

function Change_Color(Cell) {
  Cell.classList.toggle("clicked");
}

function Reset_Page() {
  location.reload();
}

function Random_Tal() {
  return Math.floor(Math.random() * 100);
}

let Første_Plade = document.querySelector(".Table_1");
let Første_Række_Tal = Første_Plade.querySelectorAll(
  ".Letter_1_1, .Letter_1_2, .Letter_1_3, .Letter_1_4, .Letter_1_5, .Letter_1_6, .Letter_1_7, .Letter_1_8, .Letter_1_9"
);

let Anden_Række_Tal = Første_Plade.querySelectorAll(
  ".Letter_2_1, .Letter_2_2, .Letter_2_3, .Letter_2_4, .Letter_2_5, .Letter_2_6, .Letter_2_7, .Letter_2_8, .Letter_2_9"
);

let Tredje_Række_Tal = Første_Plade.querySelectorAll(
  ".Letter_3_1, .Letter_3_2, .Letter_3_3, .Letter_3_4, .Letter_3_5, .Letter_3_6, .Letter_3_7, .Letter_3_8, .Letter_3_9"
);

let Første_Række_Farver = Første_Plade.querySelectorAll(
  ".Cell_1_1, .Cell_1_2, .Cell_1_3, .Cell_1_4, .Cell_1_5"
);

let Anden_Række_Farver = Første_Plade.querySelectorAll(
  ".Cell_2_1, .Cell_2_2, .Cell_2_3, .Cell_2_4, .Cell_2_5"
);

let Tredje_Række_Farver = Første_Plade.querySelectorAll(
  ".Cell_3_1, .Cell_3_2, .Cell_3_3, .Cell_3_4, .Cell_3_5"
);

let Valgte_Celler_1_1 = [];
Plade_1_1_Index = 0;

function Generer_Plader_1(User_Arrays, Email_Input) {
  if (User_Arrays[Email_Input][0][0].length > 0) {
    for (let i = 0; i < User_Arrays[Email_Input][0][0].length; i++) {
      Første_Række_Tal[i].textContent = User_Arrays[Email_Input][0][0][i];
    }
    Plade_1_1_Index++;
  } else {
    while (Plade_1_1_Index < 5) {
      let Random_Række_Plads = Math.floor(Math.random() * 9);
      let Random_Plade_Tal = Random_Tal();
      if (!Valgte_Celler_1_1.includes(Random_Række_Plads)) {
        User_Arrays[Email_Input][0][0][Random_Række_Plads] = Random_Plade_Tal;
        Første_Række_Tal[Random_Række_Plads].textContent = Random_Plade_Tal;
        Valgte_Celler_1_1.push(Random_Række_Plads);
        Plade_1_1_Index++;
      }
    }
  }
}

let Valgte_Celler_1_2 = [];
Plade_1_2_Index = 0;

function Generer_Plader_2(User_Arrays, Email_Input) {
  if (User_Arrays[Email_Input][0][1].length > 0) {
    for (let i = 0; i < User_Arrays[Email_Input][0][1].length; i++) {
      Anden_Række_Tal[i].textContent = User_Arrays[Email_Input][0][1][i];
    }
    Plade_1_2_Index++;
  } else {
    while (Plade_1_2_Index < 5) {
      let Random_Række_Plads = Math.floor(Math.random() * 9);
      let Random_Plade_Tal = Random_Tal();
      if (!Valgte_Celler_1_2.includes(Random_Række_Plads)) {
        User_Arrays[Email_Input][0][1][Random_Række_Plads] = Random_Plade_Tal;
        Anden_Række_Tal[Random_Række_Plads].textContent = Random_Plade_Tal;
        Valgte_Celler_1_2.push(Random_Række_Plads);
        Plade_1_2_Index++;
      }
    }
  }
}

let Valgte_Celler_1_3 = [];
Plade_1_3_Index = 0;

function Generer_Plader_3(User_Arrays, Email_Input) {
  if (User_Arrays[Email_Input][0][2].length > 0) {
    for (let i = 0; i < User_Arrays[Email_Input][0][2].length; i++) {
      Tredje_Række_Tal[i].textContent = User_Arrays[Email_Input][0][2][i];
    }
    Plade_1_3_Index++;
  } else {
    while (Plade_1_3_Index < 5) {
      let Random_Række_Plads = Math.floor(Math.random() * 9);
      let Random_Plade_Tal = Random_Tal();
      if (!Valgte_Celler_1_3.includes(Random_Række_Plads)) {
        User_Arrays[Email_Input][0][2][Random_Række_Plads] = Random_Plade_Tal;
        Tredje_Række_Tal[Random_Række_Plads].textContent = Random_Plade_Tal;
        Valgte_Celler_1_3.push(Random_Række_Plads);
        Plade_1_3_Index++;
      }
    }
  }
}

let Anden_Plade = document.querySelector(".Table_2");
let Første_Række_Tal_2 = Anden_Plade.querySelectorAll(
  ".Letter_2_1_1, .Letter_2_1_2, .Letter_2_1_3, .Letter_2_1_4, .Letter_2_1_5, .Letter_2_1_6, .Letter_2_1_7, .Letter_2_1_8, .Letter_2_1_9"
);

let Anden_Række_Tal_2 = Anden_Plade.querySelectorAll(
  ".Letter_2_2_1, .Letter_2_2_2, .Letter_2_2_3, .Letter_2_2_4, .Letter_2_2_5, .Letter_2_2_6, .Letter_2_2_7, .Letter_2_2_8, .Letter_2_2_9"
);

let Tredje_Række_Tal_2 = Anden_Plade.querySelectorAll(
  ".Letter_2_3_1, .Letter_2_3_2, .Letter_2_3_3, .Letter_2_3_4, .Letter_2_3_5, .Letter_2_3_6, .Letter_2_3_7, .Letter_2_3_8, .Letter_2_3_9"
);

let Første_Række_Farver_2 = Anden_Plade.querySelectorAll(
  ".Cell_2_1_1, .Cell_2_1_2, .Cell_2_1_3, .Cell_2_1_4, .Cell_2_1_5"
);

let Anden_Række_Farver_2 = Anden_Plade.querySelectorAll(
  ".Cell_2_2_1, .Cell_2_2_2, .Cell_2_2_3, .Cell_2_2_4, .Cell_2_2_5"
);

let Tredje_Række_Farver_2 = Anden_Plade.querySelectorAll(
  ".Cell_2_3_1, .Cell_2_3_2, .Cell_2_3_3, .Cell_2_3_4, .Cell_2_3_5"
);

let Valgte_Celler_2_1 = [];
Plade_2_1_Index = 0;

function Generer_Plader_2_1(User_Arrays, Email_Input) {
  if (User_Arrays[Email_Input][1][0].length > 0) {
    for (let i = 0; i < User_Arrays[Email_Input][1][0].length; i++) {
      Første_Række_Tal_2[i].textContent = User_Arrays[Email_Input][1][0][i];
    }
    Plade_2_1_Index++;
  } else {
    while (Plade_2_1_Index < 5) {
      let Random_Række_Plads = Math.floor(Math.random() * 9);
      let Random_Plade_Tal = Random_Tal();
      if (!Valgte_Celler_2_1.includes(Random_Række_Plads)) {
        User_Arrays[Email_Input][1][0][Random_Række_Plads] = Random_Plade_Tal;
        Første_Række_Tal_2[Random_Række_Plads].textContent = Random_Plade_Tal;
        Valgte_Celler_2_1.push(Random_Række_Plads);
        Plade_2_1_Index++;
      }
    }
  }
}

let Valgte_Celler_2_2 = [];
Plade_2_2_Index = 0;

function Generer_Plader_2_2(User_Arrays, Email_Input) {
  if (User_Arrays[Email_Input][1][1].length > 0) {
    for (let i = 0; i < User_Arrays[Email_Input][1][1].length; i++) {
      Anden_Række_Tal_2[i].textContent = User_Arrays[Email_Input][1][1][i];
    }
    Plade_2_2_Index++;
  } else {
    while (Plade_2_2_Index < 5) {
      let Random_Række_Plads = Math.floor(Math.random() * 9);
      let Random_Plade_Tal = Random_Tal();
      if (!Valgte_Celler_2_2.includes(Random_Række_Plads)) {
        User_Arrays[Email_Input][1][1][Random_Række_Plads] = Random_Plade_Tal;
        Anden_Række_Tal_2[Random_Række_Plads].textContent = Random_Plade_Tal;
        Valgte_Celler_2_2.push(Random_Række_Plads);
        Plade_2_2_Index++;
      }
    }
  }
}

let Valgte_Celler_2_3 = [];
Plade_2_3_Index = 0;

function Generer_Plader_2_3(User_Arrays, Email_Input) {
  if (User_Arrays[Email_Input][1][2].length > 0) {
    for (let i = 0; i < User_Arrays[Email_Input][1][2].length; i++) {
      Tredje_Række_Tal_2[i].textContent = User_Arrays[Email_Input][1][2][i];
    }
    Plade_2_3_Index++;
  } else {
    while (Plade_2_3_Index < 5) {
      let Random_Række_Plads = Math.floor(Math.random() * 9);
      let Random_Plade_Tal = Random_Tal();
      if (!Valgte_Celler_2_3.includes(Random_Række_Plads)) {
        User_Arrays[Email_Input][1][2][Random_Række_Plads] = Random_Plade_Tal;
        Tredje_Række_Tal_2[Random_Række_Plads].textContent = Random_Plade_Tal;
        Valgte_Celler_2_3.push(Random_Række_Plads);
        Plade_2_3_Index++;
      }
    }
  }
}

let Tredje_Plade = document.querySelector(".Table_3");
let Første_Række_Tal_3 = Tredje_Plade.querySelectorAll(
  ".Letter_3_1_1, .Letter_3_1_2, .Letter_3_1_3, .Letter_3_1_4, .Letter_3_1_5, .Letter_3_1_6, .Letter_3_1_7, .Letter_3_1_8, .Letter_3_1_9"
);

let Anden_Række_Tal_3 = Tredje_Plade.querySelectorAll(
  ".Letter_3_2_1, .Letter_3_2_2, .Letter_3_2_3, .Letter_3_2_4, .Letter_3_2_5, .Letter_3_2_6, .Letter_3_2_7, .Letter_3_2_8, .Letter_3_2_9"
);

let Tredje_Række_Tal_3 = Tredje_Plade.querySelectorAll(
  ".Letter_3_3_1, .Letter_3_3_2, .Letter_3_3_3, .Letter_3_3_4, .Letter_3_3_5, .Letter_3_3_6, .Letter_3_3_7, .Letter_3_3_8, .Letter_3_3_9"
);

let Første_Række_Farver_3 = Tredje_Plade.querySelectorAll(
  ".Cell_3_1_1, .Cell_3_1_2, .Cell_3_1_3, .Cell_3_1_4, .Cell_3_1_5"
);

let Anden_Række_Farver_3 = Tredje_Plade.querySelectorAll(
  ".Cell_3_2_1, .Cell_3_2_2, .Cell_3_2_3, .Cell_3_2_4, .Cell_3_2_5"
);

let Tredje_Række_Farver_3 = Tredje_Plade.querySelectorAll(
  ".Cell_3_3_1, .Cell_3_3_2, .Cell_3_3_3, .Cell_3_3_4, .Cell_3_3_5"
);

let Valgte_Celler_3_1 = [];
Plade_3_1_Index = 0;

function Generer_Plader_3_1(User_Arrays, Email_Input) {
  if (User_Arrays[Email_Input][2][0].length > 0) {
    for (let i = 0; i < User_Arrays[Email_Input][2][0].length; i++) {
      Første_Række_Tal_3[i].textContent = User_Arrays[Email_Input][2][0][i];
    }
    Plade_3_1_Index++;
  } else {
    while (Plade_3_1_Index < 5) {
      let Random_Række_Plads = Math.floor(Math.random() * 9);
      let Random_Plade_Tal = Random_Tal();
      if (!Valgte_Celler_3_1.includes(Random_Række_Plads)) {
        User_Arrays[Email_Input][2][0][Random_Række_Plads] = Random_Plade_Tal;
        Første_Række_Tal_3[Random_Række_Plads].textContent = Random_Plade_Tal;
        Valgte_Celler_3_1.push(Random_Række_Plads);
        Plade_3_1_Index++;
      }
    }
  }
}

let Valgte_Celler_3_2 = [];
Plade_3_2_Index = 0;

function Generer_Plader_3_2(User_Arrays, Email_Input) {
  if (User_Arrays[Email_Input][2][1].length > 0) {
    for (let i = 0; i < User_Arrays[Email_Input][2][1].length; i++) {
      Anden_Række_Tal_3[i].textContent = User_Arrays[Email_Input][2][1][i];
    }
    Plade_3_2_Index++;
  } else {
    while (Plade_3_2_Index < 5) {
      let Random_Række_Plads = Math.floor(Math.random() * 9);
      let Random_Plade_Tal = Random_Tal();
      if (!Valgte_Celler_3_2.includes(Random_Række_Plads)) {
        User_Arrays[Email_Input][2][1][Random_Række_Plads] = Random_Plade_Tal;
        Anden_Række_Tal_3[Random_Række_Plads].textContent = Random_Plade_Tal;
        Valgte_Celler_3_2.push(Random_Række_Plads);
        Plade_3_2_Index++;
      }
    }
  }
}

let Valgte_Celler_3_3 = [];
Plade_3_3_Index = 0;

function Generer_Plader_3_3(User_Arrays, Email_Input) {
  if (User_Arrays[Email_Input][2][2].length > 0) {
    for (let i = 0; i < User_Arrays[Email_Input][2][2].length; i++) {
      Tredje_Række_Tal_3[i].textContent = User_Arrays[Email_Input][2][2][i];
    }
    Plade_3_3_Index++;
  } else {
    while (Plade_3_3_Index < 5) {
      let Random_Række_Plads = Math.floor(Math.random() * 9);
      let Random_Plade_Tal = Random_Tal();
      if (!Valgte_Celler_3_3.includes(Random_Række_Plads)) {
        User_Arrays[Email_Input][2][2][Random_Række_Plads] = Random_Plade_Tal;
        Tredje_Række_Tal_3[Random_Række_Plads].textContent = Random_Plade_Tal;
        Valgte_Celler_3_3.push(Random_Række_Plads);
        Plade_3_3_Index++;
      }
    }
  }
}
