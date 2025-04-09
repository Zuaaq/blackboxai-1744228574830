// Update UI
function updateUI() {
    elements.balance.textContent = gameState.balance;
    elements.betAmount.max = gameState.balance;
    
    if (!gameState.gameActive) {
        elements.placeBetBtn.disabled = false;
        elements.cashOutBtn.textContent = 'Tarik Dana';
    } else {
        elements.placeBetBtn.disabled = true;
        elements.cashOutBtn.textContent = 'Berhenti Main';
    }
}

// Utility function to shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Initialize the game when page loads
window.addEventListener('DOMContentLoaded', initGame);

// Payment system functions
function processPayment(amount) {
    // In real implementation, this would connect to payment gateway
    return new Promise((resolve) => {
        setTimeout(() => {
            gameState.balance += amount;
            updateUI();
            resolve(true);
        }, 1000);
    });
}

function withdrawFunds(amount) {
    // In real implementation, this would process withdrawal
    return new Promise((resolve) => {
        if (amount > gameState.balance) {
            resolve(false);
            return;
        }
        
        setTimeout(() => {
            gameState.balance -= amount;
            updateUI();
            resolve(true);
        }, 1000);
    });
}

// Demo payment functions for UI
document.getElementById('deposit-btn')?.addEventListener('click', () => {
    const amount = parseInt(prompt('Masukkan jumlah deposit:'));
    if (!isNaN(amount) && amount > 0) {
        processPayment(amount).then(success => {
            alert(success ? `Deposit $${amount} berhasil!` : 'Deposit gagal');
        });
    }
});

document.getElementById('withdraw-btn')?.addEventListener('click', () => {
    const amount = parseInt(prompt('Masukkan jumlah penarikan:'));
    if (!isNaN(amount) && amount > 0) {
        withdrawFunds(amount).then(success => {
            alert(success ? `Penarikan $${amount} berhasil!` : 'Saldo tidak mencukupi');
        });
    }
});
