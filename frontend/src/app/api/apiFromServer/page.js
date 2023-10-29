import { headers } from "next/headers";

export default async function APIFromServer() {
  const resp = await fetch("http://localhost:3000/api/whoami", {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());

  console.log("resp?.name:  ", resp?.name);
  return (
    <div>
      <div>
        API Route From <span className="font-bold underline">Server</span>
      </div>
      <div>Name: {resp?.name}</div>
    </div>
  );
}
