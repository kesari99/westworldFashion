function displaySection(sectionId) {
    var sections = document.getElementsByClassName("sectionNew");
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
    var sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = "block";
  }