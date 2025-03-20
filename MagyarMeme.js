function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue
}

function deleteCookie(cname) {
    document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getMeme(){
    var today = new Date();
    var ISODate = today.toISOString().split("T")[0]
    var rdata = fetch('./memeData.json')
    .then(response => response.json())
    .then(jsonResponse => {
        return jsonResponse
    })

    return rdata
}

function revealAnswer(){
    var textBar = document.getElementsByClassName("textBar")[0];
    while (textBar.lastElementChild) {
        textBar.removeChild(textBar.lastElementChild);
    }
    var memeData = getMeme()
    var actualTranslation = "Thanks,|Magyar Post,|for the|delivery"

    wordByWordTranslation = actualTranslation.split("|")
    
    for (var x = 0; x < wordByWordTranslation.length; x++){
        var _textBrick = document.createElement("div")
        _textBrick.classList.add("textBrick")
        _textBrick.textContent = wordByWordTranslation[x]
        textBar.appendChild(_textBrick)
    }

}

function displayMeme(){
    var memeData = getMeme()

    console.log("The meme is:")
    console.log(memeData)

    // first display the image
    
    var imgbox = document.getElementsByClassName("memebox")[0]
    //imgbox.src = memeData.imageSource
    imgbox.src = './2025-03-19.png'
    
    var displayBox = document.getElementsByClassName("GameBoxInner")[0]

    var height = displayBox.clientHeight

    size = height * 0.6

    imgbox.style.height = size + 'px'
    imgbox.style.width = size+ 'px'

    // now display the text
    
    var text = "Koszi|Magyar Posta|a|Kiszallitast"
    var directTranslation = "Thanks|Magyar Post (Name)|(for) the|delivery"

    var wordByWordText = text.split("|")
    var wordByWordDirect = directTranslation.split("|")

    var textBar = document.getElementsByClassName("textBar")[0];

    textBar.style.gridTemplateColumns = "repeat(" + wordByWordDirect.length + ", 1fr)";

    for (var x = 0; x < wordByWordDirect.length; x++){
        var _textBrick = document.createElement("div")
        _textBrick.classList.add("textBrick")
        _textBrick.textContent = wordByWordText[x]

        var _toolTipText = document.createElement("span")
        _toolTipText.classList.add("toolTipText")
        _toolTipText.textContent = wordByWordDirect[x]
        _textBrick.appendChild(_toolTipText)
        

        textBar.appendChild(_textBrick)
    }


    // then the text box to submit your answer

    var _button = document.createElement("button")
    _button.style.height = '50px'
    _button.style.width = '150px'
    _button.style.marginTop = '50px'
    _button.textContent = 'Reveal Answer'
    _button.style.fontSize = '20px'

    _button.onclick = () =>{
        revealAnswer()
    }
    
    var buttonLoc = document.getElementsByClassName("buttonZone")[0]
    buttonLoc.appendChild(_button)

}