import Dexie from "dexie";

const db = new Dexie('LsrDB');
db.version(1).stores({
    users: '++id, name, email, password, rules',
    posts: '++id, userId, title, content',
});

db.users.bulkAdd([
    {
        name: "Đỗ Mạnh Cường", 
        email:"truongdoan@gmail.com", 
        password:"123456",
        rules:"Leader",
    },
    {
        name: "Nguyễn Trọng Nghĩa", 
        email:"ntn8530@gmail.com", 
        password:"Tnc2024@",
        rules:"Admin",
    },
    {
        name: "Nguyễn Trọng Nghĩa", 
        email:"ntn8530@gmail.com", 
        password:"Tnc2024@",
        rules:"User",
    }
]).then(() => {
    console.log("Multiple users added");
  }).catch((err) => {
    console.error("Failed to add users: " + (err.stack || err));
  });