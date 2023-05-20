import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
    const [toys, setToys] = useState([])

    useEffect(()=>{
        fetch('toyes.json')
        .then(res => res.json())
        .then(data => {
            setToys(data)
        })
    },[])
    
    return (
        <div>
           <h3 className="text-3xl text-center font-bold">Gallery</h3> 
           <section className="m-10">
           <div className="grid md:grid-cols-5 gap-8">
            {
                toys.map(toy => <GalleryCard key={toy.id} toy={toy}></GalleryCard>)
            }
           </div>
           </section>
        </div>
    );
};

export default Gallery;