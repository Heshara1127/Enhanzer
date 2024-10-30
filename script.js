function filterStatus(status) {
    const rows = document.querySelectorAll("#employeeTable tbody tr");
    rows.forEach(row => {
        if (status === 'all' || row.getAttribute('data-status') === status) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });

   
    document.querySelectorAll(".filters button").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.filters button[onclick="filterStatus('${status}')"]`).classList.add("active");
}

// function searchTable() {
//     const searchValue = document.getElementById("searchInput").value.toLowerCase();
//     const rows = document.querySelectorAll("#employeeTable tbody tr");

//     rows.forEach(row => {
//         const cells = row.getElementsByTagName("td");
//         let match = false;
//         for (let cell of cells) {
//             if (cell.textContent.toLowerCase().includes(searchValue)) {
//                 match = true;
//                 break;
//             }
//         }
//         row.style.display = match ? "" : "none";
//     });
// }

const filterButtons = document.querySelectorAll('.filters button');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});


 
    function autoGenerateNumbers() {
        const table = document.getElementById("employeeTable");
        const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

        for (let i = 0; i < rows.length; i++) {
            const numberCell = document.createElement("td"); // Create a new cell for the number
            numberCell.textContent = i + 1; // Set the cell text to the row number (1-based index)
            rows[i].appendChild(numberCell); // Append the number cell to each row
        }
    }


    window.onload = autoGenerateNumbers;

