import Database from 'better-sqlite3';


    function GetReflections() 
    {
        try {
            const db = new Database('reflectionsDB.db', { verbose: console.log });
            const rows = db.prepare('SELECT * FROM reflections').all();
            db.close();
            return rows;
        } catch (e)
        {
            return e
        }
    }
    
    function PostReflections(data)
    {
        try {
            const parsed = JSON.parse(data)
            const db = new Database('reflectionsDB.db', { verbose: console.log });
            const insert = db.prepare('INSERT INTO reflections (day, isFavorite, goal, challenge, response) VALUES (?, ?, ?, ?, ?)');
            insert.run(parsed.day, parsed.isFavorite, parsed.goal, parsed.challenge, parsed.response);
            db.close();
        } catch (e)
        {
            return e
        }
    }

    function RemoveReflection(id)
    {
        try {

            const db = new Database('reflectionsDB.db', { verbose: console.log });
            console.log("number of id:" + id)
            const remove = db.prepare(`DELETE FROM reflections WHERE id = ?`);
            remove.run(parseInt(id))
            db.close();
        } catch (e)
        {
            return e
        }
    }
    
    export default
    {
        GetReflections, PostReflections, RemoveReflection
    }