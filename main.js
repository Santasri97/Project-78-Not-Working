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
 var i = 0;
function update() {
 
  i++;
  if (i > 5) {
    i = 0;
  }
  var updatedImage = images[i];
  var updatedName = names[i];
  document.getElementById("family_member_image").src = updatedImage;
  document.getElementById("family_member_name").innerHTML= updatedName;
  }
  
  
  //Debug the code to store list of images in updatedImage. Use images[i]
  
  //Debug the code to store list of names in updatedName. Use names[i]
  
  
