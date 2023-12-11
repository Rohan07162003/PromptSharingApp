import Promptcard from "./Promptcard"

const Profile = ({name,desc,data,handleEdit,handleDelete}) => {
  return (
    <section className="w-full">
        <h1 className="head_text text-left black_gradient google_font pb-2">{name} Profile</h1>
        <p className="desc text-left">{desc}</p>
        <div className="mt-10 prompt_layout">
            {data.map((post)=>(
                <Promptcard key={post._id} post={post} 
                handleEdit={()=>handleEdit && handleEdit(post)}
                handleDelete={()=>handleDelete && handleDelete(post)}/>
            ))}
        </div>
    </section>
  )
}

export default Profile