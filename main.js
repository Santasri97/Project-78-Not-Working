var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg",
  "https://i.postimg.cc/qqyYvVbq/grandpa.jpg",
  "https://i.postimg.cc/wjMnFtMX/father.jpg",
  "https://i.postimg.cc/5ymDKL83/bro.jpg",
  "https://i.postimg.cc/JnL6wtrd/sister.jpg",
  "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book",
  "Ranbir Singh",
  "Diljeet Singh",
  "Rocky Singh",
  "Alia Singh",
  "Soni Singh"];

function update() {
  var i = 0;
  i++;
  if (i == 9) {
    i = 0;
  }
  var updatedImage = [images];
  var updatedName = [names];
  document.getElementById("family_member_image").src = updatedImage,[i];
  document.getElementById("family_member_name").innerHTML= updatedName,[i];
  }
  
  
  //Debug the code to store list of images in updatedImage. Use images[i]
  
  //Debug the code to store list of names in updatedName. Use names[i]
  
  
