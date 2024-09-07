(() => {
    class SecretFile {
        secretMessage() {
            console.log("Shhhh...");
        }
    }
    const secretFile = new SecretFile();
    secretFile.secretMessage();
})();