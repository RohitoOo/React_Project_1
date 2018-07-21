import React, {Component} from 'react';
import './App.css';

function Me({data}) {

  return (<ul>
    {data.details.map(function(x){
      return <li className="list_items">
 {x.username}  { x.provider} || {x.engagement}  {x.channel}
 {x.url } {x.link } {x.type }</li>
    })}
    </ul>
    )
}


export default Me;
