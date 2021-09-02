import React,{Component} from 'react';
import reactDom from 'react-dom';
import './Demo.css';

const Demo = ({name}) =>{
    return <div className="hello"><h1 >Hello sir ji created by {name}</h1></div>
}

export default Demo;