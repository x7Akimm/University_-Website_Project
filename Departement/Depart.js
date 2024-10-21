var currentTable = 1;
var totalTables = 4;

document.getElementById('left-arrow').addEventListener('click', function () {
  if (currentTable > 1) {
    currentTable--;
    updateTable();
  }
  updateArrow();
});

document.getElementById('right-arrow').addEventListener('click', function () {
  if (currentTable < totalTables) {
    currentTable++;
    updateTable();
  }
  updateArrow();
});

function updateTable() {
  for (var i = 1; i <= totalTables; i++) {
    var table = document.getElementById('table' + i);
    table.classList.remove('visible');
    table.classList.add('hidden', 'fade-out');
  }
  setTimeout(function () {
    for (var i = 1; i <= totalTables; i++) {
      var table = document.getElementById('table' + i);
      table.classList.remove('fade-out');
    }
  }, 500);

  var current = document.getElementById('table' + currentTable);
  current.classList.remove('hidden');
  current.classList.add('visible', 'fade-in');

  document.getElementById('table-number').textContent = currentTable;
}

function updateArrow() {
  if (currentTable == 1) {
    document.getElementsByClassName("imgss").item(0).classList.add("imgss-disable");
  }
  else if (currentTable == 4)
    document.getElementsByClassName("imgss").item(1).classList.add("imgss-disable");
  else {
    document.getElementsByClassName("imgss").item(0).classList.remove("imgss-disable");
    document.getElementsByClassName("imgss").item(1).classList.remove("imgss-disable");
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.getElementById('search-button').addEventListener('click', function () {
  var searchInput = document.getElementById('search-input').value.toLowerCase();
  search(searchInput);
});

function search(query) {
  var allRows = document.querySelectorAll('.rows');
  resetHighlight(allRows);
  searchRow(allRows, 0, query.toLowerCase());
}

function resetHighlight(rows) {
  rows.forEach(function(row) {
    row.style.backgroundColor = '';
  });
}

function searchRow(rows, index, query) {
  if (index >= rows.length) {

    navigateTables();
    return;
  }

  var currentRow = rows[index];
  highlightRow(currentRow);

  var cells = currentRow.getElementsByTagName('td');
  for (var k = 0; k < cells.length; k++) {
    if (cells[k].textContent.toLowerCase().includes(query)) {
  
      currentRow.style.backgroundColor = 'yellow';
      setTimeout(function(row) {
        row.style.backgroundColor = ''; 
      }, 1000, currentRow); 
  
    }
  }

 
  setTimeout(function() {
    currentRow.style.backgroundColor = ''; 
    searchRow(rows, index + 1, query); 
  }, 100); 
}

function highlightRow(row) {
  row.style.backgroundColor = 'lightblue';
}

function navigateTables() {
  if (currentTable < totalTables) {
    currentTable++;
  } else {
    currentTable = 1; 
  }
  updateTable();
}
