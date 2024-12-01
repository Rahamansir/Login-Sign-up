 export  interface Fieldprops {
  label: string;
  placeholder?: string;
  type? : string,
 }


export default function Fields(props :Fieldprops){
   return <div>
      <label>{props.label}:</label>
      <input placeholder={props.placeholder}/>
     
         </div>
}