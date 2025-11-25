/* General page */
body {
    background: #0f0f0f;
    color: #fff;
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
}

/* Login box */
#loginBox {
    max-width: 300px;
    margin: 150px auto;
    text-align: center;
    padding: 20px;
    background: #222;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0,0,0,0.5);
}

#loginBox input {
    width: 90%;
    padding: 10px;
    margin: 8px 0;
    border-radius: 6px;
    border: none;
}

#loginBox button {
    padding: 10px 15px;
    border: none;
    border-radius: 6px;
    background: #0a84ff;
    color: white;
    cursor: pointer;
    margin-top: 5px;
    transition: 0.2s;
}

#loginBox button:hover {
    background: #006ddb;
}

/* Dashboard */
#dashboard {
    padding: 20px;
}

#players {
    margin-top: 20px;
}

.playerBox {
    background: #181818;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.playerBox button {
    background: #0a84ff;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    color: white;
    cursor: pointer;
    transition: 0.2s;
}

.playerBox button:hover {
    background: #006ddb;
}

/* Command box */
#cmdBox {
    margin-top: 20px;
    background: #222;
    padding: 15px;
    border-radius: 8px;
}

#cmdBox button {
    margin: 5px 5px 0 0;
    background: #0a84ff;
    border: none;
    padding: 8px 12px;
    border-radius: 6px;
    color: white;
    cursor: pointer;
    transition: 0.2s;
}

#cmdBox button:hover {
    background: #006ddb;
}
