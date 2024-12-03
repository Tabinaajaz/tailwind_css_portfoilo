
export default function  Skill(){
    return(
// skill html
<div className="text-center text-2xl bg-black    text-white p-5">
<h1 className="mb-4 text-6xl font-serif font-bold">skills</h1>
<div className="space-y-4">
 
{/* html skill */}
<div>
    <div className=" flex justify-between"> <span  className=" text-xl font-serif" >
   HTML </span>
   <span>60%</span></div>
    
    
        <div className="w-full bg-gray-300 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full" style={{width:"60%"}}>  </div>
            
</div>
</div>
</div>
{/* css skill */}
<div>
<div className="flex justify-between">

    <span className="text-xl font-serif">CSS</span>
    <span>60%</span></div>
    
        <div className="w-full  bg-slate-300 rounded-full h-4">
                <div className="bg-green-600 h-4 rounded-full" style={{width:"70%"}}>  </div>
            
</div>
</div>
{/* typescript */}
<div>
<div className="flex justify-between">

    <span className=" text-xl font-serif ">TYPESCRIPT</span>
    <span>50%</span>
    </div>
    
        <div className="bg-gray-300 w-full rounded-full h-4">
                <div className="bg-yellow-500 w-full rounded-full h-4" style={{width:"50%"}}>  </div>
            
</div>
</div>
{/* javascript skill */}
<div>
<div className="flex justify-between">

    <span className="text-xl font-serif">JAVASCRIPT</span>
        <span>50%</span></div>
    
        <div className="bg-gray-300 w-full rounded-full h-4">
                <div className="bg-red-500 w-full rounded-full h-4" style={{width:"50%"}}>  </div>
            
</div>
</div>


            </div>
            
        
    )
}

