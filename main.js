const LinksSocialMedia = {
    github: 'GedioneSouza',
    youtube: 'jakelinygracielly',
    facebook: 'maykbrito',
    instagrm: 'ge.souza',
    twitter: 'jakelinytec'
}

// function changeSocialMediaLinks() {
// //   document.getElementById('userName').textContent = 'Olivia'
// userName.textContent = 'Marcelo'
// }

function changeSocialMediaLinks() {
  for(let li of socialLinks.children) {
      const social = li.getAttribute('class')
 
  li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  
  //alert(li.children[0].href)
  }
}

// i = i + 1
// i++

changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()


// /  ARROW FUNCTIONS
// function nomedafuncao(argumentos){
//    code
// }

// argumento => {

// }