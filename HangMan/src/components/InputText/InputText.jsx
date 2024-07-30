import Button from "../Button/Button";

function InputText(){
    return (
        
        <div className="flex bg-slate-200 mx-6 px-8 space-x-40  justify-center">
            <label className="flex font-bold py-3"> Enter Suggested word</label>
            <input className=" border-2 border-red-500 py-3 " type="password" placeholder="Please Enter Text" />
            <Button/>
        
        </div>
    );
}

export default InputText;