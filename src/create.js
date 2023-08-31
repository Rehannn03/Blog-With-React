import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create = () => {
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('Jabba')
    const [pending,setPending]=useState(false)
    const history=useHistory()
    const handleevent= (e)=>{
        e.preventDefault()

        const blog={title,body,author}
        setPending(true)
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New blog Added')
            setPending(false)
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h2>Add New Bloggg</h2>
            <form onSubmit={handleevent}>
                <label> Blog Title</label>
                <input type="text" 
                required
                value={title}
                onChange={(e)=>(setTitle(e.target.value))}
                />
                <label> Blog Body</label>
                <textarea 
                required
                value={body}
                onChange={(e)=>(setBody(e.target.value))}></textarea>
                <label >Blog Author</label>
                <select value={author} onChange={(e)=>(setAuthor(e.target.value))}>
                    <option value="Mario">Mario</option>
                    <option value="Jabba">Jabba</option>
                    <option value="yoshi">Yoshi</option>
                    
                </select>
                {!pending &&<button>Add Blog</button>}
                {pending && <button disabled>Adding blog....</button>}
            </form>
        </div>
    );
}
 
export default Create;