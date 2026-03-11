export default function Communication()
{
    async function fetchData()
    {
        fetch("http://localhost:8080/")
        .then(response => response.json()) // or .text()
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
}