const fs = require('fs');

async function ReadJson()
{
    try {
        const data = fs.readFileSync('tododata.json', 'utf8');
        const parsed = JSON.parse(data);
        return parsed;
    } catch (err)
    {
        if (err) throw err;
        //todo 
    }
}
