document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const cafeTableBody = document.getElementById('cafeTableBody');
  
    let cafes = [];
    let places = [];
  
    // Fetch cafes
    fetch('https://your-api-url/cafes')
      .then(response => response.json())
      .then(data => {
        cafes = data;
        updateTable();
      });
  
    // Fetch places
    fetch('https://your-api-url/places')
      .then(response => response.json())
      .then(data => {
        places = data;
        updateTable();
      });
  
    // Update table based on search term
    function updateTable() {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredCafes = cafes.filter(cafe => cafe.name.toLowerCase().includes(searchTerm));
      const cafeRows = filteredCafes.map(cafe => {
        const place = places.find(place => place.id === cafe.place_id);
        return `
          <tr>
            <td>${cafe.name}</td>
            <td>${place.street_no}</td>
            <td>${place.locality}</td>
            <td>${place.postal_code}</td>
          </tr>
        `;
      });
      cafeTableBody.innerHTML = cafeRows.join('');
    }
  
    // Listen for input event on search box
    searchInput.addEventListener('input', updateTable);
  });