export async function getUser(email:string) : Promise<any> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const fileUrl = 'http://localhost:8080/cs-support-service/sftp/getUser?email=' + email;

    const res = await fetch(fileUrl);

    return await res.json();
}