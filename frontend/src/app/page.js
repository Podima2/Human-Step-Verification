import styles from './page.module.css'

import { getServerSession } from "next-auth";
export default async function Home() {
 
  const session = await getServerSession();
    console.log("Session: ", session?.user?.name);

  return (

    <>
      <h1 className='Title_Rarimo'> Rarimo Verification </h1>;
    </>
  )
}
