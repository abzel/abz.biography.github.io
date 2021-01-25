let div = document.createElement('div')
div.className = 'networks'     
document.body.append(div)

let li = document.createElement('li')
li.innerHTML = 'Family'
li.className = 'btn'

let li1 = document.createElement('li')
li1.innerHTML = 'Job'
li1.className = 'btn'

let li2 = document.createElement('li')
li2.innerHTML = 'Plans'
li2.className = 'btn'

let li4 = document.createElement('li')
li4.innerHTML = 'Contacts'
li4.className = 'btn'

div.appendChild(li)
div.appendChild(li1)
div.appendChild(li2)
div.appendChild(li4)

let div2 = document.createElement('div')
div2.className = 'div2'
div2.innerHTML = 'This page is mainly about my hobbies.'
document.body.append(div2)

let div1 = document.createElement('div')
div1.className = 'youtube'
document.body.append(div1)

let p = document.createElement('p')
p.innerHTML = 'Click here for more information →'
let div3 = document.createElement('div')
div3.className = 'div3'

let img = document.createElement('img')
img.className = 'btn'
img.src = "./images/instagram.png"

let img1 = document.createElement('img')
img1.className = 'btn'
img1.src = "./images/youtube.png"

let img2 = document.createElement('img')
img2.className = 'btn'
img2.src = "./images/linkedin.jpg"

div1.append(p)
div1.append(div3)
div3.appendChild(img)
div3.appendChild(img1)
div3.appendChild(img2)

let h1 = document.createElement('h1')
h1.innerHTML = 'I am interested in a video editing and recently I have started practice it. Some of them you can see on my page in Youtube. Please click like” and subscribe'

let iframe = document.createElement('iframe')
iframe.src = 'https://www.youtube.com/embed/r7KDUv-Jepk'

let iframe1 = document.createElement('iframe')
iframe1.src='https://www.youtube.com/embed/G_y0IPhREmQ'
div1.appendChild(h1)
div1.appendChild(iframe)
div1.appendChild(iframe1)

const instaPage = () => {
    window.location.href =  'https://www.instagram.com/bz008/'
}
img.addEventListener('click', instaPage)

const ytPage = () => {
    window.location.href =  'https://www.youtube.com/channel/UCnSVAjXFjunpZCyAumEz3Sg'
}
img1.addEventListener('click', ytPage)

const linkdnPage = () => {
    window.location.href =  'https://www.linkedin.com/in/abzel-bolotbekov-1220b91a8/'
}
img2.addEventListener('click', linkdnPage)

const myFam = () => {
    window.location.href = './family.html'
}
li.addEventListener('click', myFam)

const myJob = () => {
    window.location.href = './job.html'
}
li1.addEventListener('click', myJob)

const myPlans = () => {
    window.location.href = './plans.html'
}
li2.addEventListener('click', myPlans)

const myContacts = () => {
    window.location.href = './contacts.html'
}
li4.addEventListener('click', myContacts)