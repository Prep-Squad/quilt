import React from 'react'

export default function Error(props) {
        if(props.error === '') return null;
           return <p>{props.error}</p>
}
