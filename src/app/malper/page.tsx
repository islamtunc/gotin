// Bismillahirahmanirahim



import PostEditor from '@/components/posts/editor/PostEditor'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import UserButton from '@/components/UserButton'
import { BellElectric, BellElectricIcon, BrushIcon, Building, Car, Circle, CircleAlertIcon, Hammer, HandPlatter, HomeIcon, Palette, Pen, PenBox, PenBoxIcon, PenIcon, ScissorsIcon } from 'lucide-react'
import { Container } from 'postcss'
import React from 'react'
import { Card } from 'stream-chat-react'

function page() {
  return (<div>

<Textarea> KATEGORİLER</Textarea>

<div style={{alignContent:"center",justifyContent:"center",display:"flex"}}>

<div>
<div style={{ borderColor:"green",borderWidth:5, width:95, height:129}}>

<HomeIcon href='/malper/mmavahi' style={{width:75 ,height:75, color:"green"}}/>
<Button>Emlak</Button> 



 </div>

<br></br><br></br>
 <div style={{ borderColor:"green",borderWidth:5, width:95, height:129}}>

<Car href='/malper/mmavahi' style={{width:75 ,height:75, color:"green"}}/>
 
 <Button > Araba</Button>



 </div>

<br></br>
 </div>
<br></br>
<div>
<div style={{ borderColor:"green", borderWidth:5, width:155, height:115 ,display:"flex",flexDirection:"column"}}>
<div style={{ borderColor:"green",alignItems:"center" , display:"flex", width:195, height:129,justifyContent:"center"}}>

<BrushIcon href='/malper/mmavahi' style={{width:55,height:75, color:"green",float:"right"}}/>

<Palette href='/malper/mmavahi' style={{ color:"green",paddingLeft:0}}/>


<ScissorsIcon/>
</div>

<Button style={{}} > Sanat ve El Sanatları</Button>

 </div>   </div>






 <div style={{ borderColor:"green",borderWidth:5, width:95, height:129}}>

<Hammer href='/malper/mmavahi' style={{width:75 ,height:75, color:"green"}}/>
 
 <Button > İnşaat</Button>




 </div>
 
 </div>














    </div>
  )
}

export default page