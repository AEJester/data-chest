const fs = require("fs");

const wipe = () => {
    let items = fs.readdirSync("./database/");
    for (let i = 0; i < items.length; i++) {
        let raw_data;
        raw_data = fs.readFileSync(`./database/${items[i]}`, "utf8");
        let data = JSON.parse(raw_data);
        data.pairs = [{key:"default",value:"0"}];
        let new_data = JSON.stringify(data);
        fs.writeFileSync(`./database/${items[i]}`, new_data);
        console.log("Cleared: "+items[i]);
    }
}

module.exports = wipe;