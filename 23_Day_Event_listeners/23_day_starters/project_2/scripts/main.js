function handleKeyDown(event) {
    const key = event.key;
    const code = event.code;
    const keyCode = event.keyCode;

    document.getElementById('key').innerText = `Key pressed: ${key}`;
    document.getElementById('code').innerText = `Code: ${code}`;
    document.getElementById('keyCode').innerText = `KeyCode: ${keyCode}`;
}

window.addEventListener('keydown', handleKeyDown);
