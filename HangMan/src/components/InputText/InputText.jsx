import Button from "../Button/Button";

function InputText(){
    return (
        
        <div className="lg:file:flex md:block bg-slate-200 mx-6 px-8 py-4 space-x-40  justify-center">
            <label className="md:text-center font-bold py-3 "> Enter Suggested word</label>
            <input className=" border-2 border-red-500 py-3 rounded-lg " type="password" placeholder="Please Enter Text" />
            <Button/>
        
        </div>
    );
}

export default InputText;