import React, {Component} from 'react';
import './App.css';

function Me({data}) {

  return (<ul>
    {data.details.map(function(data){
      return <li className="list_items">
 {data.username}  { data.provider} || {data.engagement}  {data.channel}
 {data.url } {data.link } {data.type }</li>
    })}
    </ul>
    )
}


export default Me;
