const fs = require('fs');
const path = require('path');

const dir = './categories';
const files = fs.readdirSync(dir);

for (const file of files) {
    if (file.endsWith('.json')) {
        const filePath = path.join(dir, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        let changed = false;
        for (const theme of data) {
            if (theme.isPremium === true) {
                theme.isPremium = false;
                changed = true;
            }
        }
        
        if (changed) {
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
            console.log(`Updated ${file}`);
        }
    }
}
