function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
}

function showForm(formType) {
    const container = document.getElementById('form-container');
    let formHTML = '';

    switch (formType) {
        case 'prebook':
            formHTML = `
                        <table class="table">
                            <thead>
                                <tr><th>Data 1</th><th>Data 2</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Example 1</td><td>Example 2</td></tr>
                            </tbody>
                            <tbody>
                                <tr><td>Example 1</td><td>Example 2</td></tr>
                            </tbody>
                            <tbody>
                                <tr><td>Example 1</td><td>Example 2</td></tr>
                            </tbody>
                            <tbody>
                                <tr><td>Example 1</td><td>Example 2</td></tr>
                            </tbody>
                        </table>`;
            break;
        case 'registration':
            formHTML = `<table class="table">
                            <thead>
                                <tr><th>Data 1</th><th>Data 2</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Example 1</td><td>Example 2</td></tr>
                            </tbody>
                            <tbody>
                                <tr><td>Example 1</td><td>Example 2</td></tr>
                            </tbody>
                            <tbody>
                                <tr><td>Example 1</td><td>Example 2</td></tr>
                            </tbody>
                        </table>`;
            break;
        case 'payment':
            formHTML = `
                        <table class="table">
                            <thead>
                                <tr><th>Payment ID</th><th>Amount</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>001</td><td>$100</td></tr>
                            </tbody>
                            <tbody>
                                <tr><td>Example 1</td><td>Example 2</td></tr>
                            </tbody>
                            <tbody>
                                <tr><td>Example 1</td><td>Example 2</td></tr>
                            </tbody>
                            <tbody>
                                <tr><td>Example 1</td><td>Example 2</td></tr>
                            </tbody>
                        </table>`;
            break;
    }

    container.innerHTML = formHTML;
}
