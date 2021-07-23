import { gql } from "@apollo/client";

const { client } = require("./client")

export const list = () =>{
    client.query({
      query: gql`
      query GetRates {

          persons(page:1,size: 20){
              id,name,birth,bornIn,summary,images,slug
          }
      }
      `
    })
    .then(result => console.log(result));
}

