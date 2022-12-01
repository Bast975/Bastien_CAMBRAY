import React, { useContext, useState, useEffect } from "react";
import "../../main.css";
import "../../light.css";
import { ModeContext } from '../../App';
import { Link } from "react-router-dom";


function Blog(props) {
    const modecontext = useContext(ModeContext)
    let b = props.blog
    const [color, setColor] = useState('dark');

    useEffect(() => {
        if (modecontext.mode === "dark") {
            setColor('light')
        } 
        if (modecontext.mode === "light") {
            setColor('dark')
        }
       }, [modecontext])

    return <div className="col-md-6">
        <Link to="/Blogpost" className={`blog-card-${modecontext.mode}`}>
            <div className={`row g-0 border border-${color} rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative`}>
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">{b.theme}</strong>
                    <h3 className="mb-0">{b.title}</h3>
                    <div className="mb-1 text-muted">{b.date}</div>
                    <p className="card-text mb-auto">{b.desc}</p>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img src={b.img} alt={b.title} className="bd-placeholder-img" width="200" height="250"></img>
                </div>
            </div>
        </Link>
    </div>
}
export default Blog;