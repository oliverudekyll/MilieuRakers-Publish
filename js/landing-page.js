var imagePaths = [
    {
      preview: "../Works/Images/30/Preview.jpg",
      hover: ["../Works/Images/30/1.jpg", "../Works/Images/30/2.jpg", "../Works/Images/30/Preview.jpg"]
    },
    {
      preview: "../Works/Images/29/Preview.jpg",
      hover: ["../Works/Images/29/1.jpg", "../Works/Images/29/Preview.jpg"]
    },
    {
      preview: "../Works/Images/28/Preview.jpg",
      hover: [],
    },
    {
      preview: "../Works/Images/27/Preview.jpg",
      hover: ["../Works/Images/27/1.jpg", "../Works/Images/27/2.jpg", "../Works/Images/27/Preview.jpg"]
    },
    {
      preview: "../Works/Images/26/Preview.jpg",
      hover: ["../Works/Images/26/1.jpg", "../Works/Images/26/2.jpg", "../Works/Images/26/Preview.jpg"]
    },
    {
      preview: "../Works/Images/25/Preview.jpg",
      hover: ["../Works/Images/25/1.jpg", "../Works/Images/25/Preview.jpg"],
    },
    {
      preview: "../Works/Images/24/Preview.jpg",
      hover: ["../Works/Images/24/1.jpg", "../Works/Images/24/Preview.jpg"],
      zIndex: "200"
    },
    {
      preview: "../Works/Images/23/Preview.jpg",
      hover: ["../Works/Images/23/1.jpg", "../Works/Images/23/Preview.jpg"],
    },
    {
      preview: "../Works/Images/22/Preview.jpg",
      hover: ["../Works/Images/22/1.jpg", "../Works/Images/22/2.jpg", "../Works/Images/22/Preview.jpg"],
    },
    {
      preview: "../Works/Images/21/Preview.jpg",
      hover: ["../Works/Images/21/1.jpg", "../Works/Images/21/Preview.jpg"],
    },
    {
      preview: "../Works/Images/20/Preview.jpg",
      hover: ["../Works/Images/20/1.jpg", "../Works/Images/20/Preview.jpg"],
    },
    {
      preview: "../Works/Images/19/Preview.jpg",
      hover: ["../Works/Images/19/1.jpg", "../Works/Images/19/Preview.jpg"],
    },
    {
      preview: "../Works/Images/18/Preview.jpg",
      hover: ["../Works/Images/18/1.jpg", "../Works/Images/18/2.jpg", "../Works/Images/18/Preview.jpg"],
    },
    {
      preview: "../Works/Images/17/Preview.jpg",
      hover: ["../Works/Images/17/1.jpg", "../Works/Images/17/Preview.jpg"],
    },
    {
      preview: "../Works/Images/16/Preview.jpg",
      hover: ["../Works/Images/16/1.jpg", "../Works/Images/16/2.jpg", "../Works/Images/16/Preview.jpg"],
    },
    {
      preview: "../Works/Images/15/Preview.jpg",
      hover: ["../Works/Images/15/1.jpg", "../Works/Images/15/2.jpg", "../Works/Images/15/3.jpg", "../Works/Images/15/Preview.jpg"],
    },
    {
      preview: "../Works/Images/14/Preview.jpg",
      hover: [],
    },
    {
      preview: "../Works/Images/13/Preview.jpg",
      hover: [],
    },
    {
      preview: "../Works/Images/12/Preview.jpg",
      hover: [],
    },
    {
      preview: "../Works/Images/11/Preview.jpg",
      hover: [],
    },
    {
      preview: "../Works/Images/10/Preview.jpg",
      hover: [],
    },
    {
      preview: "../Works/Images/9/Preview.jpg",
      hover: [],
    },
    {
      preview: "../Works/Images/8/Preview.jpg",
      hover: [],
    },
    {
      preview: "../Works/Images/7/Preview.jpg",
      hover: [],
    },
    {
      preview: "../Works/Images/6/Preview.jpg",
      hover: [],
    },
    {
      preview: "../Works/Images/5/Preview.jpg",
      hover: [],
    },
    {
      preview: "../Works/Images/4/Preview.jpg",
      hover: [],
    },
    {
      preview: "../Works/Images/3/Preview.jpg",
      hover: [],
    },
    {
      preview: "../Works/Images/2/Preview.jpg",
      hover: [],
    },
    {
      preview: "../Works/Images/1/Preview.jpg",
      hover: [],
    }
  ];
  
  
  var imgContainer = document.getElementById("feed");
  
  for (var i = 0; i < imagePaths.length; i++) {
      var imgDiv = document.createElement("div");
      imgDiv.className = "article";
    
      var img = document.createElement("img");
      img.src = imagePaths[i].preview;
      img.className = "works";
      imgDiv.id = "id-" + i;
  
      if (imagePaths[i].hasOwnProperty("zIndex")) {
        imgDiv.style.zIndex = imagePaths[i].zIndex;
      }
    
      imgDiv.appendChild(img);
      imgContainer.appendChild(imgDiv);
    }
  
    var emptyDiv = document.createElement("div");
    emptyDiv.className = "empty";
    imgContainer.appendChild(emptyDiv)
  
  
    var displace = function() {
      for (var i = 0; i < imagePaths.length; i++) {
          var image = document.getElementById("id-" + i);
  
          var randomTranslateX = Math.floor(Math.random() * 20) - 10;
          var randomTranslateY = Math.floor(Math.random() * 60) - 30;

          if (image) {
            image.style.transform = `translate(${randomTranslateX}%, ${randomTranslateY}%)`;
          }
      }
  };

  var mobileDisplace = function() {
    for (var i = 0; i < imagePaths.length; i++) {
        var image = document.getElementById("id-" + i);

        var mobileRandomTranslateX = Math.floor(Math.random() * 15) - 7;
        var mobileRandomTranslateY = Math.floor(Math.random() * 10) - 5;

        if (image) {
            image.style.transform = `translate(${mobileRandomTranslateX}%, ${mobileRandomTranslateY}%)`;
        }
    }
};
  
  document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 850) {
      mobileDisplace();
    } else {
      displace();
    }
    
    window.addEventListener("resize", function() {
      if (window.innerWidth <= 850) {
        mobileDisplace();
      } else {
        displace();
      }
      })
  });
  
  var imageElements = document.querySelectorAll("#feed img");
  
  function changeImageOnHover(index) {
    return function () {
      var image = imageElements[index];
  
      var hoverImages = imagePaths[index].hover;
      
  
      if (hoverImages.length > 0) {
        var currentImageIndex = 0;
  
        function cycleImages() {
          image.src = hoverImages[currentImageIndex];
          currentImageIndex = (currentImageIndex + 1) % hoverImages.length;
        }
  
        var interval = setInterval(cycleImages, 1000);
  
        image.addEventListener("mouseout", function () {
          clearInterval(interval);
          image.src = imagePaths[index].preview;
        });
      }
    };
  }

  var imageElements = document.querySelectorAll("#feed img");

