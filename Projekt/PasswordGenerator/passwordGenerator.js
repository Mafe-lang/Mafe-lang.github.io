let Password_Slider = document.querySelector(".Password_Slider");
let Password_Length = document.querySelector(".Password_Length");
let Password_Text_Box = document.querySelector(".Password_Text_Box");
let New_Password_Button = document.querySelector(".New_Password_Button");

let Include_Uppercase = document.querySelector(".Include_Uppercase");
let Include_Lowercase = document.querySelector(".Include_Lowercase");
let Include_Numbers = document.querySelector(".Include_Numbers");
let Include_SpecialChars = document.querySelector(
  ".Include_Special_Characters"
);

Password_Length.innerHTML = Password_Slider.value;

Password_Slider.addEventListener("input", function () {
  Password_Length.innerHTML = this.value;
});

New_Password_Button.addEventListener("click", function () {
  const Updated_Password_Length = Password_Slider.value;
  const Updated_Password = Generate_Password(Updated_Password_Length);
  Password_Text_Box.value = Updated_Password;
});

function Generate_Password(Updated_Password_Length) {
  let Password = "";

  if (Include_Uppercase.checked) {
    Password += "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ";
  }
  if (Include_Lowercase.checked) {
    Password += "abcdefghijklmnopqrstuvwxyzæøå";
  }
  if (Include_Numbers.checked) {
    Password += "0123456789";
  }
  if (Include_SpecialChars.checked) {
    Password += "$§!@#€%&/()=+?¨^'*-_.:,;<>";
  }

  if (Password === "") {
    alert("Vælg mindst en tjekboks");
    return;
  }

  let Finished_Password = "";
  for (let i = 0; i < Updated_Password_Length; i++) {
    const Random_Password_Generated = Math.floor(
      Math.random() * Password.length
    );
    Finished_Password += Password[Random_Password_Generated];
  }
  return Finished_Password;
}
