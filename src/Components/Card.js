import React from 'react';

const card = ({name, email, id}) => {
    
    return (
        <div className =" tc bg-light-green dib br3 ma2 grow bw2 shadow5">
          
          <img alt ="robots" src={`https://robohash.org/${id}?200*200`} />
          <div>
            <h2> {name}</h2>
            <p>{email}</p>
           </div>
        </div>
    );

}
export default card;