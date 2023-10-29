export default async function GraphQ() {


    let globalUserData = null;
  const endpoint = 'https://api.thegraph.com/subgraphs/name/volodymyrzolotukhin/sbtidentityverifier-polygon';
  const address = '0x62019b7b8f7d5b58006c5001eb1ffa95ab191474';
  //0x62019b7b8f7d5b58006c5001eb1ffa95ab191474
  const query = `
    query info($address: String!) {
      users(where: { senderAddr: $address }) {
        id
      }
    }
  `;

  const temp = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { address },
    }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    if (data.errors) {
      // Handle GraphQL errors, if any
      console.error('GraphQL errors:', data.errors);
    } else {

        if(data.data!=null)
        {
            requestGrantRole();
        }

        return data.data;
      //console.log('User Data:', data.data); // The response data containing user information
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });


  async function requestGrantRole() {
    // Then make a request to our API endpoint.
    try {
      const response = await fetch(`http://localhost:3000/api/hello`, {
        method: "POST",
      });
      const data = await response.json();
      console.log("data: ", data);
    } catch (e) {
      console.error(e);
    } finally {
    
    }
  };
 
  return (
    <>
    <div className="reviveForm">
          <div className="reviveForm__container">
      {
        temp!=null && address!=""? <>You are whitelisted and verified. Check Discord</> :
        <>
            <h3>OOPs you are not verified</h3>
          <a href="https://robotornot.mainnet-beta.rarimo.com/">
          <h3>GO TO THE VERIFICATION PAGE</h3>
          </a>
        </>

      }
      </div>
        </div> 
    </>
    
  )
}
