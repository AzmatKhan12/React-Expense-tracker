
import Expense from "./Components/Expense";


function App(){
   const expense =[
    {
        id :'exp1',
        date: new Date(2022,11,25),
        title: 'Home Loan',
        amount : 30000

    },
    {
        id :'exp2',
        date: new Date(2022,11,5),
        title: 'Phone EMI',
        amount :3000 

    },
    {
        id :'exp3',
        date: new Date(2022,11,10),
        title: 'Room Rent',
        amount : 4000

    },
    {
        id :'exp4',
        date: new Date(2022,11,1),
        title: 'Mesh Bill',
        amount : 8500

    }
   ];
    return (
        <div>
            <h1>Expense Tracker</h1>
             <Expense 
             date = {expense[0].date} 
             title = {expense[0].title}
             amount = {expense[0].amount}>

             </Expense>
             <Expense 
             date = {expense[1].date} 
             title = {expense[1].title}
             amount = {expense[1].amount}>

             </Expense>
             <Expense 
             date = {expense[2].date} 
             title = {expense[2].title}
             amount = {expense[2].amount}>

             </Expense>
             <Expense 
             date = {expense[3].date} 
             title = {expense[3].title}
             amount = {expense[3].amount}>
             </Expense>

        </div>
        
    );
}
export default App;