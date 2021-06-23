let input = document.getElementById('myInput')
let buttonGet = document.getElementById('buttonGet')
let copy = document.getElementById('copy')

buttonGet.addEventListener('click', () => {
   if (input.value !== '') {
      let url = input.value
      let newURL = 'https://dgeft87wbj63p.cloudfront.net/' + url.slice(37, -35) + '/chunked/index-dvr.m3u8'
      input.value = newURL
   }
})

copy.addEventListener('click', () => {
   input.select()
   document.execCommand("copy")
})