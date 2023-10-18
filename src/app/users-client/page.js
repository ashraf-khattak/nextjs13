import Link from "next/link";

async function getUsers() {
  let data = await fetch("http://localhost:3001/api/users");
  data = await data.json();
  return data;
}

export default async function Page() {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <h1>User List</h1>
      <Link href="/">Go to Home Page</Link>
      <br/>
      <br/>
      {users.name}
      {users.map((item) => (
        <>
          <div>
            <Link href={`users-client/${item.id}`}>{item.name}</Link>
          </div>
        </>
      ))}
    </div>
  );
}
