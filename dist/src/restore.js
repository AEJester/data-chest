const fs = require("fs");

const restore = (backup_name) => {
    if (!fs.existsSync("./backups/"+backup_name)) {
        throw new Error("No backup found under name: "+backup_name);
    }
    let items = fs.readdirSync("./backups/"+backup_name);
    let finalized = [];
    for (let i = 0; i < items.length; i++) {
        if (fs.existsSync("./database/"+items[i])) {
            fs.unlinkSync("./database/"+items[i]);
        }
        fs.copyFileSync("./backups/"+backup_name+"/"+items[i], `./database/${items[i]}`);
        console.log("Restored backup of "+items[i].replace(".json", ""));
    }
    
}

module.exports = restore;