function changeImageOnHover(index) {
  return function () {
    var image = imageElements[index];

    var hoverImages = imagePaths[index].hover;
    

    if (hoverImages.length > 0) {
      var currentImageIndex = 0;

      function cycleImages() {
        image.src = hoverImages[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % hoverImages.length;
      }

      var interval = setInterval(cycleImages, 750);

      image.addEventListener("mouseout", function () {
        clearInterval(interval);
        image.src = imagePaths[index].preview;
      });
    }
  };
}

for (var i = 0; i < imageElements.length; i++) {
  imageElements[i].addEventListener("mouseover", changeImageOnHover(i));
}

function quickViewImage(index) {
    var image = imageElements[index];
    var hoverImages = imagePaths[index].hover;
  
    if (hoverImages.length > 0) {
      var quickViewOverlay = document.createElement("div");
      quickViewOverlay.className = "quick-view-overlay";
  
      var quickViewImage = document.createElement("img");
      quickViewImage.src = hoverImages[0];
      quickViewImage.className = "quick-view-image";
  
      quickViewOverlay.appendChild(quickViewImage);
      document.body.appendChild(quickViewOverlay);
  
      var currentImageIndex = 1;
  
      function cycleQuickViewImages() {
        quickViewImage.src = hoverImages[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % hoverImages.length;
      }
  
      var interval = setInterval(cycleQuickViewImages, 750);
  
      quickViewOverlay.addEventListener("click", function () {
        clearInterval(interval);
        document.body.removeChild(quickViewOverlay);
      });
    } else {
  
      var quickViewOverlay = document.createElement("div");
      quickViewOverlay.className = "quick-view-overlay";
  
      var quickViewImage = document.createElement("img");
      quickViewImage.src = imagePaths[index].preview;
      quickViewImage.className = "quick-view-image";
  
      quickViewOverlay.appendChild(quickViewImage);
      document.body.appendChild(quickViewOverlay);
  
      quickViewOverlay.addEventListener("click", function () {
        document.body.removeChild(quickViewOverlay);
      });
    }
  }
  
  imgContainer.addEventListener("click", function (event) {
    var clickedElement = event.target;
    if (clickedElement.tagName === "IMG") {
      var index = Array.from(imageElements).indexOf(clickedElement);
      quickViewImage(index);
    }
  });

var logo = document.getElementById("logo");

var logoUrls = [
  "../Images/Logos/ErikMerisalu-Website-Logo-1.png",
  "../Images/Logos/ErikMerisalu-Website-Logo-2.png"
]

var currentLogoIndex = 0;

function changeLogo() {
  logo.src = logoUrls[currentLogoIndex];
  currentLogoIndex = (currentLogoIndex + 1) % logoUrls.length;
}

changeLogo();
setInterval(changeLogo, 1000);

document.addEventListener("DOMContentLoaded", function() {
    var worksButton = document.getElementById("works")
    var feed = document.getElementById("feed");
    var worksOverlay = document.getElementById("worksOverlay");

    worksButton.addEventListener("click", function() {
        worksOverlay.classList.toggle("active");
        feed.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var contactButton = document.getElementById("contactButton");

    contactButton.addEventListener("click", function() {
        var quickViewOverlay = document.createElement("div");
        quickViewOverlay.className = "quick-view-overlay";
    
        var quickViewContactContainer = document.createElement("div");
        quickViewContactContainer.className = "quick-view-contact-container"
    
        var email = document.createElement("a");
        email.href = "mailto:erikmerisalu@me.com";
        email.className = "quick-view-contact-buttons";
        email.textContent = "Email";
        var hoverImageEmail = document.createElement("img");
        hoverImageEmail.src = "../Images/Hover-Images/4.png";
        hoverImageEmail.className = "hover-image";

        var instagram = document.createElement("a");
        instagram.href = "https://www.instagram.com/erjjek/";
        instagram.className = "quick-view-contact-buttons";
        instagram.textContent = "Instagram";
        var hoverImageIG = document.createElement("img");
        hoverImageIG.src = "../Images/Hover-Images/2.png";
        hoverImageIG.className = "hover-image";
    
        email.appendChild(hoverImageEmail);
        instagram.appendChild(hoverImageIG);
        quickViewContactContainer.appendChild(instagram);
        quickViewContactContainer.appendChild(email);
        quickViewOverlay.appendChild(quickViewContactContainer);
        document.body.appendChild(quickViewOverlay);

        quickViewOverlay.addEventListener("click", function() {
            document.body.removeChild(quickViewOverlay)
        })
    })
})