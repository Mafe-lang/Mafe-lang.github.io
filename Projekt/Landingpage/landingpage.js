


const mID = document.getElementById("MIDDisplay");
let IDInput = document.getElementById("IDInput");
let Inputvalue = IDInput.value;
const boks = document.getElementById("boks")
boks.style.display = 'none';

document.getElementById("Fortsæt").addEventListener("click",displayID);
document.getElementById("Fortsæt").addEventListener("click",displayID2);
document.getElementById("Fortsæt").addEventListener("click",displayID3);
document.getElementById("Fortsæt").addEventListener("click",displayID4);

function displayID() {
  let Inputvalue = IDInput.value;
  if(Inputvalue == "SESI") {
  mID.textContent = ""+"Tak Sebastian Sinding-Olsen - ID:SESI, der er sendt en mail til SESI@Kataloginc.dk";
  boks.style.display = 'block';
  } else {}
}



function displayID2() {
  let Inputvalue = IDInput.value;
  
    if(Inputvalue == "MAFE") {
    mID.textContent = ""+"Tak Magnus Peter Langhoff Fehrmann - ID:MAFE, der er sendt en mail til MAFE@Kataloginc.dk";
    boks.style.display = 'block';
    } else {}
  }



  function displayID3() {
    let Inputvalue = IDInput.value;
    
      if(Inputvalue == "JOAB") {
      mID.textContent = ""+"Tak Jonas Abde - ID:JOAB, der er sendt en mail til JOAB@Kataloginc.dk";
      boks.style.display = 'block';
      } else {}
    }

    
    function displayID4() {
      let Inputvalue = IDInput.value;
      
        if(Inputvalue !== "JOAB" && Inputvalue !== "MAFE" && Inputvalue !== "SESI") {
        alert("Medarbejder ID eksisterer ikke");
        } else {}
      }


