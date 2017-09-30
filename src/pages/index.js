import React from "react"

export default ({data}) => {
	return(
		<div>
			<h1>Basic Hiragana</h1>
			<table>
			    <thead>
			        <tr>
			            <th>Hiragana</th>
			            <th>Romanji</th>
			        </tr>
			    </thead>
			      	<tbody>
			          {data.allHiraganaJson.edges.map(({ node }) =>
			            <tr>
			              <td>
			                {node.hiragana}
			              </td>
			              <td>
			                {node.romanji}
			              </td>
			            </tr>
			          )}
			    	</tbody>
			</table>
		</div>
		)
}

export const query = graphql`
  query MyFilesQuery {
   allHiraganaJson {
    edges {
      node {
        hiragana
        romanji
     	}
      }
  	}
  }
`