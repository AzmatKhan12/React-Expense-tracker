
import Expense from "./Components/Expense";


function App(){

    let expenesDate = new Date(2022,11,9);
    let expenesTitle = "Home Loan";
    let expenesAmount = 300;
    return (
        <div>
            <h1>Expense Tracker</h1>
             <Expense 
             date = {expenesDate} 
             title = {expenesTitle}
             amount = {expenesAmount}>

             </Expense>

        </div>
        
    );
}
export default App;