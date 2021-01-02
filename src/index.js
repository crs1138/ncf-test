( ()=>{
    const card = document.getElementById('card');
    card.addEventListener('click', startScan);
    
    async function startScan() {
        try {
            const reader = new NDEFReader();
            await reader.scan();
            reader.onreading = (e) => {
                console.log(e.message);
            };

        } catch (err) {
            console.log(`Argh! ${err}`);
        }
    }
    
} )();