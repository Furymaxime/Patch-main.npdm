// Import required modules
const fs = require('fs');
const path = require('path');

// Function to replace data in a file at a specific position
function replaceData(filename, position, data) {
    const buffer = Buffer.from(data);

    fs.open(filename, 'r+', (err, fd) => {
        if (err) {
            console.error(`Unable to open file: ${filename}`, err);
            return;
        }

        fs.write(fd, buffer, 0, buffer.length, position, (writeErr) => {
            if (writeErr) {
                console.error(`Failed to write data at position ${position}`, writeErr);
            } else {
                console.log(`Patched ${filename} at position ${position} with data:`, buffer);
            }

            fs.close(fd, (closeErr) => {
                if (closeErr) console.error(`Failed to close file: ${filename}`, closeErr);
            });
        });
    });
}

// Function to apply patch 0x04 to a specific file
function applyForceDebugPatch(filepath) {
    const pos1 = 818;  // Offset 0x332
    const pos2 = 1010; // Offset 0x3F2
    const patch = [0x08];

    replaceData(filepath, pos1, patch);
    replaceData(filepath, pos2, patch);

    console.log(`Patch 0x04 applied to ${filepath}`);
}

// Main function to handle patching
function main() {
    const filePath = path.join('exefs', 'main.npdm');

    if (fs.existsSync(filePath)) {
        console.log(`Found file: ${filePath}`);
        applyForceDebugPatch(filePath);
    } else {
        console.error(`File not found: ${filePath}`);
    }
}

// Execute main function
main();
