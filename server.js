const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Game API Routes
app.post('/api/bet', (req, res) => {
    // In real implementation, validate bet and user balance
    const { amount, userId } = req.body;
    
    // Process bet (simplified)
    const accepted = Math.random() > 0.1; // 90% acceptance rate for demo
    
    if (accepted) {
        res.json({ 
            success: true, 
            message: 'Taruhan diterima',
            newBalance: 1000 - amount // Simplified
        });
    } else {
        res.status(400).json({ 
            success: false, 
            message: 'Taruhan ditolak' 
        });
    }
});

app.post('/api/cashout', (req, res) => {
    // In real implementation, process winnings
    const { userId, amount } = req.body;
    
    res.json({ 
        success: true,
        message: 'Penarikan diproses',
        transactionId: 'TX' + Date.now()
    });
});

// Payment API Routes
app.post('/api/deposit', (req, res) => {
    // In real implementation, integrate with payment gateway
    const { amount, method } = req.body;
    
    res.json({
        success: true,
        newBalance: 1000 + amount,
        transactionId: 'DP' + Date.now()
    });
});

app.post('/api/withdraw', (req, res) => {
    // In real implementation, verify balance and process withdrawal
    const { amount, method } = req.body;
    
    if (amount > 1000) { // Simplified balance check
        res.status(400).json({
            success: false,
            message: 'Saldo tidak mencukupi'
        });
    } else {
        res.json({
            success: true,
            newBalance: 1000 - amount,
            transactionId: 'WD' + Date.now()
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
