const pageDiv      = document.getElementsByClassName("page")[0];
let paginationDiv  = document.createElement("DIV");
let paginationList = document.createElement("UL");
let students       = document.getElementsByClassName("student-item");
let pageCount      = Math.ceil(students.length / 10);
let pageLinks      = [];

// hide students
for (let i = 10; i < students.length; i++) {
	students[i].style.display = "none";
}

// add pagination
paginationDiv.className = "pagination";
paginationDiv.appendChild(paginationList);
pageDiv.appendChild(paginationDiv);

for (let i = 0; i < pageCount; i++) {
	let pageLink = createPageElement(i + 1);
	paginationList.appendChild(pageLink);
}

/**
 * Creates a page element for pagination
 * @param number the number of the page that the element will link to
 */
function createPageElement(number) {
	let pageElement = document.createElement("LI");
	let pageLink    = document.createElement("A");
	let pageText    = document.createTextNode(number);

	// set the class for the first page
	if (number === 1) {
		pageLink.className += " active";
	}

	pageLinks.push(pageLink);
	pageLink.href = "#";
	pageLink.appendChild(pageText);

	pageLink.addEventListener("click", function (event) {
		event.preventDefault();

		for (let i = 0; i < pageLinks.length; i++) {
			pageLinks[i].classList.remove("active");
		}

		hideAllStudents();
		pageLink.className += " active";
		showStudents(number - 1);
	});

	pageElement.appendChild(pageLink);

	return pageElement;
}

/**
 * Shows 10 students with corresponding page
 * @param page the page of the students to display
 */
function showStudents(page) {
	let start = page * 10;
	let end   = start + 10;

	for (let i = start; i < end && i < students.length; i++) {
		students[i].style.display = "inherit";
	}
}

function hideAllStudents() {
	for (let i = 0; i < students.length; i++) {
		students[i].style.display = "none";
	}
}
