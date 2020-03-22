class DisplayToHtml {
  constructor(idOfDisplay) {
    if (idOfDisplay) {
      this.idOfDisplay = idOfDisplay;
      this.renderDisplay = (renderedDisplay, width, height) => {
        var element = document.getElementById(this.idOfDisplay);
        element.innerHTML = this.renderedHtml(renderedDisplay, width, height);
      };
      return this.renderDisplay;
    } else {
      console.warn("please set id of display");
    }
  }
  renderedHtml(renderDisplay, width, height) {
    var mainHtmlDisplay = `<div class='main-html-display' style='width : ${width}cm ;height : ${height}cm'>`;
    if (Array.isArray(renderDisplay)) {
      for (var indexRow in renderDisplay) {
        mainHtmlDisplay += "<div class='row-display'>";
        var row = renderDisplay[indexRow];
        if (Array.isArray(row)) {
          for (var indexColumn in row) {
            mainHtmlDisplay += `<div class='cell-display' style='background-color :${row[indexColumn]} '>`;
            mainHtmlDisplay += "</div>";
          }
        } else {
          console.warn("row is not array");
        }
        mainHtmlDisplay += "</div>";
      }
    } else {
      console.warn("render display is not array");
    }
    mainHtmlDisplay += "</div>";
    return mainHtmlDisplay;
  }
}

var testingDisplay = new Display(20, 20, 6, 6, 50, new DisplayToHtml("display"));
testingDisplay.on();
testingDisplay.runTestDisplay();