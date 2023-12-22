'use client'
import { fromJSON } from 'postcss';
import React, { FormEvent, useState } from 'react'
type Props = {
    params: { slug: string, component: string }
}

export default function CommentEntry({params: {slug,component}}: Props){
    const [fState, setFState] = useState({
        user: '',
        comment: '',
      });
    const [time,setTime]=useState("")

    
    function onChange(event: { target: { name: any; value: any; }; }) {
        const { name, value } = event.target;
        setFState(prevState => ({ ...prevState, [name]: value }));
      }
    async function submitComment(event: FormEvent<HTMLFormElement>){
        if (!fState.user || !fState.comment) {
            alert('Do not leave any fields blank!');
            return
        }    
        try {
            const res=await fetch(`http://localhost:3000/api/${component}/${slug}/comment`, {
            method: 'POST',
            body: JSON.stringify(
                {
                    user: fState.user,
                    comment: fState.comment,
                    time: time,
                    slug: slug
                }
            )
        });

        } catch(e){
            throw Error("Could not post.")
        }
    }
    return(
        <div>
            <form method='post' onSubmit={submitComment}>
                <label>
                Name: <input name="user" id='1' onChange={onChange}/>
                </label>
                <label>
                Comment: <input name="comment" id='2' onChange={onChange}/>
                </label>
            <button name="submitComment" type='submit' onClick={(e)=>setTime((new Date()).toString())}>Submit</button>
            </form>
        </div>
    )

}