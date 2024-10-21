async function fetchdata() {
    try {
        let response = await fetch("https://api.github.com/users?per_page=10");
        let data = await response.json();

        const output = document.getElementById("output");
        output.innerHTML = ''; // Clear previous output

        // Extract and display login, node_id, and url from each user object
        data.forEach((user) => {
            output.innerHTML += `
                <div>
                    <strong>Login:</strong> ${user.login}<br>
                    <strong>Node ID:</strong> ${user.node_id}<br>
                    <strong>URL:</strong> <a href="${user.url}" target="_blank">${user.url}</a><br>
                    <hr>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        output.innerHTML = 'Error fetching data.';
    }
}
