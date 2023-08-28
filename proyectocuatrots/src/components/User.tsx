export const User = ({obj,val,separaCadena}:any) => {

    const {left,center,right} = separaCadena(obj.name.first,val)

    return(
        <div className='user'>
            {left} 
            <span style={{fontWeight:'bolder'}}>{center}</span> 
            {right}
        </div>
    )

}