// const express = require('express');
// const fetch = import('node-fetch');

// const app = express();
// const PORT = process.env.PORT || 8000;

// app.use(express.json());

// app.get('/pokeapi/:input', async (req, res) => {
//     const { input } = req.params;
//     const url = `https://api.pokemon.project.projectrexa.dedyn.io/pokeapi/${input.toLowerCase()}`;

//     try {
//         const response = await fetch(url, {
//             headers: {
//                 'Authorization': 'E11C11FAF4381CA98479597E887C8'
//             }
//         });
//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
