const fs = require('fs-extra');
const path = require('path');

async function build() {
    const env = process.env.NODE_ENV || 'production';

    // Create dist directory
    await fs.ensureDir('dist');

    // Define directories and files to copy
    const itemsToCopy = [
        'js',
        'index.html',
        // Add other directories/files you need
    ];

    // Copy each item to dist
    for (const item of itemsToCopy) {
        await fs.copy(item, path.join('dist', item)).catch(err => {
            console.error(`Error copying ${item}:`, err);
        });
    }

    // Copy appropriate config file
    const configSource = env === 'development'
        ? 'config/config.dev.js'
        : 'config/config.prod.js';

    await fs.copy(configSource, 'dist/js/config.js');

    console.log(`Built for ${env} environment`);
}

build().catch(console.error);