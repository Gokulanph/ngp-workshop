// scripts/build.js
const fs = require('fs-extra');
const path = require('path');

async function build() {
    const env = process.env.NODE_ENV || 'production';
    
    // Create dist directory
    await fs.ensureDir('dist');
    
    // Copy all files except configs and the dist directory itself
    await fs.copy('.', 'dist', {
        filter: (src) => {
            const basePath = path.resolve('.');  // Get the base directory
            return !src.startsWith(path.join(basePath, 'dist')) &&  // Exclude dist directory
                   !src.includes('config') && 
                   !src.includes('node_modules') &&
                   !src.includes('test') &&
                   !src.includes('scripts') &&
                   !src.endsWith('package.json') &&
                   !src.endsWith('package-lock.json');
        }
    });

    // Copy appropriate config file
    const configSource = env === 'development' 
        ? 'config/config.dev.js' 
        : 'config/config.prod.js';
    
    await fs.copy(configSource, 'dist/js/config.js');
    
    console.log(`Built for ${env} environment`);
}

build().catch(console.error);
