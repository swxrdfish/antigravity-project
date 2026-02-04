document.addEventListener('DOMContentLoaded', () => {
    const decryptBtn = document.getElementById('decryptBtn');
    const modal = document.getElementById('decryptModal');
    const closeModal = document.getElementById('closeModal');
    const form = document.getElementById('accessForm');

    // UI Elements to change
    const nameDisplay = document.getElementById('nameDisplay');
    const aliasDisplay = document.getElementById('aliasDisplay');
    const encryptedContent = document.getElementById('encryptedContent');
    const decryptedContent = document.getElementById('decryptedContent');
    const container = document.querySelector('.identity-container');

    // Open Modal
    decryptBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Close Modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Handle Form
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('visitorName').value;
        const email = document.getElementById('visitorEmail').value;
        const purpose = document.getElementById('visitorPurpose').value;

        // Simulate API call
        const btn = document.querySelector('#accessForm button[type="submit"]');
        btn.textContent = 'DECRYPTING...';
        btn.disabled = true;

        setTimeout(() => {
            // Mock Success
            const mockIdentity = {
                name: "Ariful Karim Sahaf",
                alias: "SXRDFISH",
                education: "Undergraduate student at East West University",
                contact: {
                    email: "arifulsahaf@gmail.com",
                    phone: "+8801640542998"
                }
            };

            // Success! Unlock identity
            modal.style.display = 'none';
            decryptBtn.style.display = 'none'; // Hide button

            // Animate unlock
            container.classList.add('decrypted');

            // Update Text
            nameDisplay.textContent = mockIdentity.name;
            aliasDisplay.textContent = `ALIAS: ${mockIdentity.alias}`;
            aliasDisplay.style.color = 'var(--text-main)';

            // Show Details
            encryptedContent.style.display = 'none';
            decryptedContent.style.display = 'block';

            // Persist state
            sessionStorage.setItem('isDecrypted', 'true');
        }, 1500);
    });
});
